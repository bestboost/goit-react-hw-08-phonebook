import { useAuth } from '../../hooks/useAuth';
import { ContactsLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && <ContactsLink to="/Contacts">Contacts</ContactsLink>}
    </nav>
  );
};
