import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 550px;

  margin-left: auto;
  margin-right: auto;

  padding: 10px;

  border: 1px solid #f5fc69;
  border-radius: 4px;
`;

export const LoginFormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  font-size: 22px;
  color: #f5fc69;
`;

export const LoginFormInputStyled = styled.input`
  font-size: 22px;

  background-color: transparent;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  color: #f5fc69;
`;

export const LoginFormButtonStyled = styled.button`
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
