import Login from './pages/login';
import 'rsuite/dist/rsuite.min.css'
import {createBrowserRouter} from "react-router-dom";

import './App.css';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <center>Page Not Found</center>//error page
  },{
    path: "/dashboard",
    element: <Dashboard/>,
    errorElement: <center>Page Not Found</center>//error page
  },
], {basename: "/amalitechc4k"})


export default router;
