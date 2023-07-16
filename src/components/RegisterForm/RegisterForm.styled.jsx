import styled from 'styled-components';

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 550px;

  margin-left: auto;
  margin-right: auto;

  padding: 10px;

  border: 1px solid #f5fc69;
  border-radius: 4px;
`;

export const RegisterFormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  font-size: 22px;
  color: #f5fc69;
`;

export const RegisterFormInputStyled = styled.input`
  font-size: 22px;

  background-color: transparent;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  color: #f5fc69;
`;

export const RegisterFormButtonStyled = styled.button`
  font-size: 22px;
  color: #f5fc69;

  background-color: transparent;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #111111;
    background-color: #f5fc69;
  }
`;
