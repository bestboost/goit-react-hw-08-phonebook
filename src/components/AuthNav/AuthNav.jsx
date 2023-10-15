import { AuthBox, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBox>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthBox>
  );
};
