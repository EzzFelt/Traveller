// src/App.tsx
import { RouterProvider } from 'react-router-dom';
import router from './Routes.tsx';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
