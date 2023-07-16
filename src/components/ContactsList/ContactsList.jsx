import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/filter/selectors';

import { Contact } from 'components/Contact/Contact';

import {
  ContactsListStyled,
  ContactsListItemStyled,
} from './ContactsList.styled';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactsListStyled>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItemStyled key={id}>
          <Contact id={id} name={name} number={number}></Contact>
        </ContactsListItemStyled>
      ))}
    </ContactsListStyled>
  );
};
