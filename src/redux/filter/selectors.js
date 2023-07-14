// import createSelector function for memoization
import { createSelector } from '@reduxjs/toolkit';

import { selectAllContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter;

// selector with memoization to filter the contacts list
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
