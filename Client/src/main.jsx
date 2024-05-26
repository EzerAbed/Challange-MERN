import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextManager from './ContextManager.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import ProductsDetails from './Pages/ProductsDetails.jsx'
import Editprofile from './Pages/Editprofile.jsx'
import ProductList from './components/ProductList.jsx'
import Contactus from './components/Contactus.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <ProductList/>
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
  },
  {
    path : "/contact/message",
    element : <Contactus/>
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
