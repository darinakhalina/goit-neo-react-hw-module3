import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li className={css['contact-list-item']} key={contact.id}>
          <Contact contact={contact} onDelete={onContactDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
