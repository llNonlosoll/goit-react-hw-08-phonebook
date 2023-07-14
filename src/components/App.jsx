import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Route>
    </Routes>
  );
};
