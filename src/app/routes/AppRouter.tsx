import {createBrowserRouter} from "react-router-dom";
import Layout from "../../pages/Layout.tsx";
import {routesConfig} from "./routesConfig.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: routesConfig
  }
])