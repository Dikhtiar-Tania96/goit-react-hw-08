import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useId } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const uniqInputId = useId();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }



  return (
    <div className={css.formEl}>
      <label htmlFor={uniqInputId}>Find contacts by name : </label>
      <input
        type="text"
        id={uniqInputId}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;