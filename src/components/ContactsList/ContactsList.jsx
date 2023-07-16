// Redux's useSelector hook for accessing state
import { useSelector } from 'react-redux';
// Selector for retrieving filtered contacts
import { selectFilteredContacts } from 'redux/filter/selectors';
// Contact component
import { Contact } from 'components/Contact/Contact';
// Styled components for the ContactsList component
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
