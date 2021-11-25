const validationEmail = (emailSelector) => {
    // функция валидации инпутов емайл
    const email = document.querySelector(emailSelector);

    email.addEventListener("keypress", function (e) {
        email.style.border = "none";
    });

    email.addEventListener("blur", () => {
        if (!email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
            email.style.border = "2px solid red";
        } else {
            email.style.border = "none";
        }

        if (email.value === "") {
            email.style.border = "none";
        }
    });
};

export default validationEmail;
