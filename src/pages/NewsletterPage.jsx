import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import { Container, Carousel } from "react-bootstrap";
import CustomPagination from "../components/CustomPagination.";

const newsData = [
    {
        title: "ONE PIECE INDONESIA X AVASARA Collaboration is Coming Soon",
        date: "27 Februari 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "src/assets/images/News/News1.png",
    },
    {
        title: "Avasara Launches Clothing Line in Collaboration with Studio Ghibli",
        date: "19 February 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "src/assets/images/News/News2.jpg",
    },
    {
        title: "New Collection Drop: Avasara X Naruto Shippuden",
        date: "5 March 2025",
        description:
            "A unique blend of traditional Japanese aesthetics with Avasara’s signature style. Limited stock available.",
        image: "src/assets/images/News/News3.jpg",
    },
    {
        title: "Avasara Partners with Attack on Titan for Special Edition Apparel",
        date: "10 April 2025",
        description:
            "A limited edition series featuring iconic moments from Attack on Titan in Avasara's latest apparel line.",
        image: "src/assets/images/News/News4.jpg",
    },
    {
        title: "ONE PIECE INDONESIA X AVASARA Collaboration is Coming Soon",
        date: "27 Februari 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "src/assets/images/News/News1.png",
    },
    {
        title: "Avasara Launches Clothing Line in Collaboration with Studio Ghibli",
        date: "19 February 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "src/assets/images/News/News2.jpg",
    },
    {
        title: "New Collection Drop: Avasara X Naruto Shippuden",
        date: "5 March 2025",
        description:
            "A unique blend of traditional Japanese aesthetics with Avasara’s signature style. Limited stock available.",
        image: "src/assets/images/News/News3.jpg",
    },
    {
        title: "Avasara Partners with Attack on Titan for Special Edition Apparel",
        date: "10 April 2025",
        description:
            "A limited edition series featuring iconic moments from Attack on Titan in Avasara's latest apparel line.",
        image: "src/assets/images/News/News4.jpg",
    },
    {
        title: "ONE PIECE INDONESIA X AVASARA Collaboration is Coming Soon",
        date: "27 Februari 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "src/assets/images/News/News1.png",
    },
    {
        title: "Avasara Launches Clothing Line in Collaboration with Studio Ghibli",
        date: "19 February 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "src/assets/images/News/News2.jpg",
    },
    {
        title: "New Collection Drop: Avasara X Naruto Shippuden",
        date: "5 March 2025",
        description:
            "A unique blend of traditional Japanese aesthetics with Avasara’s signature style. Limited stock available.",
        image: "src/assets/images/News/News3.jpg",
    },
    {
        title: "Avasara Partners with Attack on Titan for Special Edition Apparel",
        date: "10 April 2025",
        description:
            "A limited edition series featuring iconic moments from Attack on Titan in Avasara's latest apparel line.",
        image: "src/assets/images/News/News4.jpg",
    },
    
];

const itemsPerPageFirstLayout = 4
const itemsPerPageSecondLayout = 6

const NewsletterPage = () => {
    const [currentPageFirstLayout] = useState(1);
    const [currentPageSecondLayout, setCurrentPageSecondLayout] = useState(1);

    const totalPagesSecondLayout = Math.ceil(newsData.length / itemsPerPageSecondLayout);

    const startIndexFirstLayout = (currentPageFirstLayout - 1) * itemsPerPageFirstLayout;
    const currentItemsFirstLayout = newsData.slice(startIndexFirstLayout, startIndexFirstLayout + itemsPerPageFirstLayout);

    const startIndexSecondLayout = (currentPageSecondLayout - 1) * itemsPerPageSecondLayout;
    const currentItemsSecondLayout = newsData.slice(startIndexSecondLayout, startIndexSecondLayout + itemsPerPageSecondLayout);
    
    return (
        <Container className="newsletter w-100 py-5 d-flex flex-column justify-content-center align-items-center gap-5"
            style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
            
            <Carousel controls={true} indicators={true} interval={5000} className="w-100 mt-5">
                {newsData.slice(0, 5).map((news, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center align-items-center"
                            style={{
                                height: "500px",
                                width: "100%",
                                backgroundImage: `url(${news.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>
                            <div className="overlay d-flex flex-column justify-content-end p-4 text-white text-shadow">
                                <h1>{news.title}</h1>
                                <p>{news.date}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>


            <div className="row g-2 justify-content-center">
                {currentItemsFirstLayout.map((news, index) => (
                    <div key={index} className="col-lg-6 col-md-12 px-2 pb-3 d-flex flex-column gap-2">
                        <img
                            src={news.image}
                            alt={news.title}
                            style={{ width: "100%", aspectRatio: "2/1", objectFit: "cover" }}
                        />
                        <h3 className="p-0 m-0">{news.title}</h3>
                        <p className="xs-text reset">{news.date}</p>
                        <p className="reset">{news.description}</p>
                        <a className="fw-bold" style={{ color: "black" }}>Read More...</a>
                    </div>
                ))}
            </div>

            <div className="d-flex flex-column gap-4 justify-content-center w-100">
                {currentItemsSecondLayout.map((news, index) => (
                    <div key={index} className="w-100 news-card-container d-flex gap-3 align-items-center justify-content-stretch p-3"
                        style={{boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.15)" }}>
                        <img src={news.image} alt={news.title} style={{ objectFit: "cover" }} />
                        <div>
                            <h4>{news.title}</h4>
                            <p className="xs-text">{news.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <CustomPagination 
                currentPage={currentPageSecondLayout} 
                totalPages={totalPagesSecondLayout} 
                onPageChange={setCurrentPageSecondLayout}
            />
        </Container>
    );
};

export default NewsletterPage;
