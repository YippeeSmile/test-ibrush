const popupOpenButton = document.querySelector('.icon_burger');
const popupOpenButtonHeader = document.querySelector('.button_place_header');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');


function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpenButtonHeader.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupOpenButton.addEventListener('click', openPopup);