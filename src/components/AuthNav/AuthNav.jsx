// Styled component for the AuthNav component
import { AuthNavContainerStyled, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainerStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </AuthNavContainerStyled>
  );
};
