// React's useEffect hook
import { useEffect } from 'react';
// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// React Helmet for managing document head
import { Helmet } from 'react-helmet';
// Operation for fetching contacts
import { fetchContacts } from 'redux/contacts/operations';
// Custom hook for contacts
import { useContacts } from 'hooks/useContacts';
// ContactForm component
import { ContactForm } from 'components/ContactForm/ContactForm';
// ContactsList component
import { ContactsList } from 'components/ContactsList/ContactsList';
// Filter component
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // Get all contacts and loading status using useContacts() hook
  const { allContacts, isLoading } = useContacts();

  // Dispatch the fetchContacts operation on component mount
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {allContacts.length > 0 && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </>
  );
}
