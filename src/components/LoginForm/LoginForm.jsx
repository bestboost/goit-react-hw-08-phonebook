import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, LogButton } from './LoginForm.styled';
import { selectUser } from '../../redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    if ((form.elements.email.value === '', form.elements.password.value)) {
    }
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
