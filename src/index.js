import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import HomePage from './pages/HomePage';
import TradingReward from './pages/TradingReward';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "/trading-reward",
    element: <TradingReward/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
