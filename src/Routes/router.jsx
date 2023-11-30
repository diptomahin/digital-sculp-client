import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllEmployee from '../Pages/AllEmployee/AllEmployee';
import Dashboard from "../Layouts/Main/Dashboard";
import DashboardHome from "../Pages/DashboardPages/DashboardHome";
import WorkSheet from "../Pages/WorkSheet/WorkSheet";
import PrivetRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Progress from "../Pages/Progress/Progress";
import HrRoutes from './HrRoutes';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EmployeelList from './../Pages/EmployeeList/EmployeelList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/all-employee-list",
        element: <AllEmployee></AllEmployee>,
      },

    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <PrivetRoute><DashboardHome></DashboardHome></PrivetRoute>
      },
      {
       path: "/dashboard/all-employee-list",
       element: <AdminRoute><AllEmployee></AllEmployee></AdminRoute>,
      },
      {
       path: "/dashboard/progress",
       element:<HrRoutes><Progress></Progress></HrRoutes>,
      },
      {
        path: "/dashboard/work-sheet",
        element: <WorkSheet></WorkSheet>,
      },
      {
        path: "/dashboard/employee-list",
        element: <EmployeelList></EmployeelList>,
      },


    ]
  }
]);

export default router;