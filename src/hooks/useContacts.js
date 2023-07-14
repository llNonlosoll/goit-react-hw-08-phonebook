import { useSelector } from 'react-redux';
import { selectIsLoading, selectAllContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const allContacts = useSelector(selectAllContacts);

  return {
    isLoading,
    allContacts,
  };
};
