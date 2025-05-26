// src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { MyTravels } from './pages/MyTravels';
import { Promotions } from './pages/Promotions';
import { Support } from './pages/Support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'my-travels', element: <MyTravels /> },
      { path: 'promotions', element: <Promotions /> },
      { path: 'support', element: <Support /> },
    ],
  }
]);

export default router;
