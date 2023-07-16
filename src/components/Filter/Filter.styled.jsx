import styled from 'styled-components';

export const FilterContainerStyled = styled.div`
  display: flex;
  justify-content: center;

  max-width: 550px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const FilterLabelStyled = styled.label`
  display: flex;
  gap: 10px;

  font-size: 22px;
  color: #f5fc69;
`;

export const FilterInputStyled = styled.input`
  font-size: 22px;

  background-color: transparent;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  color: #f5fc69;
`;
