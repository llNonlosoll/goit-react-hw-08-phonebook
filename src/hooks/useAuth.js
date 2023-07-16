// React Redux's useSelector hook
import { useSelector } from 'react-redux';
// Selectors for user data and authentication status
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  // Get the isLoggedIn value from the Redux store
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // Get the isRefreshing value from the Redux store
  const isRefreshing = useSelector(selectIsRefreshing);
  // Get the user object from the Redux store
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
