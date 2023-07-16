// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// Operation for registering a user
import { register } from 'redux/auth/operations';
// Styled components for the RegisterForm component
import {
  RegisterFormStyled,
  RegisterFormLabelStyled,
  RegisterFormInputStyled,
  RegisterFormButtonStyled,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // handleSubmit function
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Dispatch the register operation with the name, email, and password values
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    // Form reset
    form.reset();
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
      <RegisterFormLabelStyled>
        Username
        <RegisterFormInputStyled type="text" name="name" />
      </RegisterFormLabelStyled>
      <RegisterFormLabelStyled>
        Email
        <RegisterFormInputStyled type="email" name="email" />
      </RegisterFormLabelStyled>
      <RegisterFormLabelStyled>
        Password
        <RegisterFormInputStyled type="password" name="password" />
      </RegisterFormLabelStyled>
      <RegisterFormButtonStyled type="submit">
        Register
      </RegisterFormButtonStyled>
    </RegisterFormStyled>
  );
};
