import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/contacts/operations';

import {
  ContactFormStyled,
  ContactFormTextStyled,
  ContactFormLabelStyled,
  ContactFormInputStyled,
  ContactFormButtonStyled,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const { allContacts } = useContacts();

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

    dispatch(addContact({ name, number }));

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