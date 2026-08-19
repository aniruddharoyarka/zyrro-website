/* =====================================================
   ZYRRO WEBSITE
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("mobileNav");


    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");

            mobileNav.classList.toggle("active");

            const isOpen =
                mobileNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /*
         * Close mobile menu when
         * clicking a navigation link.
         */

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");

                mobileNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =================================================
       PRODUCT SLIDER DOTS
    ================================================= */

    const productsGrid =
        document.getElementById("productsGrid");

    const sliderDots =
        document.querySelectorAll(".slider-dot");


    if (productsGrid && sliderDots.length) {

        sliderDots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                /*
                 * On mobile we scroll to the
                 * corresponding product.
                 */

                const cards =
                    productsGrid.querySelectorAll(
                        ".product-card"
                    );

                if (!cards[index]) {
                    return;
                }

                cards[index].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                });


                sliderDots.forEach((item) => {
                    item.classList.remove("active");
                });

                dot.classList.add("active");

            });

        });


        /*
         * Update active dot while
         * horizontally scrolling.
         */

        productsGrid.addEventListener(
            "scroll",
            () => {

                const cards =
                    productsGrid.querySelectorAll(
                        ".product-card"
                    );

                if (!cards.length) {
                    return;
                }


                let closestIndex = 0;

                let smallestDistance =
                    Infinity;


                cards.forEach((card, index) => {

                    const distance =
                        Math.abs(
                            card.offsetLeft -
                            productsGrid.scrollLeft
                        );

                    if (
                        distance <
                        smallestDistance
                    ) {

                        smallestDistance =
                            distance;

                        closestIndex =
                            index;

                    }

                });


                sliderDots.forEach((dot) => {
                    dot.classList.remove("active");
                });


                if (sliderDots[closestIndex]) {

                    sliderDots[
                        closestIndex
                    ].classList.add("active");

                }

            }
        );

    }


    /* =================================================
       NEWSLETTER FORM
    ================================================= */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const input =
                    newsletterForm.querySelector(
                        "input"
                    );


                if (!input) {
                    return;
                }


                const email =
                    input.value.trim();


                if (!email) {
                    return;
                }


                /*
                 * No backend/database yet.
                 *
                 * For now we simply show a
                 * confirmation message.
                 */

                alert(
                    `Thank you! ${email} has been added to our newsletter list.`
                );


                input.value = "";

            }
        );

    }


    /* =================================================
       HEADER SHADOW ON SCROLL
    ================================================= */

    const header =
        document.querySelector(".header");


    if (header) {

        const handleHeaderScroll = () => {

            if (window.scrollY > 10) {

                header.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.08)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        };


        window.addEventListener(
            "scroll",
            handleHeaderScroll
        );


        handleHeaderScroll();

    }


    /* =================================================
       CURRENT YEAR
    ================================================= */

    /*
     * If later we add an element such as:
     *
     * <span id="currentYear"></span>
     *
     * this will automatically update it.
     */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});