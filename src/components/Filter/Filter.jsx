import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';

import { selectFilter } from 'redux/filter/selectors';

import {
  FilterContainerStyled,
  FilterLabelStyled,
  FilterInputStyled,
} from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainerStyled>
      <FilterLabelStyled htmlFor="filter">
        Find contacts by name
        <FilterInputStyled
          id="filter"
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={filter}
        />
      </FilterLabelStyled>
    </FilterContainerStyled>
  );
};
