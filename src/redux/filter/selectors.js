// Importing the createSelector function from Redux Toolkit
import { createSelector } from '@reduxjs/toolkit';

// Importing the selectAllContacts selector, that is used to select all contacts from the state
import { selectAllContacts } from 'redux/contacts/selectors';

// Selects the filter value from the filter slice of the Redux state
export const selectFilter = state => state.filter;

// Selector with memoization to filter the contacts list based on the filter value
export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
  }
);
