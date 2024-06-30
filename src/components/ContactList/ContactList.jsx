import css from './ContactList.module.css';
import Contact from "./Contact/Contact";
import { useSelector } from 'react-redux';
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;