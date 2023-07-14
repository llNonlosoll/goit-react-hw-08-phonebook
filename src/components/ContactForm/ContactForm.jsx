import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/contacts/operations';

export const ContactFormComponent = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const { allContacts } = useContacts();

  // onSubmit function
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    // variables isInContacts
    const isInContacts = allContacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    // Contact check if contact is in contact list
    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    // add contact
    dispatch(addContact({ name, number }));

    // form reset
    setName('');
    setNumber('');
  };

  // onChange setName function
  const handleNameChange = event => setName(event.target.value);

  // onChange setPhone function
  const handleNumberChange = event => setNumber(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          id="number"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
