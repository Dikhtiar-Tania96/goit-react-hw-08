import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations.js";
import { loginFormSchema } from "../../schemas/loginFormSchema.js";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      <Form  autoComplete="off">
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
        <button  type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}