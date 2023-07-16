// React's useState hook
import { useState } from 'react';
// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// Custom hook for accessing contacts
import { useContacts } from 'hooks/useContacts';
// operations for deleting and editing contacts
import { deleteContact, editContact } from 'redux/contacts/operations';
// Styled components for the Contact component
import {
  ContactContainerStyled,
  ContactTextContainerStyled,
  ContactTextStyled,
  ContactButtonContainerStyled,
  ContactButtonStyled,
  EditContactFormStyled,
  EditContactFormLabelStyled,
  EditContactFormInputStyled,
  EditContactButtonContainer,
} from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  // State for controlling the visibility of the edit form
  const [formVisible, setFormVisible] = useState(false);

  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // Custom hook for accessing contacts from the Redux store
  const { allContacts } = useContacts();

  // Dispatch the deleteContact action
  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  // EditContact function
  const handleContactEdit = event => {
    event.preventDefault();
    const form = event.target;

    const isInContacts = allContacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    // Dispatch the editContact action
    dispatch(editContact({ id, name, number }));

    // Form reset
    form.reset();

    // Toggle the visibility of the edit form
    setFormVisible(!formVisible);
  };

  // Toggle the visibility of the edit form
  const handleEditFormVisible = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      <ContactContainerStyled>
        <ContactTextContainerStyled>
          <ContactTextStyled>{name}: </ContactTextStyled>
          <ContactTextStyled>{number}</ContactTextStyled>
        </ContactTextContainerStyled>
        {!formVisible && (
          <ContactButtonContainerStyled>
            <ContactButtonStyled
              type="button"
              name="edit"
              onClick={() => handleEditFormVisible(id)}
            >
              Edit
            </ContactButtonStyled>
            <ContactButtonStyled
              type="button"
              name="delete"
              onClick={() => handleContactDelete(id)}
            >
              Delete
            </ContactButtonStyled>
          </ContactButtonContainerStyled>
        )}
      </ContactContainerStyled>
      {formVisible && (
        <EditContactFormStyled onSubmit={handleContactEdit}>
          <EditContactFormLabelStyled htmlFor="name">
            Name
            <EditContactFormInputStyled
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </EditContactFormLabelStyled>
          <EditContactFormLabelStyled htmlFor="number">
            Number
            <EditContactFormInputStyled
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </EditContactFormLabelStyled>
          <EditContactButtonContainer>
            <ContactButtonStyled
              type="button"
              name="cancel"
              onClick={() => handleEditFormVisible(id)}
            >
              Cancel
            </ContactButtonStyled>
            <ContactButtonStyled type="submit">Edit</ContactButtonStyled>
          </EditContactButtonContainer>
        </EditContactFormStyled>
      )}
    </>
  );
};
