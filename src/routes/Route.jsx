import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword";
import AllGames from "../pages/AllGames";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import UpdateInfo from "../pages/UpdateInfo";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            children:[
                {
                    index: true,
                    Component: Home
                },
                {
                    path: "games",
                    Component: AllGames
                },
                {
                    path: "game/:id",
                    element: <GameDetails></GameDetails>,
                    // errorElement: <NotFound></NotFound>
                },
                {
                    path: "login",
                    Component: Login
                },
                {
                    path: "register",
                    Component: Register
                },
                {
                    path: "forget-password",
                    Component: ForgetPassword
                },
                {
                    path: "profile",
                    element: <PrivateRoute><Profile></Profile></PrivateRoute>
                },
                {
                    path: "update-info",
                    element: <PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>
                },
                {
                    path: "about",
                    Component: AboutUs
                },
                {
                    path: "contact",
                    Component: Contact
                },
                {
                    path: "*",
                    Component: ErrorPage
                }
            ]
        }
    ]
)

export default router;