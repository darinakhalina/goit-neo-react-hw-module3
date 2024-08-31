import { FaUser, FaPhone } from 'react-icons/fa';
import classes from './Contact.module.css';

function Contact({ contact, onDelete }) {
  return (
    <div className={classes['contact-card']}>
      <div className={classes['contact-card-info']}>
        <div className={classes['contact-card-info-item']}>
          <FaUser />
          <span className={classes['contact-card-name']}>{contact.name}</span>
        </div>
        <div className={classes['contact-card-info-item']}>
          <FaPhone />
          <span className={classes['contact-card-number']}>{contact.number}</span>
        </div>
      </div>
      <button
        onClick={() => onDelete(contact)}
        className={classes['contact-card-delete-btn']}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
