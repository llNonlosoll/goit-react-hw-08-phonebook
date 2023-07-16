// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing persistStore, persistReducer, and redux-persist constants from redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// Importing the storage from redux-persist
import storage from 'redux-persist/lib/storage';
// Importing the authReducer
import { authReducer } from './auth/authSlice';
// Importing the contactsReducer
import { contactsReducer } from './contacts/contactsSlice';
// Importing the filterReducer
import { filterReducer } from './filter/filterSlice';

// Configuration object for persisting the 'auth' slice of the Redux store
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Creating the Redux store using configureStore function
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware: Customizing the default middleware with additional options
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: Enabling Redux DevTools extension in development mode
  devTools: process.env.NODE_ENV === 'development',
});

// Creating the persistor object for persisting the Redux store
export const persistor = persistStore(store);
