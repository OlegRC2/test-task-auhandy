import mask from "./modules/mask";
import validationName from "./modules/validationName";
import validationEmail from "./modules/validationEmail";

window.addEventListener("DOMContentLoaded", () => {
    mask(".feedback__phone"); // функция для работы маски инпута
    mask(".modal__phone"); // функция для работы маски инпута
    validationName(".modal__name"); // функция валидации инпутов имени
    validationName(".feedback__name"); // функция валидации инпутов имени
    validationEmail(".feedback__email"); // функция валидации инпутов емайл
    validationEmail(".modal__email"); // функция валидации инпутов емайл
});
