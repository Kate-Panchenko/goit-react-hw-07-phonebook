import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form, Label, Field, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(7, 'Too short')
    .max(20, 'Too long')
    .required('Required')
    .trim(),
});

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
    }
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" id={nanoid()} />
          <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
        </Label>
        <Label>
          Number
          <Field type="tel" name="number" id={nanoid()} />
          <ErrorMessage name="number" render={msg => <div>{msg}</div>} />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
