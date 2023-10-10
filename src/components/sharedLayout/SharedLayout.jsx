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

// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';

// export const Layout = () => {
//   return (
//     <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
//       <AppBar />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//       <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// };
