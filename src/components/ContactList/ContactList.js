import ContactItem from 'components/ContactItem/ContactItem';
import { List, Contact } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Contact key={id}>
            <ContactItem name={name} number={number} id={id} />
          </Contact>
        );
      })}
    </List>
  );
}

export default ContactList;
