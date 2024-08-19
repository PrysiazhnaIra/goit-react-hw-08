import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import Register from "./pages/RegistrationPage/RegistrationPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMeThunk } from "./redux/auth/operations.js";
import { PrivateRoute } from "./Routes/PrivateRoute.jsx";
import { PublicRoute } from "./Routes/PublicRoute.jsx";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <h1 className="title">Phonebook</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
