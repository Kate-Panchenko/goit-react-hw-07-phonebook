import ContactItem from 'components/ContactItem/ContactItem';
import { List, Contact, Message } from './ContactList.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getLoading, getError } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operations';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <Message>Loading contacts...</Message>}
      {error && <Message>There are no contacts. Please, try again.</Message>}
      <List>
        {filteredContacts &&
          filteredContacts.map(({ name, phone, id }) => {
            return (
              <Contact key={id}>
                <ContactItem name={name} number={phone} id={id} />
              </Contact>
            );
          })}
      </List>
    </>
  );
}

export default ContactList;
