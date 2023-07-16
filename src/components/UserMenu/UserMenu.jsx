import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import { ContainerStyled, TextStyled, ButtonStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

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
