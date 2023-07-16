// Selects the loading state from the contacts slice of the Redux state
export const selectIsLoading = state => state.contacts.loading;

// Selects all contacts from the contacts slice of the Redux state
export const selectAllContacts = state => state.contacts.items;
