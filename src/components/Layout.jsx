// React Router's Outlet component
import { Outlet } from 'react-router-dom';
// React's Suspense component for lazy loading
import { Suspense } from 'react';
// AppBar component
import { AppBar } from './AppBar/AppBar';
// Styled component for the Layout component
import { LayoutContainerStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainerStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainerStyled>
  );
};
