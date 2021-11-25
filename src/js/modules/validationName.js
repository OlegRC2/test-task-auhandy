const validationName = (nameSelector) => {
    // функция валидации инпутов имени
    const name = document.querySelector(nameSelector);

    name.addEventListener("keypress", function (e) {
        if (e.key.match(/[^A-Za-z]/gi)) {
            // разрешены только латинские буквы
            e.preventDefault();
        }
    });

    name.addEventListener("input", () => {
        if (name.value.match(/[а-яёА-ЯЁ 0-9]/gi)) {
            // русские буквы и цифры удаляем
            name.value = "";
        }
    });
};

export default validationName;
