import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AuthProvider from "./Providers/AuthProvider";
import Users from "./Components/Users";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
    
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('https://coffee-store-server-e1rj7c2nv-sadiaafrin67.vercel.app/coffee')
    },
    {
      path: "/addCoffee",
      element: <AddCoffee></AddCoffee>,
    },
    {
      path: "/updateCoffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({params}) => fetch(`https://coffee-store-server-e1rj7c2nv-sadiaafrin67.vercel.app/coffee/${params.id}`)
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/users',
      element: <Users></Users>,
      loader: () => fetch('https://coffee-store-server-e1rj7c2nv-sadiaafrin67.vercel.app/user')
    }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>
);
