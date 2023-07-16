import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  RegisterFormStyled,
  RegisterFormLabelStyled,
  RegisterFormInputStyled,
  RegisterFormButtonStyled,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
