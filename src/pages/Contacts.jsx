import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
//
import { fetchContacts } from 'redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';

export default function Contacts() {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();

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
      <h3>contacts</h3>
      <h2>contacts list</h2>
      {/* <ContactsList /> */}
    </>
  );
}
