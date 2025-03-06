import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const DynamicPageTitle = () => {
    const location = useLocation();

    const switchPageTitle = (path) => {
        switch (path) {
            case "/":
                return "Home";
            case "/ShopPage":
                return "Shop";
            case "/FaqPage":
                return "FAQs";
            case "/ProfilePage":
                return "Profile";
            case "/LoginPage":
                return "Login";
            case "/RegisterPage":
                return "Register";
            case "/NewsletterPage":
                return "Newsletter";
            default:
                return "Default Page";
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>{switchPageTitle(location.pathname)} | Avasara</title>
                <meta name="description" content="test" />
            </Helmet>
        </HelmetProvider>
    );
};

export default DynamicPageTitle;