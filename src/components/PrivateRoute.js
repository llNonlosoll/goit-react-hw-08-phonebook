// React Router's Navigate component
import { Navigate } from 'react-router-dom';
// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';

// If the route is private and the user is logged in, render the component
// Otherwise render <Navigate> to redirectTo

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // Get authentication status and refreshing status using useAuth() hook
  const { isLoggedIn, isRefreshing } = useAuth();
  // Determine if redirection is needed
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
