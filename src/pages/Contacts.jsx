import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import Phonebook from '../components/Phonebook/Phonebook';
import Forms from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import { ContactsTitle } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Forms />
      {error && <p>Something goes wrong, try again</p>}
      <ContactsTitle>Contacts</ContactsTitle>
      {isLoading && !error && <p>Request in progress...</p>}
      <Filter />
      <Phonebook />
    </>
  );
};

export default Contacts;
