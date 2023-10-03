import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomePage,
    CreatorsPage,
    CollaborationPage,
    CreatorDetailsPage,
    ContactUsPage,
    FaqPage,
} from "../Pages";
import JoinUs from "../Pages/JoinUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { UserAuthContextProvider, useUserAuth } from "../Pages/AuthContext";
import Dashboard from "../Pages/Dashboard";
import Page from "../Pages/Page";
import CreateDashboard from "../Pages/CreateDashboard";
import Logout from "../Pages/Logout";
import Whatsapp from "../Pages/Whatsapp";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/creators",
        element: <CreatorsPage />,
    },
    {
        path: "/:id",
        element: <CreatorDetailsPage />,
    },
    {
        path: "/collaboration",
        element: <CollaborationPage />,
    },
    {
        path: "/faq",
        element: <FaqPage />,
    },
    {
        path: "/createDashboard",
        element: <CreateDashboard />
    },
    {
        path: '/page',
        element: <Page />
    },
    {
        path: "/contactus",
        element: <ContactUsPage />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },

    {
        path: "/signup",
        element: <Register />,
    },
    {
        path: "/joinus",
        element: <JoinUs />
    },
    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/error",
        element: <Error />,
    },
]);

function Router() {
    return (
        <UserAuthContextProvider>
            <Routes />
        </UserAuthContextProvider>
    );
}

function Routes() {

    return (
        <RouterProvider router={router}>

            <>
                <HomePage />
                <CreatorsPage />
                <CreatorDetailsPage />
                <CollaborationPage />
                <FaqPage />
                <CreateDashboard />
                <Page />

                <ContactUsPage />

                <Logout />
                <Dashboard />



            </>

        </RouterProvider>
    );
}

export default Router;
