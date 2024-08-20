import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css.searchBlock}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </div>
  );
};
