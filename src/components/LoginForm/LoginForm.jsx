import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectBtn } from 'redux/contacts/selectors';
import { Form, Label, Input, LogButton } from './LoginForm.styled';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const btn = useSelector(selectBtn);
  const notify = () => toast.error('Fill all form, please');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
      notify();
      return btn;
    }
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <LogButton type="submit">Log In</LogButton>
    </Form>
  );
};
