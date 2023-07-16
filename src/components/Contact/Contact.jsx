import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { deleteContact, editContact } from 'redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const [formVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleContactEdit = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(editContact({ id, name, number }));

    form.reset();

    setFormVisible(!formVisible);
  };

  const handleEditFormVisible = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div>
      <div>
        <p>{name}: </p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        name="delete"
        onClick={() => handleContactDelete(id)}
      >
        Delete
      </button>
      <button
        type="button"
        name="edit"
        onClick={() => handleEditFormVisible(id)}
      >
        {formVisible ? 'Close' : 'Edit Contact'}
      </button>
      {formVisible && (
        <form onSubmit={handleContactEdit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Edit Contact</button>
        </form>
      )}
    </div>
  );
};
