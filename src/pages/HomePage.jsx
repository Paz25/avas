import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import BackToTopButton from '../components/BackToTopButton';

import '../styles/HomePage.css';

{/* Dummy Data */ }
const newArrivalsData = [
    {
        image: "/src/assets/images/LakerJacket.jpg",
        category: "All",
        name: "Laker Jacket",
        price: "IDR 250.000",
    },
    {
        image: "/src/assets/images/RTRJacket.jpg",
        category: "All",
        name: "RTR jacket",
        price: "IDR 200.000",
    },
    {
        image: "/src/assets/images/JacketnBox.jpg",
        category: "Man",
        name: "Denim Jacket",
        price: "IDR 350.000",
    },
    {
        image: "/src/assets/images/WhiteJacket.jpg",
        category: "Women",
        name: "Reese Cooper Sherpa Fleece Jacket Cream ",
        price: "IDR 300.000",
    },
];




const Homepage = () => {
    const navigate = useNavigate();

    // Countdown timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    // Buat Nyimpan Sisa Waktu
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    // Buat Hitung Sisa Waktu
    function calculateTimeRemaining() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    // Update sisa waktu setiap detik
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Hapus interval ketika komponen di-unmount
        return () => clearInterval(interval);
    }, []);
    // Countdown timer


    // data review
    const reviews = [
        {
            image: "/src/assets/images/CewekKopi.jpg",
            message: "As an avid traveler, I take my bag on all my adventures. This bag is perfect for hauling my camera gear along with all my necessary adventure apparel. I love this brand! Highly recommend them!",
            author: "Kaisar Simatupang - Actor",
            rating: 5,
        },
        {
            image: "/src/assets/images/CewekVogue.jpg",
            message: "The quality of the products is amazing! I bought a jacket and it feels like new. Great service and fast delivery. Will definitely shop here again.",
            author: "Jane Doe - Fashion Blogger",
            rating: 4,
        },
        {
            image: "/src/assets/images/CewekKopi.jpg",
            message: "I love how sustainable this brand is. The clothes are stylish, affordable, and eco-friendly. A perfect combination!",
            author: "John Smith - Environmentalist",
            rating: 5,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="bi bi-star-fill" style={{ color: '#FBFF00', fontSize: '24px' }}></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star" style={{ color: '#FBFF00', fontSize: '24px' }}></i>);
            }
        }
        return stars;
    };


    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <section className="position-relative Hero-background" style={{
                width: '100%',
                background: 'linear-gradient(to right, white 50%, #66754C 50%)'
            }}>
                {/* Large AVASARA text - Centered for both mobile and desktop */}
                <h1
                    style={{
                        fontSize: "20vw",
                        fontFamily: "Abril Fatface, cursive",
                        fontWeight: "normal",
                        margin: 0,
                        padding: 0,
                        textAlign: "center",
                        width: "100%",
                        background: "linear-gradient(to right, #66754C 50%, white 50%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    AVASARA
                </h1>

                {/* Image shadow overlay */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -20, left: 40, right: 0,
                    }}
                >
                    <div className='d-flex' style={{ justifyContent: 'center' }}>
                        <img
                            src="/src/assets/images/GreenGirlShadow.png"
                            alt="Featured image"
                            className='Hero-img'
                        />
                    </div>
                </div>

                {/* Image overlay */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0, left: 0, right: 0,
                    }}
                >
                    <div className='d-flex' style={{ justifyContent: 'center' }}>
                        <img
                            src="/src/assets/images/GreenGirl.png"
                            alt="Featured image"
                            className='Hero-img'
                        />
                    </div>
                </div>

                {/* Text */}
                <div className='col-6 col-md-4 col-lg-4 ms-5 d-none d-md-block'
                    style={{
                        position: "absolute",
                        left: "19%",
                        top: "75%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "85%",
                        zIndex: '20'
                    }}
                >
                    <h4 style={{ fontSize: 'clamp(15px, 15vw, 20px)', fontFamily: "'Poppins', sans-serif", color: "#0D330E" }}>
                        Every piece tells a story—find your next favorite outfit while reducing fashion waste
                    </h4>
                    <button className='shop-now-button' style={{ fontFamily: "'Poppins', sans-serif", padding: "8px 30px", margin: 0 }} onClick={() => navigate("/ShopPage")}>Shop Now</button>
                </div>

                <div className="position-absolute d-none d-md-block" style={{ bottom: 10, left: 0, right: 15 }}>
                    <div className="d-flex" style={{ justifyContent: 'end', gap: '10px' }}>
                        <img src="/src/assets/images/LakerJacket.jpg" alt="" className="Hero-car rounded" />
                        <img src="/src/assets/images/LakerJacket.jpg" alt="" className="Hero-car rounded" />
                        <img src="/src/assets/images/LakerJacket.jpg" alt="" className="Hero-car rounded" />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="position-relative" style={{ height: 'auto' }}>
                <div className="container-fluid" style={{ backgroundColor: '#EBF1EB' }}>
                    <div className="row g-0">
                        {/* Left Image - Background on Mobile */}
                        <div className="col-md-4 position-relative">
                            <img
                                src="/src/assets/images/3Asians.png"
                                alt="Categories Image"
                                className="img-fluid object-fit-cover d-none d-md-block"
                                style={{
                                    position: "absolute",
                                    left: "60%",
                                    top: "55%",
                                    transform: "translate(-45%, -50%)",
                                    width: "45vw",
                                    maxWidth: "800px",
                                }}
                            />
                            {/* Mobile Background Image */}
                            <div
                                className="d-md-none position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    backgroundImage: 'url(https://placehold.co/681x851)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 1,
                                }}
                            ></div>
                        </div>

                        {/* Right Cards */}
                        <div className="col-md-7 position-relative" style={{ zIndex: 2 }}>
                            <div className="container-fluid ps-3 pe-3 mb-5 mt-5">
                                <div className="row g-4">
                                    {/* Women Card */}
                                    <div className="col-md-6 col-12 mb-4">
                                        <div className="card position-relative overflow-hidden category-card" style={{ height: '280px', border: 'none' }}>
                                            <img
                                                src="/src/assets/images/news/News3.jpg"
                                                alt="Women Category"
                                                className="card-img h-100 w-100 object-fit-cover"
                                            />
                                            <div
                                                className="card-img-overlay d-flex align-items-end justify-content-end"
                                                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)' }}
                                            >
                                                <h2
                                                    className="card-title text-center text-white category-title"
                                                    style={{ fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', fontSize: '40px' }}
                                                >
                                                    Women
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Men Card */}
                                    <div className="col-md-6 col-12 mb-4">
                                        <div className="card position-relative overflow-hidden category-card" style={{ height: '280px', border: 'none' }}>
                                            <img
                                                src="/src/assets/images//news/News2.jpg"
                                                alt="Men Category"
                                                className="card-img h-100 w-100 object-fit-cover"
                                            />
                                            <div
                                                className="card-img-overlay d-flex align-items-end justify-content-end"
                                                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)' }}
                                            >
                                                <h2
                                                    className="card-title text-center text-white category-title"
                                                    style={{ fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', fontSize: '40px' }}
                                                >
                                                    Men
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accessories Card */}
                                    <div className="col-12">
                                        <div className="card position-relative overflow-hidden accessories-card" style={{ height: '330px', border: 'none' }}>
                                            <img
                                                src="/src/assets/images/aksesoris.jpg"
                                                alt="Accessories Category"
                                                className="card-img h-100 w-100 object-fit-cover"
                                            />
                                            <div
                                                className="card-img-overlay d-flex align-items-end justify-content-end"
                                                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)' }}
                                            >
                                                <h2
                                                    className="card-title text-center text-white category-title"
                                                    style={{ fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', fontSize: '40px' }}
                                                >
                                                    Accessories
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="py-5 mt-5 bg-white">
                <div className="container">
                    <h1 className="text-uppercase text-center mb-2" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: 'clamp(32px, 6vw, 64px)' }}>NEW ARRIVALS</h1>
                    <p className="text-center mb-5" style={{ color: '#0D330E', fontSize: 'clamp(14px, 1.5vw, 18px)', fontFamily: 'Poppins' }}>Discover our latest preloved treasures that redefine fashion</p>

                    <div className="row g-4 justify-content-center">
                        {newArrivalsData.map((item, index) => (
                            <div key={index} className="col-6 col-lg-3 col-md-3">
                                <div className="card h-100" style={{
                                    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '0px',
                                    border: 'none',
                                    maxWidth: '100%',
                                    width: 'clamp(120px, 100%, 300px)',
                                    margin: '0 auto'
                                }}>
                                    <div
                                        style={{
                                            width: '100%',
                                            overflow: 'hidden',
                                            height: 'clamp(180px, 25vw, 250px)'
                                        }}>
                                        <img
                                            src={item.image}
                                            className="card-img-top img-fluid"
                                            alt={`New Arrival ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0px'
                                            }}
                                        />
                                    </div>
                                    <div className="card-body mx-2 py-2">
                                        <p className="card-text mb-1" style={{
                                            color: '#0D330E',
                                            fontSize: 'clamp(10px, 1vw, 12px)',
                                            fontFamily: 'Poppins'
                                        }}>{item.category}</p>
                                        <h5 className="card-title mb-1" style={{
                                            color: '#0D330E',
                                            fontSize: 'clamp(12px, 1.5vw, 18px)',
                                            fontFamily: 'Poppins',
                                            fontWeight: '600',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            width: '100%'
                                        }}>{item.name}</h5>
                                        <p className="card-text" style={{
                                            color: '#0D330E',
                                            fontSize: 'clamp(12px, 1.3vw, 16px)',
                                            fontFamily: 'Poppins'
                                        }}>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <button className="see-all-items-button"
                            onClick={() => navigate("/ShopPage")}
                            style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}
                        >See All Items</button>
                    </div>
                </div>
            </section>

            {/* Exclusive Deals Section */}
            <section style={{ backgroundColor: '#66754C' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Image */}
                        <div className="col-md-6 position-relative p-0">
                            <img
                                src="/src/assets/images/ramean3.jpg"
                                alt="Exclusive Deals Image"
                                className="img-fluid w-100 h-100 object-fit-cover"
                            />
                        </div>

                        {/* Right Column - Content */}
                        <div className="col-md-6 mt-4 p-5">
                            <h2 className="text-uppercase text-white mb-3" style={{
                                fontFamily: 'Poppins',
                                fontSize: 'clamp(16px, 2vw, 24px)',
                                fontWeight: '500'
                            }}>
                                EXCLUSIVE WOMEN'S DAY DEALS
                            </h2>
                            <h1 className="text-uppercase text-white mb-4" style={{
                                fontFamily: 'Abril Fatface',
                                fontSize: 'clamp(28px, 4vw, 44px)',
                                lineHeight: '1.2'
                            }}>
                                GET 40% OFF ON WOMEN'S ATTIRE
                            </h1>
                            <p className="text-uppercase text-white mb-4" style={{
                                fontFamily: 'Poppins',
                                fontSize: 'clamp(12px, 1.2vw, 16px)',
                                fontWeight: '500'
                            }}>
                                OFFER ENDS IN
                            </p>

                            {/* Timer Section */}
                            <div className="d-flex gap-3 mb-5">
                                {[
                                    { value: timeRemaining.days, label: 'DAYS' },
                                    { value: timeRemaining.hours, label: 'HOURS' },
                                    { value: timeRemaining.minutes, label: 'MINS' },
                                    { value: timeRemaining.seconds, label: 'SEC' },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="d-flex flex-column justify-content-center align-items-center"
                                        style={{
                                            width: 'clamp(60px, 6vw, 78px)',
                                            height: 'clamp(65px, 6.5vw, 83px)',
                                            backgroundColor: '#C6D0AE',
                                        }}
                                    >
                                        <p className="m-0" style={{
                                            color: '#0D330E',
                                            fontSize: 'clamp(20px, 2.5vw, 32px)',
                                            fontFamily: 'Abril Fatface'
                                        }}>
                                            {item.value}
                                        </p>
                                        <p className="m-0" style={{
                                            color: '#0D330E',
                                            fontSize: 'clamp(12px, 1.2vw, 16px)',
                                            fontFamily: 'Poppins'
                                        }}>
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Shop Now Button */}
                            <button className='shop-now-button mb-4' style={{
                                fontSize: 'clamp(14px, 1.4vw, 18px)'
                            }}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thrift Without Risk Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <h1 className="text-uppercase text-center mb-5" style={{
                        fontFamily: 'Abril Fatface',
                        color: '#0D330E',
                        fontSize: 'clamp(28px, 6vw, 52px)'
                    }}>
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
                                                width: 'clamp(60px, 8vw, 80px)',
                                                height: 'clamp(60px, 8vw, 80px)',
                                                backgroundColor: '#EBF1EB',
                                                borderRadius: '9999px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="bi bi-search" style={{
                                                fontSize: 'clamp(30px, 5vw, 40px)',
                                                color: '#0D330E'
                                            }}></i>
                                        </div>
                                    </div>
                                    <h2 className="card-title text-uppercase mb-3" style={{
                                        fontFamily: 'Abril Fatface',
                                        color: '#0D330E',
                                        fontSize: 'clamp(22px, 4vw, 32px)'
                                    }}>
                                        CAREFUL SELECTION
                                    </h2>
                                    <p className="card-text" style={{
                                        color: '#0D330E',
                                        fontSize: 'clamp(14px, 2vw, 18px)',
                                        fontFamily: 'Poppins',
                                        lineHeight: '1.6'
                                    }}>
                                        We don't do just any thrift. We handpick only the best pieces. Great condition, great style, no compromises.
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
                                                width: 'clamp(60px, 8vw, 80px)',
                                                height: 'clamp(60px, 8vw, 80px)',
                                                backgroundColor: '#EBF1EB',
                                                borderRadius: '9999px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="bi bi-hand-thumbs-up" style={{
                                                fontSize: 'clamp(30px, 5vw, 40px)',
                                                color: '#0D330E'
                                            }}></i>
                                        </div>
                                    </div>
                                    <h2 className="card-title text-uppercase mb-3" style={{
                                        fontFamily: 'Abril Fatface',
                                        color: '#0D330E',
                                        fontSize: 'clamp(22px, 4vw, 32px)'
                                    }}>
                                        EXPERTLY VERIFIED
                                    </h2>
                                    <p className="card-text" style={{
                                        color: '#0D330E',
                                        fontSize: 'clamp(14px, 2vw, 18px)',
                                        fontFamily: 'Poppins',
                                        lineHeight: '1.6'
                                    }}>
                                        Every item goes through a strict inspection—we check for flaws, verify authenticity, and make sure it's fresh, clean, and good as new.
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
                                                width: 'clamp(60px, 8vw, 80px)',
                                                height: 'clamp(60px, 8vw, 80px)',
                                                backgroundColor: '#EBF1EB',
                                                borderRadius: '9999px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="bi bi-bag-check" style={{
                                                fontSize: 'clamp(30px, 5vw, 40px)',
                                                color: '#0D330E'
                                            }}></i>
                                        </div>
                                    </div>
                                    <h2 className="card-title text-uppercase mb-3" style={{
                                        fontFamily: 'Abril Fatface',
                                        color: '#0D330E',
                                        fontSize: 'clamp(22px, 4vw, 32px)'
                                    }}>
                                        REFINED & READY
                                    </h2>
                                    <p className="card-text" style={{
                                        color: '#0D330E',
                                        fontSize: 'clamp(14px, 2vw, 18px)',
                                        fontFamily: 'Poppins',
                                        lineHeight: '1.6'
                                    }}>
                                        Every piece is professionally cleaned, restored, and packaged with care, so you receive nothing less than a refined, near-new experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curated Reviews Section */}
            <section style={{
                backgroundColor: '#66754C',
                padding: '50px 0',
                position: 'relative',
                backgroundImage: 'url("/src/assets/images/80Groups.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlend: 'multiply',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* Semi-transparent overlay to control image opacity */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#66754C',
                    opacity: 0.9,
                    zIndex: 1
                }}></div>

                {/* Content container with higher z-index to appear above the overlay */}
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        {/* Left Column - Message */}
                        <div className="col-md-6 d-flex flex-column justify-content-center py-5">
                            <h1 className="text-uppercase text-white mb-3" style={{
                                fontFamily: 'Abril Fatface',
                                fontSize: 'clamp(28px, 6vw, 52px)'
                            }}>
                                CURATED REVIEWS
                            </h1>
                            <p className="text-white mb-4" style={{
                                fontFamily: 'Poppins',
                                fontSize: 'clamp(18px, 3vw, 24px)',
                                fontWeight: '600',
                                lineHeight: '1.3'
                            }}>
                                Over 10,000 products sold
                            </p>
                            <div className="d-flex gap-2 mb-3">
                                {renderStars(reviews[activeIndex].rating)}
                            </div>
                            <p className="text-white mb-4" style={{
                                fontFamily: 'Poppins',
                                fontSize: 'clamp(14px, 2vw, 18px)',
                                lineHeight: '1.6'
                            }}>
                                {reviews[activeIndex].message}
                            </p>
                            <p className="text-white" style={{
                                fontFamily: 'Abril Fatface',
                                fontSize: 'clamp(16px, 2.5vw, 20px)',
                                textTransform: 'capitalize'
                            }}>
                                {reviews[activeIndex].author}
                            </p>
                        </div>

                        {/* Right Column - Carousel */}
                        <div className="col-md-6 px-4">
                            <div className="position-relative" style={{
                                height: 'clamp(360px, 70vw, 480px)',
                                maxWidth: '100%'
                            }}>
                                {/* Previous Button */}
                                <button
                                    onClick={prevSlide}
                                    className="carousel-control-prev"
                                    style={{
                                        position: 'absolute',
                                        left: '-20px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'transparent',
                                        border: '2px solid white',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        zIndex: 5,
                                    }}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>

                                {/* Images Container */}
                                <div className="carousel-container" style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {reviews.map((review, index) => {
                                        let position = index - activeIndex;
                                        if (position < 0 && position < -1) position += reviews.length;
                                        if (position > 0 && position > 1) position -= reviews.length;

                                        const zIndex = position === 0 ? 3 : (Math.abs(position) === 1 ? 2 : 1);

                                        const opacity = position === 0 ? 1 : 0.7;

                                        let transform = '';
                                        let left = '50%';

                                        if (position === 0) {
                                            transform = 'translateX(-50%) scale(1)';
                                        } else if (position === -1) {
                                            left = '15%';
                                            transform = 'translateX(-50%) scale(0.85)';
                                        } else if (position === 1) {
                                            left = '85%';
                                            transform = 'translateX(-50%) scale(0.85)';
                                        }

                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    width: 'clamp(220px, 40vw, 295px)',
                                                    height: 'clamp(360px, 70vw, 480px)',
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: left,
                                                    transform: transform,
                                                    transition: 'all 0.5s ease',
                                                    opacity: opacity,
                                                    zIndex: zIndex,
                                                }}
                                            >
                                                <img
                                                    src={review.image}
                                                    alt={`Review ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Next Button */}
                                <button
                                    onClick={nextSlide}
                                    className="carousel-control-next"
                                    style={{
                                        position: 'absolute',
                                        right: '-20px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'transparent',
                                        border: '2px solid white',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        zIndex: 5,
                                    }}
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <h1 className="text-uppercase text-center mb-2" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: 'clamp(26px, 6vw, 52px)' }}>Newsletter</h1>
                    <p className="text-center mb-5" style={{ color: '#0D330E', fontSize: 'clamp(14px, 2vw, 18px)', fontFamily: 'Poppins', lineHeight: '1.6' }}>News, Insights, and Our Role in Sustainable Fashion</p>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card h-100 border-0 overflow-hidden">
                                <div className="position-relative">
                                    <img src="/src/assets/images/ArabGojek.png" alt="Newsletter Image 1" className="card-img-top" />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}>
                                        <h2 className="card-title text-white mb-2" style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 24px)', lineHeight: '1.4', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>Reza Arap Oktovian Becomes the Ambassador of Avasara</h2>
                                        <p className="text-white mb-0" style={{ fontFamily: 'Poppins', fontSize: 'clamp(14px, 2vw, 18px)', textDecoration: 'underline' }}>Read more...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="card border-0 overflow-hidden">
                                        <div className="position-relative">
                                            <img src="/src/assets/images/IKN.png" alt="Newsletter Image 2" className="card-img-top" />
                                            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}>
                                                <h2 className="card-title text-white mb-2" style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 24px)', lineHeight: '1.4', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>Avasara Open New Offline Store at IKN</h2>
                                                <p className="text-white mb-0" style={{ fontFamily: 'Poppins', fontSize: 'clamp(14px, 2vw, 18px)', textDecoration: 'underline' }}>Read more...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card border-0 overflow-hidden">
                                        <div className="position-relative">
                                            <img src="/src/assets/images/News/News1.png" alt="Newsletter Image 3" className="card-img-top" />
                                            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}>
                                                <h2 className="card-title text-white mb-2" style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 'clamp(16px, 3vw, 24px)', lineHeight: '1.4', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>One Piece Live Action Supported by Avasara</h2>
                                                <p className="text-white mb-0" style={{ fontFamily: 'Poppins', fontSize: 'clamp(14px, 2vw, 18px)', textDecoration: 'underline' }}>Read more...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BackToTopButton />
        </div >
    );
};

export default Homepage;