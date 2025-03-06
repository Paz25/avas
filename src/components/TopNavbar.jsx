import { Navbar, Nav, Container, Collapse } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "../styles/Navbar.css";

const TopNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Track window size
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (itemName) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const hoverBgColor = "#66754C";
    const activeBgColor = "#66754C";

    const isMobile = windowWidth < 992;

    // Get current path
    const currentPath = location.pathname;
    const isActive = (path) => {
        if (path === "/") {
            return currentPath === "/";
        }
        return currentPath.startsWith(path);
    };

    const baseColor = "#0D330E";

    return (
        <Navbar
            fixed="top"
            expand="lg"
            expanded={expanded}
            onToggle={(value) => isMobile && setExpanded(value)}
            className="bg-white shadow p-0"
        >
            <Container fluid className="px-3">
                {/* Mobile view wrapper - only active on small screens */}
                {isMobile ? (
                    <div className="d-flex justify-content-between align-items-center w-100 py-2">
                        {/* Hamburger menu on left */}
                        <Navbar.Toggle
                            aria-controls="navbar-collapse"
                            className="border-0"
                        />

                        {/* Brand in center */}
                        <div
                            onClick={() => {
                                navigate("/");
                                setExpanded(false);
                            }}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            <Navbar.Brand
                                className="m-0 p-0 brand-logo"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                    color: baseColor,
                                    fontFamily: "'Abril Fatface', cursive",
                                }}
                            >
                                AVASARA
                            </Navbar.Brand>
                        </div>

                        {/* Icons on right */}
                        <div className="d-flex">
                            <button
                                onClick={() => navigate("/cart")}
                                className="btn border-0 p-1"
                                aria-label="Cart"
                                style={{
                                    backgroundColor: isActive("/cart") ? activeBgColor : "transparent",
                                }}
                            >
                                <i
                                    className="bi bi-cart"
                                    style={{
                                        fontSize: "1.3rem",
                                        color: isActive("/cart") ? "white" : baseColor, // White when active, otherwise base color
                                    }}
                                ></i>
                            </button>
                            <button
                                onClick={() => navigate("/ProfilePage")}
                                className="btn border-0 p-1"
                                aria-label="Profile"
                                style={{
                                    backgroundColor: isActive("/ProfilePage") ? activeBgColor : "transparent",
                                }}
                            >
                                <i
                                    className="bi bi-person"
                                    style={{
                                        fontSize: "1.3rem",
                                        color: isActive("/ProfilePage") ? "white" : baseColor, // White when active, otherwise base color
                                    }}
                                ></i>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Desktop Layout - explicitly shown only on desktop */
                    <div className="d-flex justify-content-between align-items-center w-100 gap-3">
                        {/* Left Side Navigation */}
                        <Nav className="d-flex justify-content-center flex-grow-1 flex-basis-0 gap-3">
                            <div
                                className={`nav-item px-4 py-3 ${hoveredItem === "about" ? "hovered" : ""} ${isActive("/about") ? "active" : ""}`}
                                onClick={() => {
                                    navigate("/AboutUsPage");
                                    setExpanded(false);
                                }}
                                onMouseEnter={() => handleMouseEnter("AboutUsPage")}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: isActive("/about")
                                        ? activeBgColor
                                        : hoveredItem === "about"
                                            ? hoverBgColor
                                            : "transparent",
                                    transition: "background-color 0.3s ease",
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                <Nav.Link
                                    className={isActive("/about") ? "text-white" : "text-dark"}
                                    style={{
                                        color: isActive("/about")
                                            ? "white"
                                            : hoveredItem === "about"
                                                ? "white"
                                                : baseColor, // Base color for text
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    About Us
                                </Nav.Link>
                            </div>
                            <div
                                className={`nav-item px-4 py-3 ${hoveredItem === "shop" ? "hovered" : ""} ${isActive("/shop") ? "active" : ""}`}
                                onClick={() => {
                                    navigate("/ShopPage");
                                    setExpanded(false);
                                }}
                                onMouseEnter={() => handleMouseEnter("shop")}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: isActive("/ShopPage")
                                        ? activeBgColor
                                        : hoveredItem === "shop"
                                            ? hoverBgColor
                                            : "transparent",
                                    transition: "background-color 0.3s ease",
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                <Nav.Link
                                    className={isActive("/ShopPage") ? "text-white" : "text-dark"}
                                    style={{
                                        color: isActive("/ShopPage")
                                            ? "white"
                                            : hoveredItem === "shop"
                                                ? "white"
                                                : baseColor, // Base color for text
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Shop
                                </Nav.Link>
                            </div>

                            {/* Brand/Logo - Center with hover effect */}
                            <div
                                className={`nav-item px-4 py-2 text-center flex-grow-0 ${hoveredItem === "home" ? "hovered" : ""} ${isActive("/") ? "active" : ""}`}
                                onClick={() => {
                                    navigate("/");
                                    setExpanded(false);
                                }}
                                onMouseEnter={() => handleMouseEnter("home")}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: isActive("/")
                                        ? activeBgColor
                                        : hoveredItem === "home"
                                            ? hoverBgColor
                                            : "transparent",
                                    transition: "background-color 0.3s ease",
                                    cursor: "pointer",
                                }}
                            >
                                <Navbar.Brand
                                    className="m-0 p-0 brand-logo"
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "1.5rem",
                                        color: isActive("/") || hoveredItem === "home" ? "white" : baseColor, // White when active or hovered, otherwise base color
                                        fontFamily: "'Abril Fatface', cursive",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    AVASARA
                                </Navbar.Brand>
                            </div>

                            {/* Right Side Navigation */}
                            <div
                                className={`nav-item px-4 py-3 ${hoveredItem === "NewsletterPage" ? "hovered" : ""} ${isActive("/NewsletterPage") ? "active" : ""}`}
                                onClick={() => {
                                    navigate("/NewsletterPage");
                                    setExpanded(false);
                                }}
                                onMouseEnter={() => handleMouseEnter("NewsletterPage")}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: isActive("/NewsletterPage")
                                        ? activeBgColor
                                        : hoveredItem === "NewsletterPage"
                                            ? hoverBgColor
                                            : "transparent",
                                    transition: "background-color 0.3s ease",
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                <Nav.Link
                                    className={isActive("/NewsletterPage") ? "text-white" : "text-dark"}
                                    style={{
                                        color: isActive("/NewsletterPage")
                                            ? "white"
                                            : hoveredItem === "NewsletterPage"
                                                ? "white"
                                                : baseColor,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Newsletter
                                </Nav.Link>
                            </div>
                            <div
                                className={`nav-item px-4 py-3 ${hoveredItem === "FaqPage" ? "hovered" : ""} ${isActive("/FaqPage") ? "active" : ""}`}
                                onClick={() => {
                                    navigate("/FaqPage");
                                    setExpanded(false);
                                }}
                                onMouseEnter={() => handleMouseEnter("FaqPage")}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundColor: isActive("/FaqPage")
                                        ? activeBgColor
                                        : hoveredItem === "FaqPage"
                                            ? hoverBgColor
                                            : "transparent",
                                    transition: "background-color 0.3s ease",
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                <Nav.Link
                                    className={isActive("/FaqPage") ? "text-white" : "text-dark"}
                                    style={{
                                        color: isActive("/FaqPage")
                                            ? "white"
                                            : hoveredItem === "FaqPage"
                                                ? "white"
                                                : baseColor, // Base color for text
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    FAQs
                                </Nav.Link>
                            </div>

                            {/* Icons - Position absolute for desktop */}
                            <div
                                className="me-5 position-absolute d-flex align-items-center h-100"
                                style={{ right: "15px", top: "0" }}
                            >
                                <Nav className="d-flex align-items-center h-100">
                                    <div
                                        className="icon-container"
                                        onMouseEnter={() => handleMouseEnter("cart")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Nav.Link
                                            onClick={() => {
                                                navigate("/cart");
                                                setExpanded(false);
                                            }}
                                            className="icon-link"
                                            style={{
                                                backgroundColor: isActive("/cart")
                                                    ? activeBgColor
                                                    : hoveredItem === "cart"
                                                        ? hoverBgColor
                                                        : "transparent",
                                            }}
                                        >
                                            <i
                                                className="bi bi-cart"
                                                style={{
                                                    fontSize: "1.3rem",
                                                    color: isActive("/cart")
                                                        ? "white"
                                                        : hoveredItem === "cart"
                                                            ? "white"
                                                            : baseColor, // Base color for icon
                                                }}
                                            ></i>
                                        </Nav.Link>
                                    </div>
                                    <div
                                        className="icon-container"
                                        onMouseEnter={() => handleMouseEnter("ProfilePage")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Nav.Link
                                            onClick={() => {
                                                navigate("/ProfilePage");
                                                setExpanded(false);
                                            }}
                                            className="icon-link"
                                            style={{
                                                backgroundColor: isActive("/ProfilePage")
                                                    ? activeBgColor
                                                    : hoveredItem === "ProfilePage"
                                                        ? hoverBgColor
                                                        : "transparent",
                                            }}
                                        >
                                            <i
                                                className="bi bi-person"
                                                style={{
                                                    fontSize: "1.3rem",
                                                    color: isActive("/ProfilePage")
                                                        ? "white"
                                                        : hoveredItem === "ProfilePage"
                                                            ? "white"
                                                            : baseColor, // Base color for icon
                                                }}
                                            ></i>
                                        </Nav.Link>
                                    </div>
                                </Nav>
                            </div>
                        </Nav>
                    </div>
                )}

                {/* Collapsible navigation content for mobile */}
                {isMobile && (
                    <Navbar.Collapse id="navbar-collapse">
                        <Nav className="flex-column w-100">
                            <Nav.Link
                                onClick={() => {
                                    navigate("/AboutUsPage");
                                    setExpanded(false);
                                }}
                                className={`py-3 border-top ${isActive("/AboutUsPage") ? "active-mobile" : ""}`}
                                style={{
                                    backgroundColor: isActive("/about") ? activeBgColor : "transparent",
                                    color: isActive("/about") ? "white" : baseColor, // Base color for text
                                }}
                            >
                                About Us
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/shop");
                                    setExpanded(false);
                                }}
                                className={`py-3 border-top ${isActive("/shop") ? "active-mobile" : ""}`}
                                style={{
                                    backgroundColor: isActive("/shop") ? activeBgColor : "transparent",
                                    color: isActive("/shop") ? "white" : baseColor, // Base color for text
                                }}
                            >
                                Shop
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/NewsletterPage");
                                    setExpanded(false);
                                }}
                                className={`py-3 border-top ${isActive("/NewsletterPage") ? "active-mobile" : ""}`}
                                style={{
                                    backgroundColor: isActive("/NewsletterPage") ? activeBgColor : "transparent",
                                    color: isActive("/NewsletterPage") ? "white" : baseColor, // Base color for text
                                }}
                            >
                                Newsletter
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/FaqPage");
                                    setExpanded(false);
                                }}
                                className={`py-3 border-top ${isActive("/FaqPage") ? "active-mobile" : ""}`}
                                style={{
                                    backgroundColor: isActive("/FaqPage") ? activeBgColor : "transparent",
                                    color: isActive("/FaqPage") ? "white" : baseColor, // Base color for text
                                }}
                            >
                                FAQs
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                )}
            </Container>
        </Navbar>
    );
};

export default TopNavbar;