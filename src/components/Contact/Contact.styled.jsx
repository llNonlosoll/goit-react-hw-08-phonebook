import styled from 'styled-components';

export const ContactContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #f5fc69;
`;

export const ContactTextContainerStyled = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContactTextStyled = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 22px;
  color: #f5fc69;
`;

export const ContactButtonContainerStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContactButtonStyled = styled.button`
  width: 100px;
  height: 30px;

  font-size: 20px;
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

export const EditContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  gap: 5px;

  margin-top: 10px;
  padding: 10px;
`;

export const EditContactFormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  font-size: 22px;
  color: #f5fc69;
`;

export const EditContactFormInputStyled = styled.input`
  font-size: 22px;

  background-color: transparent;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  color: #f5fc69;
`;

export const EditContactButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
