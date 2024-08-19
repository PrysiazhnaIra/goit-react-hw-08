import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>

          <p>
            You don't have an account? <Link to="/register">Sign up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
