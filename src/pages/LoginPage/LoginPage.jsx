import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
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
          <button type="submit" className={css.btn}>
            Login
          </button>

          <p>
            You don't have an account?{" "}
            <Link to="/register" className="link">
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
