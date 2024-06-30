import { useId } from "react";
import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";


const ContactForm = () => {
    const dispatch = useDispatch();

  const initialValues={
    name: " ",
    number: " ",
  }

  const uniqUserId = useId();
  const uniqNumberId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Min 2 sumbol 🙂').max(50, 'Max 50 sumbol 😯').required('required❗'),
    number: Yup.string().min(2,'Min 2 sumbol 🙂').max(50, 'Max 50 sumbol 😯').required('required❗'),
  });


  const onSubmit = (contact, { resetForm }) => {
    dispatch(addContact ({
        id: nanoid(),
        name: contact.name,
        number: contact.number,
  }))
  resetForm()
  }


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className={css.formEl}>
          <div className={css.formLbl}>
            <label htmlFor={uniqUserId} className={css.formName}>Name</label>
            <br />
            <Field id={uniqUserId} type="text" name="name" />
            <br/>
            <ErrorMessage name="name"/>
          </div>
          <div className={css.formLbl}>
            <label htmlFor={uniqNumberId} className={css.formName}> Number</label>
            <br />
            <Field id={uniqNumberId} type="text" name="number" />
            <br/>
            <ErrorMessage name="number"/>
          </div>
          <button type="submit" className={css.formBtn}>Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
export default ContactForm;