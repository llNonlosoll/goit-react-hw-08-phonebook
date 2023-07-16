// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// Operation for logging out
import { logOut } from 'redux/auth/operations';
// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';
// Styled components for the UserMenu component
import { ContainerStyled, TextStyled, ButtonStyled } from './UserMenu.styled';

export const UserMenu = () => {
  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // Get the authenticated user using useAuth() hook
  const { user } = useAuth();

  // Dispatch the logOut operation to log out the user
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <ContainerStyled>
      <TextStyled>Welcome, {user.name}</TextStyled>
      <ButtonStyled type="button" onClick={handleLogout}>
        Logout
      </ButtonStyled>
    </ContainerStyled>
  );
};
