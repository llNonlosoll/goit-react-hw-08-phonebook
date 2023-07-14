// import hooks useDispatch, useSelector
import { useSelector, useDispatch } from 'react-redux';
// import fetch function
import { deleteContact } from 'redux/operations';
// import selector
import { selectFilteredContacts } from 'redux/selectors';
// import styled components
import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

// Contacts component
export const Contacts = () => {
  // getting a list of contacts from the state
  const contacts = useSelector(selectFilteredContacts);

  // variables dispatch
  const dispatch = useDispatch();

  // delete contact function
  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsListList>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactsListItemContainer>
            <p>{contact.name}: </p>
            <p>{contact.phone}</p>
          </ContactsListItemContainer>
          <ContactsListButton
            type="button"
            name="delete"
            onClick={() => handleContactDelete(contact.id)}
          >
            Delete
          </ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsListList>
  );
};
