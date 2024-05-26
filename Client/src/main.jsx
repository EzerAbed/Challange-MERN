import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextManager from './ContextManager.jsx'
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import ProductsDetails from './Pages/ProductsDetails.jsx'
import Editprofile from './Pages/Editprofile.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ContextManager>
      <BrowserRouter >
          <App />
        </BrowserRouter>
    </ContextManager>
    
  </React.StrictMode>,
)
