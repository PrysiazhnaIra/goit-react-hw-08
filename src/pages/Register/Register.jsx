import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import css from "./Register.module.css";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    // dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit" className={css.btn}>
            Register
          </button>
          <p>
            You have account? <Link to="/login">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
