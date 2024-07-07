import { useDispatch, useSelector } from "react-redux";
// import { selectNameFilter } from "../../redux/filters/selectors";
// import { changeFilter } from "../../redux/filters/slice";
import { useId } from "react";

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));
  return (
    <div>
      <label htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        id={searchId}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
export default SearchBox;