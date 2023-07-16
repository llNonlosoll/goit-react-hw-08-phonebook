import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const handleContactsPending = state => {
  state.isLoading = true;
};

const handleContactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const handleLogoutFulfilled = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const handleEditContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handleContactsPending)
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(fetchContacts.rejected, handleContactsRejected)
      .addCase(addContact.pending, handleContactsPending)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(addContact.rejected, handleContactsRejected)
      .addCase(deleteContact.pending, handleContactsPending)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(deleteContact.rejected, handleContactsRejected)
      .addCase(logOut.fulfilled, handleLogoutFulfilled)
      .addCase(editContact.pending, handleContactsPending)
      .addCase(editContact.fulfilled, handleEditContactFulfilled)
      .addCase(editContact.rejected, handleContactsRejected),
});

export const contactsReducer = contactsSlice.reducer;
