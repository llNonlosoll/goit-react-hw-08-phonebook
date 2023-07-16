// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';
// Styled component for NavLink component
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  // Get authentication status using useAuth() hook
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </nav>
  );
};
