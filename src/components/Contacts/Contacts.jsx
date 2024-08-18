import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { SearchBox } from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps.js";
import { selectError, selectIsLoading } from "../../redux/selectors.js";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
