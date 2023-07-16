// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// Custom hook for accessing contacts
import { useContacts } from 'hooks/useContacts';
// operation for adding contacts
import { addContact } from 'redux/contacts/operations';
// Styled components for the ContactForm component
import {
  ContactFormStyled,
  ContactFormTextStyled,
  ContactFormLabelStyled,
  ContactFormInputStyled,
  ContactFormButtonStyled,
} from './ContactForm.styled';

export const ContactForm = () => {
  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // Custom hook for accessing contacts from the Redux store
  const { allContacts } = useContacts();

  // handleSubmit function
  const handleSubmit = event => {
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

    // Dispatch the addContact action
    dispatch(addContact({ name, number }));

    // Form reset
    form.reset();
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <ContactFormTextStyled>
        Add Contact to your Phonebook
      </ContactFormTextStyled>
      <ContactFormLabelStyled htmlFor="name">
        Name
        <ContactFormInputStyled
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormLabelStyled>
      <ContactFormLabelStyled htmlFor="number">
        Number
        <ContactFormInputStyled
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormLabelStyled>
      <ContactFormButtonStyled type="submit">
        Add Contact
      </ContactFormButtonStyled>
    </ContactFormStyled>
  );
};
