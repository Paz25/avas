import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import FaqPage from "../pages/FaqPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewsletterPage from "../pages/NewsletterPage";
import ProfilePage from "../pages/ProfilePage";
import DetailNewsPage from "../pages/DetailNewsPage";
import AboutUsPage from "../pages/AboutUsPage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },

            {
                path: "/ShopPage",
                element: <ShopPage />,
            },

            {
                path: "/FaqPage",
                element: <FaqPage />,
            },
            {
                path: "/ProfilePage",
                element: <ProfilePage />,
            },

            {
                path: "/LoginPage",
                element: <LoginPage />,
            },

            {
                path: "/RegisterPage",
                element: <RegisterPage />,
            },
            {
                path: "/NewsletterPage",
                element: <NewsletterPage />,
            },
            {
                path: "/DetailNewsPage",
                element: <DetailNewsPage />,
            },
            {
                path: "/AboutUsPage",
                element: <AboutUsPage />,
            }
        ],
    },
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
]);

const AppRouter = () => {
    return (
        <>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;