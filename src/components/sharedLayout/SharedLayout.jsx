import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Tiltle } from './sharedLayaut.styled';

const SharedLayout = () => {
  return (
    <section>
      <Header>
        <Tiltle>Phonebook</Tiltle>
        <AppBar />
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default SharedLayout;
