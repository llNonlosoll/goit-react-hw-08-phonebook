// Redux's useSelector and useDispatch hooks for accessing state and dispatching actions
import { useSelector, useDispatch } from 'react-redux';
// Action creator for setting the filter
import { setFilter } from 'redux/filter/filterSlice';
// Selector for retrieving the filter value
import { selectFilter } from 'redux/filter/selectors';
// Styled components for the Filter component
import {
  FilterContainerStyled,
  FilterLabelStyled,
  FilterInputStyled,
} from './Filter.styled';

export const Filter = () => {
  // Retrieve the filter value from the Redux store
  const filter = useSelector(selectFilter);

  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // Dispatch the setFilter action to update the filter value
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
