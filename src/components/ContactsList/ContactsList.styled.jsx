import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 550px;

  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  list-style: none;
`;

export const ContactsListItemStyled = styled.li`
  padding: 5px;

  backdrop-filter: blur(10px);

  border: 1px solid #f5fc69;
  border-radius: 4px;
`;
