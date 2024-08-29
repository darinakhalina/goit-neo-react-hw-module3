import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageKey = 'contacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    const localStorageItem = localStorage.getItem(localStorageKey);
    return localStorageItem ? JSON.parse(localStorageItem) : defaultContacts;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: `id-${Date.now().toString(36)}`,
      name,
      number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
    </div>
  );
}

export default App;
