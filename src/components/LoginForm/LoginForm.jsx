// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// Operation for logging in
import { logIn } from 'redux/auth/operations';
// Styled components for the LoginForm component
import {
  LoginFormStyled,
  LoginFormLabelStyled,
  LoginFormInputStyled,
  LoginFormButtonStyled,
} from './LoginForm.styled';

export const LoginForm = () => {
  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // handleSubmit function
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Dispatch the logIn operation with the email and password values
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    // Form reset
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
