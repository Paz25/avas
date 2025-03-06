import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const ShopPage = () => {
    const [likedProducts, setLikedProducts] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedFilters, setSelectedFilters] = useState([]);

    const products = [
        { id: 1, category: "men", filter: "tops", name: "Men's Top", originalPrice: 50000, discount: 10 },
        { id: 2, category: "men", filter: "bottoms", name: "Men's Bottom", originalPrice: 60000, discount: 5 },
        { id: 3, category: "women", filter: "dresses", name: "Women's Dress", originalPrice: 80000, discount: 15 },
        { id: 4, category: "women", filter: "tops", name: "Women's Top", originalPrice: 40000, discount: 10 },
        { id: 5, category: "accessories", filter: "footwear", name: "Accessories - Footwear", originalPrice: 30000, discount: 5 },
        { id: 6, category: "accessories", filter: "shirts", name: "Accessories - Shirt", originalPrice: 25000, discount: 0 },
        { id: 7, category: "men", filter: "outerwear", name: "Men's Jacket", originalPrice: 100000, discount: 20 },
        { id: 8, category: "men", filter: "footwear", name: "Men's Shoes", originalPrice: 75000, discount: 10 },
        { id: 9, category: "men", filter: "shirts", name: "Men's Shirt", originalPrice: 55000, discount: 5 },
        { id: 10, category: "women", filter: "bottoms", name: "Women's Pants", originalPrice: 65000, discount: 10 },
        { id: 11, category: "women", filter: "footwear", name: "Women's Sandals", originalPrice: 50000, discount: 5 },
        { id: 12, category: "women", filter: "outerwear", name: "Women's Jacket", originalPrice: 110000, discount: 25 },
        { id: 13, category: "women", filter: "dresses", name: "Women's Evening Dress", originalPrice: 120000, discount: 30 },
        { id: 14, category: "men", filter: "tops", name: "Men's Polo Shirt", originalPrice: 45000, discount: 5 },
        { id: 15, category: "men", filter: "bottoms", name: "Men's Cargo Pants", originalPrice: 70000, discount: 10 },
        { id: 16, category: "men", filter: "footwear", name: "Men's Sneakers", originalPrice: 85000, discount: 15 },
        { id: 17, category: "accessories", filter: "footwear", name: "Accessories - Socks", originalPrice: 10000, discount: 2 },
        { id: 18, category: "accessories", filter: "shirts", name: "Accessories - Tie", originalPrice: 35000, discount: 5 },
        { id: 19, category: "accessories", filter: "outerwear", name: "Accessories - Scarf", originalPrice: 20000, discount: 5 },
        { id: 20, category: "women", filter: "shirts", name: "Women's Blouse", originalPrice: 50000, discount: 10 },
        { id: 21, category: "men", filter: "outerwear", name: "Men's Blazer", originalPrice: 130000, discount: 25 },
        { id: 22, category: "women", filter: "bottoms", name: "Women's Skirt", originalPrice: 55000, discount: 10 },
        { id: 23, category: "women", filter: "tops", name: "Women's Turtleneck", originalPrice: 45000, discount: 5 },
        { id: 24, category: "men", filter: "shirts", name: "Men's Formal Shirt", originalPrice: 60000, discount: 10 },
        { id: 25, category: "accessories", filter: "footwear", name: "Accessories - Flip Flops", originalPrice: 25000, discount: 5 },
        { id: 26, category: "women", filter: "dresses", name: "Women's Casual Dress", originalPrice: 75000, discount: 15 },
        { id: 27, category: "women", filter: "footwear", name: "Women's High Heels", originalPrice: 90000, discount: 20 },
        { id: 28, category: "men", filter: "bottoms", name: "Men's Shorts", originalPrice: 50000, discount: 5 },
        { id: 29, category: "men", filter: "tops", name: "Men's Tank Top", originalPrice: 35000, discount: 5 },
        { id: 30, category: "accessories", filter: "shirts", name: "Accessories - Cufflinks", originalPrice: 40000, discount: 5 },
        { id: 31, category: "men", filter: "footwear", name: "Men's Loafers", originalPrice: 95000, discount: 15 },
        { id: 32, category: "women", filter: "shirts", name: "Women's Silk Blouse", originalPrice: 60000, discount: 10 },
        { id: 33, category: "accessories", filter: "outerwear", name: "Accessories - Gloves", originalPrice: 25000, discount: 5 },
        { id: 34, category: "men", filter: "shirts", name: "Men's T-Shirt", originalPrice: 40000, discount: 5 },
        { id: 35, category: "women", filter: "bottoms", name: "Women's Jeans", originalPrice: 70000, discount: 15 },
        { id: 36, category: "men", filter: "bottoms", name: "Men's Sweatpants", originalPrice: 55000, discount: 10 },
        { id: 37, category: "women", filter: "dresses", name: "Women's Summer Dress", originalPrice: 65000, discount: 10 },
        { id: 38, category: "accessories", filter: "footwear", name: "Accessories - Slippers", originalPrice: 20000, discount: 5 },
        { id: 39, category: "accessories", filter: "outerwear", name: "Accessories - Hat", originalPrice: 30000, discount: 5 },
        { id: 40, category: "men", filter: "outerwear", name: "Men's Coat", originalPrice: 140000, discount: 30 }
    ];
    

    const categories = ["all", "men", "women", "accessories"];
    const filters = ["tops", "bottoms", "footwear", "outerwear", "dresses", "shirts"];

    const handleLikeClick = (id) => {
        setLikedProducts((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleFilterClick = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((f) => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    const resetFilters = () => {
        setSelectedFilters([]);
    };

    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
        const filterMatch = selectedFilters.length === 0 || selectedFilters.includes(product.filter);
        return categoryMatch && filterMatch;
    });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container py-5 text-center mt-5">
            
            <h1 className="text-uppercase text-center mb-5" style={{ fontFamily: 'Abril Fatface', color: '#0D330E', fontSize: '52px' }}>
                Our Collection
            </h1>
            
            {/* Tab Kategori */}
            <div className="d-flex justify-content-center my-4 gap-4 border-bottom pb-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-tab btn border-0 position-relative ${selectedCategory === category ? "fw-bold active-category" : ""}`}
                        onClick={() => handleCategoryClick(category)}
                        style={{ fontSize: "18px", fontFamily: "Poppins", color: "#0D330E" }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <style>
                {`
                    .active-category::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -3px;
                        width: 100%;
                        height: 3px;
                        background-color: #0D330E;
                    }
                `}
            </style>

            {/* Filter */}
            <div className="d-flex justify-content-center gap-2 flex-wrap my-3">
                <button className="filter-btn btn" style={{ backgroundColor: "#0D330E", color: "#FFFFFF", borderRadius: "50px" }} onClick={resetFilters}>Reset Filter</button>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`filter-btn btn px-3 d-flex align-items-center gap-2`}
                        style={{ 
                            backgroundColor: selectedFilters.includes(filter) ? "#D4D8C5" : "transparent", 
                            color: "#0D330E", 
                            border: selectedFilters.includes(filter) ? "none" : "1px solid #0D330E", 
                            borderRadius: "50px"
                        }}
                        onClick={() => handleFilterClick(filter)}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        {selectedFilters.includes(filter) && <FaTimes />}
                    </button>
                ))}
            </div>

            {/* Produk */}
            <div className="row g-4 justify-content-center">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-6 product-item">
                        <div className="card border-0 shadow-sm position-relative">
                            {/* Gambar Produk */}
                            <img src="https://placehold.co/295x295" className="card-img-top" alt={product.name} />
                            
                            <div className="card-body px-3 pt-3 pb-0 d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-1" style={{ color: "#0D330E", fontSize: "18px", fontFamily: "Poppins", fontWeight: "600" }}>
                                    {product.name}
                                </h5>
                                
                                {/* Tombol Like */}
                                <button onClick={() => handleLikeClick(product.id)} style={{ all: "unset", cursor: "pointer" }}>
                                    {likedProducts[product.id] ? <AiFillHeart size={30} color="red" /> : <AiOutlineHeart size={30} color="#0D330E" />}
                                </button>
                            </div>
                            
                            <div className="card-body px-3 pb-4 pt-0 d-flex justify-content-start align-items-center">
                                {/* Harga dengan Diskon */}
                                <p className="card-text m-0" style={{ color: "#0D330E", fontSize: "16px", fontFamily: "Poppins" }}>
                                    {product.discount ? (
                                        <>
                                                IDR {product.originalPrice}
                                            {/* <span>IDR {product.discountedPrice}</span> */}
                                        </>
                                    ) : (
                                        <>IDR {product.price}</>
                                    )}
                                </p>
                                
                                {/* Badge Diskon */}
                                {product.discount && (
                                    <span className="badge text-dark mx-2" style={{backgroundColor: '#EBF1EB'}} >
                                        -{product.discount}%
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
