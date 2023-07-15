import { useDispatch } from 'react-redux';

import { useContacts } from 'hooks/useContacts';

import { deleteContact } from 'redux/contacts/operations';

// import { selectFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const { allContacts } = useContacts();

  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {allContacts.map(contact => (
        <li key={contact.id}>
          <div>
            <p>{contact.name}: </p>
            <p>{contact.number}</p>
          </div>
          <button
            type="button"
            name="delete"
            onClick={() => handleContactDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
