import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { registrationFormSchema } from "../../schemas/registrationFormSchema.js";
import css from './RegistrationForm.module.css'

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={registrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.regForm}>
        <label className={css.label}>
          Username
          <Field
          className={css.input}
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <ErrorMessage name="name" component="span" className={css.error}/>
        </label>
        <label className={css.label} >
          Email
          <Field
          className={css.input}
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
          <ErrorMessage name="email" component="span"  className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field
          className={css.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
          <ErrorMessage
          className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button  className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}