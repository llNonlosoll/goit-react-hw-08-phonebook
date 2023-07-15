import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from 'redux/filter/selectors';

import { deleteContact } from 'redux/contacts/operations';

// import { selectFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
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
