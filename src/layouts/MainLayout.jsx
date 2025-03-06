import { Outlet, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import TopNavbar from '../components/TopNavbar';
import ScrollToTop from '../components/ScrollToTop';
import DynamicPageTitle from '../components/DynamicPageTitle';

const routes = [
    {
        path: '/AboutUsPage',
        name: "About Us",
    },
    {
        path: '/ShopPage',
        name: "Shop",
    },
    {
        path: '/',
        name: "AVASARA",
    },
    {
        path: '/NewsletterPage',
        name: "Newsletter",
    },
    {
        path: '/FaqPage',
        name: "FaqPage",
    },
];

const MainLayout = () => {
    return (
        <div className="m-0 p-0">
            <DynamicPageTitle />
            <ScrollToTop />
            <TopNavbar routes={routes} />
            <Outlet />
            <div className="d-none d-lg-block footer-container">
                <Row
                    className="py-4 px-3 px-md-5"
                    style={{
                        width: "100%",
                        backgroundColor: '#66754C',
                        color: '#ffffff',
                        fontFamily: 'Poppins',
                        margin: 0,
                    }}>
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h3 style={{ fontFamily: "Abril Fatface, cursive", fontSize: "2.5rem" }}>AVASARA</h3>
                        <div className="d-flex gap-3 mt-3">
                            <a className="text-white" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
                            </a>
                            <a className="text-white" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-tiktok" style={{ fontSize: "1.5rem" }}></i>
                            </a>
                            <a className="text-white" href="https://X.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter-x" style={{ fontSize: "1.5rem" }}></i>
                            </a>
                            <a className="text-white" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
                            </a>
                            <a className="text-white" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
                            </a>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-4 mb-md-0">
                        <h4 className="fw-bold" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}>INFORMATION</h4>

                        <div className="mt-3">
                            <Link to="/" className="mb-2" style={{ textDecoration: 'none', color: 'inherit', fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>
                                <p>About Us</p>
                            </Link>
                            <Link to="/NewsletterPage" className="mb-2" style={{ textDecoration: 'none', color: 'inherit', fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>
                                <p>Newsletter</p>
                            </Link>
                            <Link to="/ShopPage" className="mb-2" style={{ textDecoration: 'none', color: 'inherit', fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>
                                <p>Marketplace</p>
                            </Link>
                            <Link to="/FaqPage" className="mb-2" style={{ textDecoration: 'none', color: 'inherit', fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>
                                <p>FAQs</p>
                            </Link>
                        </div>

                    </Col>
                    <Col xs={6} md={4} lg={5} className="mb-4 mb-md-0">
                        <h4 className="fw-bold" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.1rem" }}>CONTACT US</h4>
                        <div className="mt-3">
                            <p className="mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>avasara@gmail.com</p>
                            <p className="mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>+62 812 3456 789</p>
                            <p className="mb-2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", fontWeight: '300' }}>
                                Jl. Babarsari No. 5-6, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="py-3 border-top" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div
                        className="text-center"
                        style={{ color: '#0D330E', fontSize: "0.875rem", fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase' }}
                    >
                        © 2025 AVASARA. All RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;