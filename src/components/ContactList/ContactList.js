import ContactItem from 'components/ContactItem/ContactItem';
import { List, Contact, Message } from './ContactList.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

function ContactList() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);

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
