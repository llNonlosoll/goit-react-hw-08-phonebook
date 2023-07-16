// Importing the React library
import React from 'react';
// Importing the ReactDOM functionality for rendering React components
import ReactDOM from 'react-dom/client';
// Importing the Provider component to connect Redux to the React app
import { Provider } from 'react-redux';
// Importing the store and persistor objects from the store
import { store, persistor } from './redux/store';
// Importing the PersistGate component for persisting Redux state in local storage
import { PersistGate } from 'redux-persist/integration/react';
// Importing the BrowserRouter component for routing in React
import { BrowserRouter } from 'react-router-dom';
// Importing global styles
import './index.css';
// Importing the App component
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Rendering the app using ReactDOM.createRoot
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
