// React Router's Navigate component
import { Navigate } from 'react-router-dom';
// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';

// If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
// Otherwise render the component

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // Get authentication status using useAuth() hook
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
