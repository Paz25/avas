import React from "react";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxPageNumbers = 5; // Number of visible pages before showing "..."

    // Generate page numbers dynamically
    const generatePageNumbers = () => {
        const pages = [];
        if (totalPages <= maxPageNumbers) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="pagination-container">
            {/* Previous Button */}
            <button
                className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {/* Page Numbers */}
            {generatePageNumbers().map((page, index) =>
                page === "..." ? (
                    <span key={index} className="dots">...</span>
                ) : (
                    <button
                        key={index}
                        className={`page-btn ${currentPage === page ? "active" : ""}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next Button */}
            <button
                className={`page-btn ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default CustomPagination;
