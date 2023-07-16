// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';
// Navigation component
import { Navigation } from 'components/Navigation/Navigation';
// User menu component
import { UserMenu } from 'components/UserMenu/UserMenu';
// Auth navigation component
import { AuthNav } from 'components/AuthNav/AuthNav';
// Styled component for the AppBar component
import { HeaderStyled } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth(); // Get authentication status using useAuth() hook

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
