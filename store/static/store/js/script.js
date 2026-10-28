document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       QUANTITY CONTROL
    ========================= */

    window.increaseQuantity = function () {

        const input = document.getElementById("quantity");

        if (input) {
            input.value = parseInt(input.value || 1) + 1;
        }

    };


    window.decreaseQuantity = function () {

        const input = document.getElementById("quantity");

        if (input) {

            let value = parseInt(input.value || 1);

            if (value > 1) {
                input.value = value - 1;
            }

        }

    };


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".product-card, .category-card, .benefit, .promo-section"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =========================
       SEARCH
    ========================= */

    const searchInput = document.querySelector(".nav-search input");

    if (searchInput) {

        searchInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                const value = searchInput.value.trim();

                if (value !== "") {

                    window.location.href =
                        "/products/?search=" +
                        encodeURIComponent(value);

                }

            }

        });

    }


    /* =========================
       SORT
    ========================= */

    const sortSelect = document.getElementById("sort");

    if (sortSelect) {

        sortSelect.addEventListener("change", function () {

            console.log("Selected:", this.value);

        });

    }

});