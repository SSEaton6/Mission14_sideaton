import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// creates the ability to navigate between multiple pages. One for index (app), podcasts, and the movie list
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/podcasts',
    element: <Podcasts />,
  },
  {
    path: '/movies',
    element: <MovieList />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
