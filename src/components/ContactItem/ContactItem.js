import PropTypes from 'prop-types';
import { Contact, Button } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Contact>
        <span>{name}:</span>
        {number}
      </Contact>
      <Button id={id} type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
