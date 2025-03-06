import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InfiniteCarousel from "../components/InfiniteCarousel";

const AboutUsPage = () => {
    return (
        <Container fluid className="p-0 pt-2 w-100">
            <div className="d-flex justify-content-center align-items-center mt-5 position-relative"
                style={{
                    height: "80vh",
                    width: "100%",
                    overflow: "hidden"
                }}
            >
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="position-absolute w-100 h-100"
                    style={{
                        objectFit: "cover",
                        top: 0,
                        left: 0,
                        zIndex: "-1"
                    }}
                >
                    <source src="src\assets\video\About-Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="p-5 d-flex flex-column justify-content-center w-100 h-100"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.45)"
                    }}
                >
                    <div className="m-4">
                        <h1 className="text-uppercase text-center" style={{
                            fontSize: "100px",
                            fontFamily: "Abril Fatface, cursive",
                            fontWeight: "normal",
                            color: "white",
                        }}>
                            Everything <br />
                            deserves <br />
                            a second chance
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section*/}
            <section className="about-us-container d-flex flex-column align-items-stretch justify-content-center gap-5">
                <div className="container-fluid p-5">
                    <Row>
                        <Col className="reset content-box gap-3 d-flex flex-column justify-content-center align-items-stretch text-center">
                            <h1 className="title w-100">
                                The Fashion Industry is 
                                One of the Earth’s Biggest Polluters
                            </h1>
                            <p className="reset section-text w-100">
                                Every second, a truckload of clothes gets dumped in landfills. 
                                That’s <strong>92 million tonnes</strong> of waste every year—more than flights and shipping combined. 
                                <strong> By 2030, this number could hit <strong>134 million tonnes</strong>.</strong> 
                                We can’t keep up this throwaway culture.
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
                
            {/* Left aligned image gallery */}
            <section className="d-flex flex-column justify-content-center gap-5">
                <div className="container-fluid">
                    <Row className="align-items-center g-4">
                        <Col md={6} className="image-stack">
                            <img
                                src="src\assets\images\About Us\orang.jpg"
                                alt="Main Fashion"
                                className="img-fluid main-image"
                                style={{
                                    position: "relative",
                                    left: "-80px",
                                    width: "50%",
                                    aspectRatio: "400/488",
                                    boxShadow: "#0D330E -1rem 1rem",
                                    objectFit: "cover"
                                }}
                            />
                            <img
                                src="src\assets\images\About Us\orang2.jpg"
                                alt="Overlay Fashion"
                                className="img-fluid overlay-image first-overlay-image"
                            />
                        </Col>
                        <Col md={6} className="gallery-section">
                            <h2 className="title">
                                The trend is creating more waste than we can handle
                            </h2>
                            <p className="section-text">
                                Fast fashion keeps pushing more and more new stuff, making us buy, wear, and throw away faster than ever. 
                                Yet most outfits are worn only <strong>7 to 10</strong> times before being tossed. What if we slowed down? 
                                What if we gave overlooked pieces a new life instead of always buying new? That’s the change we’re making.
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Right aligned image gallery */}
            <section className="d-flex flex-column justify-content-center gap-5">
                <div className="container-fluid mt-4">
                    <Row className="align-items-center g-4">
                        <Col md={6} className="gallery-section">
                            <h2 className="title">
                                Thus, Our Journey Begins
                            </h2>
                            <p className="section-text">
                                Seeing how much perfectly good clothing was being tossed away, we knew there had to be a better way. 
                                So, we built a space where <strong>style meets sustainability</strong>—where pre-loved fashion gets a second chance, 
                                and shoppers can find unique pieces while helping the  planet.
                            </p>
                        </Col>
                        <Col md={6} className="image-stack">
                            <img
                                src="src\assets\images\About Us\photoshoot.jpg"
                                alt="Main Fashion"
                                className="img-fluid main-image"
                                style={{
                                    position: "relative",
                                    top: "-25px",
                                    left: "60px",
                                    width: "40%",
                                    aspectRatio: "1/1",
                                    boxShadow: "#0D330E 1rem -1rem",
                                    objectFit: "cover"
                                }}
                            />
                            <img
                                src="src\assets\images\About Us\ganteng.jpg"
                                alt="Overlay Fashion"
                                className="img-fluid overlay-image second-overlay-image"
                            />
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Number Section */}
            <section className="number-section mt-5 d-flex flex-column justify-content-center align-items-center"
                style={{
                    backgroundImage: `url("src/assets/images/About Us/banyak_orang.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="stats-container text-white text-center d-flex flex-column">
                    <h1 className="title text-white">The numbers don't lie</h1>

                    <div className="row row-cols-1 row-cols-md-2 g-2">
                        <div className="col">  
                            <div className="stat-box d-flex flex-column gap-2 justify-content-center align-items-center">   
                                <h3 className="reset" 
                                    style={{fontFamily: "Abril Fatface, serif", 
                                }}>2,302</h3>
                                <p>active users all around the world</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stat-box d-flex flex-column gap-2 justify-content-center align-items-center">
                                <h3 className="reset" 
                                    style={{fontFamily: "Abril Fatface, serif", 
                                }}>129,238</h3>
                                <p>preloved items rehomed & restyled</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stat-box d-flex flex-column gap-2 justify-content-center align-items-center">
                                <h3 className="reset" 
                                    style={{fontFamily: "Abril Fatface, serif", 
                                }}>16,894</h3>
                                <p>kg of clothing saved from landfills</p>
                            </div>
                        </div> <div className="col">
                            <div className="stat-box d-flex flex-column gap-2 justify-content-center align-items-center">
                                <h3 className="reset" 
                                    style={{fontFamily: "Abril Fatface, serif", 
                                }}>200,576</h3>
                                <p>kg of CO₂ emissions prevented</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Thrift Without Risk Section */ }
            <section className="about-us-container bg-white">
                    <h1 className="title text-center">
                        THRIFT WITHOUT RISK
                    </h1>

                    <div className="row g-4">
                        {/* Careful Selection */}
                        <div className="col-lg-4">
                            <div className="card h-100 border-0">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-4">
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#EBF1EB',
                                                borderRadius: '9999px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="bi bi-search" style={{ fontSize: '40px', color: '#0D330E' }}></i>
                                        </div>
                                    </div>
                                    <h2 className="card-title text-uppercase mb-3" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: '32px' }}>
                                        CAREFUL SELECTION
                                    </h2>
                                    <p>
                                        We don’t do just any thrift. We handpick only the best pieces. Great condition, great style, no compromises.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Expertly Verified */}
                        <div className="col-lg-4">
                            <div className="card h-100 border-0">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-4">
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#EBF1EB',
                                                borderRadius: '9999px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="bi bi-hand-thumbs-up" style={{ fontSize: '40px', color: '#0D330E' }}></i>
                                        </div>
                                    </div>
                                    <h2 className="card-title text-uppercase mb-3" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: '32px' }}>
                                        EXPERTLY VERIFIED
                                    </h2>
                                    <p>
                                        Every item goes through a strict inspection—we check for flaws, verify authenticity, and make sure it’s fresh, clean, and good as new.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Refined & Ready */}
                        <div className="col-lg-4">
                            <div className="card h-100 border-0">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-4">
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#EBF1EB',
                                                borderRadius: '9999px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="bi bi-bag-check" style={{ fontSize: '40px', color: '#0D330E' }}></i>
                                        </div>
                                    </div>
                                    <h2 className="card-title text-uppercase mb-3" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: '32px' }}>
                                        REFINED & READY
                                    </h2>
                                    <p>
                                        Every piece is professionally cleaned, restored, and packaged with care, so you receive nothing less than a refined, near-new experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            {/* Seller Section */}
            <section className="sell-section" style={{ backgroundColor: '#66754C' }}>
                <div className="container-fluid">
                    <div className="row align-items-stretch">
                        {/* Left Column - Image */}
                        <div className="col-md-6 reset p-0">
                            <img
                                src="src/assets/images/About Us/sell.jpg"
                                alt="Sell With Us"
                                className="img-fluid w-100 h-100 object-fit-cover"
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="col-md-6 content-section d-flex gap-3 flex-column justify-content-center p-5">
                            <h1 className="title reset text-white">
                                Got preloved items to spare?
                            </h1>
                            <p className="text-white">
                                Turn your preloved pieces into cash, sell them with us now.
                            </p>
                            {/* Shop Now Button */}
                            <button className='shop-now-button'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Join Us Section */}
            <section className="about-us-container bg-white">
                <div className="container">
                    <h1 className="title text-center">Join the Fashion Revolution</h1>
                    <p className="text-center">Subscribe for first access to our fashion updates, special promos, and styling tips</p>
                    <Row className="justify-content-center align-items-center mt-4 ">
                        <Col md={6} className="d-flex justify-content-center p-1">
                            <input 
                                type="text" 
                                className="input-field form-control w-100" 
                                placeholder="Your email"
                            />
                        </Col>
                        <Col md={2} className="d-flex justify-content-center mt-2 mt-md-0 p-1">
                            <button className="btn primary-button w-100">Sign Up</button>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Carousel */}
            <section className="py-5 bg-white">
                <InfiniteCarousel />  
            </section>
        </Container>
    );
};

export default AboutUsPage;
