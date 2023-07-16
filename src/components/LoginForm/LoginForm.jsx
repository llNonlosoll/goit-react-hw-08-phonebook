import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  LoginFormStyled,
  LoginFormLabelStyled,
  LoginFormInputStyled,
  LoginFormButtonStyled,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabelStyled>
        Email
        <LoginFormInputStyled type="email" name="email" />
      </LoginFormLabelStyled>
      <LoginFormLabelStyled>
        Password
        <LoginFormInputStyled type="password" name="password" />
      </LoginFormLabelStyled>
      <LoginFormButtonStyled type="submit">Log In</LoginFormButtonStyled>
    </LoginFormStyled>
  );
};
