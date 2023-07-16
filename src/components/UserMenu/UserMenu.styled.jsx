import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const TextStyled = styled.p`
  margin: 0;

  font-weight: 700;
  font-size: 20px;
  color: #f5fc69;
`;

export const ButtonStyled = styled.button`
  padding: 5px;

  font-size: 20px;
  font-weight: 700;
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
