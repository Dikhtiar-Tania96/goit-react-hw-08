import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { registrationFormSchema } from "../../schemas/registrationFormSchema.js";

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
      <Form autoComplete="off">
        <label>
          Username
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label >
          Email
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
          <ErrorMessage name="email" component="span"  />
        </label>
        <label >
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
          <ErrorMessage
            name="password"
            component="span"
          />
        </label>
        <button type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}