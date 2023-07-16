import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/filter/selectors';

import { Contact } from 'components/Contact/Contact';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number}></Contact>
        </li>
      ))}
    </ul>
  );
};
