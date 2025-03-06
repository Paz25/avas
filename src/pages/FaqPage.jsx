import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const data = [
    {
        title: "How To Order Products On This Website?",
        content: "To order a product, select the desired item and add it to the shopping cart. On the cart page, choose the items you want and proceed to checkout. You will be directed to fill in the shipping information and select a payment method. Once the payment is successful, the order will be processed and shipped to the address you provided."
    },
    {
        title: "Are The Products Sold Here Authentic And Of Good Quality?",
        content: "Yes, all products sold are preloved (second-hand) items that have been checked for quality beforehand. We only provide products in good condition and ready to wear. Each product is accompanied by a detailed description of its condition."
    },
    {
        title: "What If The Product Received Is Not As Described Or Defective?",
        content: "If the product you receive does not match the description or has undisclosed defects, you can request a return or exchange within 7 days of receiving the product. Please contact our customer service through the contact page for further assistance."
    },
    {
        title: "What Payment Methods Are Available?",
        content: "We provide various payment methods, including bank transfers, e-wallets (OVO, GoPay, Dana), and credit cards. All transactions are processed securely and reliably."
    },
    {
        title: "How Long Is The Shipping Time And Can I Track My Order?",
        content: "Shipping time varies depending on the destination and the shipping service chosen. Estimated delivery times will be displayed at checkout. After the order is processed, you will receive a tracking number that can be used to track the shipping status through the relevant courier’s website."
    }
];

const FaqPage = () => {
    return (
        <div className="container-fluid p-0">
            {/* Section Title */}
            <section className="py-5 bg-white mt-5">
                <div className="container">
                    <h1 className="text-uppercase text-center mb-5" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: '52px' }}>
                        Frequently Asked Questions (FAQs)
                    </h1>

                    {/* Bootstrap Accordion */}
                    <div className="accordion" id="accordionExample">
                        {data.map((item, index) => (
                            <div className="accordion-item border-0 mb-2" key={index} style={{ borderRadius: '3px', overflow: 'hidden' }}>
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button d-flex align-items-center ${index !== 0 ? 'collapsed' : ''}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={index === 0 ? "true" : "false"}
                                        aria-controls={`collapse${index}`}
                                        style={{
                                            backgroundColor: '#66754C',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: '16px',
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        <span className="me-2">{index + 1}.</span> {item.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body" style={{ backgroundColor: '#fff', padding: '15px', fontSize: '14px' }}>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="container text-center py-5">
                    <p style={{ fontSize: '14px', color: '#3A3A3A' }}>Still curious?</p>

                    <h1 className="text-uppercase text-center mb-5" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: '52px' }}>
                        Drop Your Question
                    </h1>

                    {/* Form */}
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-8">
                            {/* Textarea */}
                            <div className="position-relative">
                                <textarea
                                    className="form-control"
                                    placeholder="Drop your questions here..."
                                    rows="4"
                                    style={{
                                        border: '2px solid #0D330E',
                                        borderRadius: '3px',
                                        padding: '12px',
                                        fontSize: '16px',
                                        boxShadow: '-5px -5px 0px #66754C'
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Input Email & Button */}
                    <div className="row justify-content-center mt-3">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                    style={{
                                        border: '2px solid #0D330E',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        fontSize: '16px',
                                        boxShadow: '-5px -5px 0px #66754C'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <button
                                className="btn btn-outline-dark w-100"
                                style={{
                                    border: '2px solid #3A3A3A',
                                    borderRadius: '5px',
                                    fontSize: '16px',
                                    padding: '10px'
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaqPage;
