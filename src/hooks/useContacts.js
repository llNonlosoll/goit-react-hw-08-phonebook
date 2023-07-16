// React Redux's useSelector hook
import { useSelector } from 'react-redux';
// Selectors for loading status and all contacts
import { selectIsLoading, selectAllContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
  // Get the isLoading value from the Redux store
  const isLoading = useSelector(selectIsLoading);
  // Get the allContacts array from the Redux store
  const allContacts = useSelector(selectAllContacts);

  return {
    isLoading,
    allContacts,
  };
};
