// Redux Toolkit's createSlice function
import { createSlice } from '@reduxjs/toolkit';
// Async operation for logging out
import { logOut } from 'redux/auth/operations';
// Async operations for contacts
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

// Initial Contacts State
const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

// Reducer function for handling pending request
const handlePending = state => {
  state.isLoading = true;
};

// Reducer function for handling successful contacts request
const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

// Reducer function for handling failed request
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// Reducer function for handling successful add contact request
const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

// Reducer function for handling successful delete contact request
const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

// Reducer function for handling successful log out
const handleLogoutFulfilled = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

// Reducer function for handling successful edit contact request
const handleEditContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

// Create the contactsSlice using createSlice function from Redux Toolkit
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending) // Handle contacts fetch pending action
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled) // Handle successful contacts fetch action
      .addCase(fetchContacts.rejected, handleRejected) // Handle failed contacts fetch action
      .addCase(addContact.pending, handlePending) // Handle add contact pending action
      .addCase(addContact.fulfilled, handleAddContact) // Handle successful add contact action
      .addCase(addContact.rejected, handleRejected) // Handle failed add contact action
      .addCase(deleteContact.pending, handlePending) // Handle delete contact pending action
      .addCase(deleteContact.fulfilled, handleDeleteContact) // Handle successful delete contact action
      .addCase(deleteContact.rejected, handleRejected) // Handle failed delete contact action
      .addCase(logOut.fulfilled, handleLogoutFulfilled) // Handle successful logout action
      .addCase(editContact.pending, handlePending) // Handle edit contact pending action
      .addCase(editContact.fulfilled, handleEditContactFulfilled) // Handle successful edit contact action
      .addCase(editContact.rejected, handleRejected), // Handle failed edit contact action
});

export const contactsReducer = contactsSlice.reducer;
