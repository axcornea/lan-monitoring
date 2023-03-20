import {createBrowserRouter, redirect} from "react-router-dom";
import React from "react";
import DevicesPage from "./pages/DevicesPage";

export default createBrowserRouter([
    {
        path: "/",
        element: <DevicesPage />,
    },
    {
        path: "*",
        loader: () => redirect("/"),
    },
]);
