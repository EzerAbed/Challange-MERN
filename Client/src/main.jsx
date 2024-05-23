import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <div>Home Page here</div>
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path : "/signUp",
    element : <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
