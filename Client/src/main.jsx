import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextManager from './ContextManager.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ProductsDetails from './pages/ProductsDetails.jsx'
import Editprofile from './pages/Editprofile.jsx'

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
  {
    path : "/products/details/:id",
    element : < ProductsDetails />
  },
  {
    path : "/editAccount/:id",
    element : < Editprofile />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextManager>
    <RouterProvider router={router} />
    <App />
    </ContextManager>
  </React.StrictMode>,
)
