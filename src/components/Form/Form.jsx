import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  Form,
  TypeName,
  InputName,
  TypePhone,
  InputPhone,
  AddButton,
} from './Form.styled';
import { selectContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';

const Forms = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handelChange = e => {
    const { value } = e.currentTarget;

    switch (contacts) {
      case 'name':
        addContact(value);
        break;

      case 'number':
        addContact(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    const notify = () => toast(contact.name + ' is already in contacts');

    if (
      contacts.find(
        prevContact =>
          prevContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      notify();
      form.reset();
      return;
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <TypeName>Name</TypeName>
      <InputName
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handelChange}
      />
      <TypePhone>Phone number</TypePhone>
      <InputPhone
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handelChange}
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};

Forms.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Forms;
