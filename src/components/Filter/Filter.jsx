import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';

import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name
        <input
          id="filter"
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={filter}
        />
      </label>
    </div>
  );
};
