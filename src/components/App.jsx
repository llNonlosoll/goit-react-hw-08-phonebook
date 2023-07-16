// React's lazy and useEffect hooks
import { lazy, useEffect } from 'react';
// Redux's useDispatch hook
import { useDispatch } from 'react-redux';
// React Router's Route and Routes components
import { Route, Routes } from 'react-router-dom';
// Layout component
import { Layout } from './Layout';
// PrivateRoute component for authenticated routes
import { PrivateRoute } from './PrivateRoute';
// RestrictedRoute component for restricted routes
import { RestrictedRoute } from './RestrictedRoute';
// Operation for refreshing user data
import { refreshUser } from 'redux/auth/operations';
// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';
// Styled component for App component
import { RefreshingTextStyled } from './App.styled';

// Lazy-loaded Home page component
const HomePage = lazy(() => import('../pages/Home'));
// Lazy-loaded Register page component
const RegisterPage = lazy(() => import('../pages/Register'));
// Lazy-loaded Login page component
const LoginPage = lazy(() => import('../pages/Login'));
// Lazy-loaded Contacts page component
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // Redux's useDispatch hook
  const dispatch = useDispatch();

  // Get the refreshing status using useAuth() hook
  const { isRefreshing } = useAuth();

  // Dispatch the refreshUser operation on component mount
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <RefreshingTextStyled>Refreshing user ...</RefreshingTextStyled>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
