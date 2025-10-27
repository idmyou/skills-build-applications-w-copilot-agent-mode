
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';



const Layout = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Octofit Tracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <h2>Welcome to Octofit Tracker!</h2> },
      { path: 'activities', element: <Activities /> },
      { path: 'leaderboard', element: <Leaderboard /> },
      { path: 'teams', element: <Teams /> },
      { path: 'users', element: <Users /> },
      { path: 'workouts', element: <Workouts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
