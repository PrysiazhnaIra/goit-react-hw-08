import "./App.css";
import Header from "../src/components/Header/Header.jsx";
import Contacts from "../src/components/Contacts/Contacts.jsx";
import Layout from "./components/Contacts/Layout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <h1 className="title">Phonebook</h1>
      <Contacts />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
