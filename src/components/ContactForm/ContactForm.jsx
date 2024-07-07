import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations.js";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import {contactFormSchema} from '../../schemas/contactFormSchema.js'



export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Name Surname"
          />
        </label>
        <ErrorMessage name="name" component="span" />
        <label>
          Number
          <Field
            type="tel"
            name="number"
            placeholder="000-00-00"
          />
        </label>
        <ErrorMessage name="number" component="span" />
        <button type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}