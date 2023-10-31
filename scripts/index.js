const popupOpenButton = document.querySelector('.nav__icon_burger');
const popupOpenButtonHeader = document.querySelector('.button_place_header');
const popupCloseButton = document.querySelector('.popup__close_button');
const popup = document.querySelector('.popup');


function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupOpenButtonHeader.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);