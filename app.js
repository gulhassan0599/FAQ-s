const faqs = document.querySelectorAll(".faqs-box");

faqs.forEach((faq) => {
    const btn = faq.querySelector(".btn");

    btn.addEventListener("click", (e) => {
        const plus = faq.querySelector(".plus");
        const minus = faq.querySelector(".minus");
        const answer = faq.querySelector(".answer");

        if (plus.classList.contains("visibility")) {
            // Show the answer and toggle icons
            plus.classList.remove("visibility");
            minus.classList.add("visibility");
            answer.classList.add("visibility");
        } else {
            // Hide the answer and toggle icons
            plus.classList.add("visibility");
            minus.classList.remove("visibility");
            answer.classList.remove("visibility");
        }

        // Close other opened FAQs
        faqs.forEach((item) => {
            if (item !== faq) {
                item.querySelector(".plus").classList.remove("visibility");
                item.querySelector(".minus").classList.add("visibility");
                item.querySelector(".answer").classList.add("visibility");
            }
        });
    });
});
