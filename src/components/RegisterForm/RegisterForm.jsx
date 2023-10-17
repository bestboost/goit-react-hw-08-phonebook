import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectBtn } from 'redux/contacts/selectors';
import { Form, Label, Input, RegButton } from './RegisterForm.styled';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const btn = useSelector(selectBtn);
  const notify = () => toast.error('Fill all form, please');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name === '' || email === '' || password === '') {
      notify();
      return btn;
    }
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <RegButton type="submit">Register</RegButton>
    </Form>
  );
};
