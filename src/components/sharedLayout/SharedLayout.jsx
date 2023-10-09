import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Nav, Tiltle } from './sharedLayaut.styled';

const SharedLayout = () => {
  return (
    <section>
      <Header>
        <Tiltle>Phonebook</Tiltle>
        <Nav>
          <StyledLink to="/">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </Nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Header>
    </section>
  );
};

export default SharedLayout;
