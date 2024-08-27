import './App.css';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { General } from './components/layout/General.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Page404 } from './pages/Page404/Page404.jsx';
import { Test } from './pages/Test.jsx';


function App() {
  const router = createBrowserRouter([
    {
      element: <General />,
      errorElement: <Page404 />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/404',
          element: <Page404 />,
        }          
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
