import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const DetailNewsPage = () => {
    return (
        <Container fluid className="news-detail-page p-0 w-100">
            <div className="d-flex justify-content-center align-items-center mt-5"
                style={{
                    height: "500px",
                    backgroundImage: `url("src/assets/images/News/WeirdGenius.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="overlay d-flex flex-column justify-content-center">
                    <div className="news-header-content m-4">
                        <h1>Reza Arap Oktovian Becomes The Ambassador Of Avasara</h1>
                        <p className="news-date">29 February 2025</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <Container className="news-content py-5">
                <Row className='row g-4 justify-content-center'>
                    {/* Article Section */}
                    <Col lg={9} className="news-article">
                        <p>
                            Avasara is proud to announce its latest collaboration with a figure known as an icon of creativity and style, Reza Arap Oktovian. 
                            Recognized as a content creator, musician, and entrepreneur, Reza Arap has a significant influence in the digital and fashion world. 
                            His presence as a brand ambassador is expected to bring Avasara closer to the dynamic and inspiring younger generation.
                        </p>

                        <h5>Why Reza Arap?</h5>
                        <p>
                            Reza Arap is not just a public figure; he symbolizes courage in self-expression and unique style. His bold and 
                            authentic character perfectly aligns with Avasara's values, which encourage individuals to confidently express 
                            themselves through fashion.
                        </p>
                        <blockquote>
                            “Avasara shares the same spirit as I do in terms of self-expression and being true to oneself. This collaboration is 
                            not just about fashion; it’s about building identity,” said Reza Arap in an exclusive interview.
                        </blockquote>

                        <h5>Exclusive Collaboration: Reza Arap’s Signature Collection</h5>
                        <p>
                            As part of this collaboration, Avasara and Reza Arap will launch an exclusive collection titled “REBEL SPIRIT”. 
                            This collection is inspired by edgy and bold streetwear, reflecting Reza Arap's unique out-of-the-box personality.
                        </p>

                        <ul>
                            <li>Oversized T-shirts with bold graphics and statement quotes.</li>
                            <li>Hoodies and Sweatshirts with grunge vibes and monochromatic tones.</li>
                            <li>Accessories like caps and tote bags that symbolize freedom of expression.</li>
                        </ul>
                        <p>
                            This collection will be exclusively available on Avasara's website, ready to be the go-to choice for those who dare to stand out.
                        </p>

                        <h5>Launch and Special Event</h5>
                        <p>
                            To celebrate this collaboration, Avasara will host an exclusive launch event that can be attended both online and offline. 
                            The event will feature a meet and greet with Reza Arap, as well as an opportunity for fans to get exclusive products signed by him.
                        </p>
                        <p>

                            This collaboration is not just about fashion; it’s about voicing courage and freedom of expression. 
                            As Avasara always believes, fashion is a medium to express identity and individuality.
                            Together with Reza Arap, Avasara invites everyone to dare to be different and proudly be themselves.
                        </p>
                    </Col>

                    <Col lg={3} className="news-sidebar d-flex flex-column gap-4">
                        <div className="search-box d-none d-md-block">
                            <h4>SEARCH ARTICLES</h4>
                            <Form className="d-flex">
                                <Form.Control type="text" placeholder="Keyword..." className='xs-text' style={{borderRadius:"0"}} />
                                <Button style={{
                                    border: "none",
                                    borderRadius:"2px", 
                                    backgroundColor: "#0D330E",
                                }}>
                                    <i 
                                        className="bi bi-search" 
                                        style={{ 
                                            fontSize: "1.3rem",
                                        }}
                                    ></i>
                                </Button>
                            </Form>
                        </div>

                        <div className="latest-articles d-flex flex-column">
                            <h4>LATEST ARTICLES</h4>
                            <div className="latest-article-card d-flex flex-column gap-2">
                                <img 
                                    src="src/assets/images/News/News1.png" 
                                    alt="Latest Article" 
                                    className="latest-article-image w-100"
                                    style={{
                                        aspectRatio:"2/1",
                                        objectFit: "cover",
                                    }}
                                />  
                                <div className="d-flex flex-column gap-1 mb-4">
                                    <p className="latest-article-title">Avasara Clothing Line in Collaboration With Ghibli</p>
                                    <p className="latest-article-date xs-text">27 February 2025</p>
                                </div>
                            </div>
                            <div className="latest-article-card">
                                <img 
                                    src="src/assets/images/News/News3.jpg" 
                                    alt="Latest Article" 
                                    className="latest-article-image w-100"
                                    style={{
                                        aspectRatio:"2/1",
                                        objectFit: "cover",
                                    }}
                                />

                                <div>
                                    <p className="latest-article-title">Avasara Partners with Influencers for a New Streetwear Line</p>
                                    <p className="latest-article-date xs-text">22 February 2025</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default DetailNewsPage;