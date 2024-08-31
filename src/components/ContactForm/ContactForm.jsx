import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in the format 111-11-11')
    .required('Number is required'),
});

function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css['contact-form']}>
        <label className={css['contact-form-label']} htmlFor={nameId}>
          Name
        </label>
        <Field className={css['contact-form-input']} type="text" name="name" id={nameId} />
        <ErrorMessage className={css['error-text']} name="name" component="div" />
        <label className={css['contact-form-label']} htmlFor={numberId}>
          Number
        </label>
        <Field className={css['contact-form-input']} type="tel" name="number" id={numberId} />
        <ErrorMessage className={css['error-text']} name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
