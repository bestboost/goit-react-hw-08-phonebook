import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { Box } from '../Box';
import {
  ContactBox,
  ContactList,
  ContactItem,
  ContactName,
  DeleteButton,
  Point,
} from './Phonebook.styled';

const Phonebook = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const deleteContactBtn = id => dispatch(deleteContact(id));

  return (
    <Box>
      <ContactBox>
        <ContactList>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id}>
              <Point></Point>
              <ContactName>
                {contact.name}: {contact.number}
              </ContactName>
              <DeleteButton onClick={() => deleteContactBtn(contact.id)}>
                Delete
              </DeleteButton>
            </ContactItem>
          ))}
        </ContactList>
      </ContactBox>
    </Box>
  );
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Phonebook;
