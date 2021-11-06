let popupBtn = document.querySelector('.popup-btn');
let cross = document.querySelector('.cross');
let popup = document.querySelector('.popup');

function showPopup() {
    popup.classList.add('top-animation');
}
function closePopup() {
    popup.classList.add('bottom-animation');
}
function eTargetClosePopup(e) {
    if(popup.contains(e.target) + popupBtn.contains(e.target)) {}
    else {
        closePopup();
    }
}
function clearClass() {
    if(popup.classList.contains('bottom-animation')) {
        popup.classList.remove('bottom-animation');
        popup.classList.remove('top-animation');
    }
}

popupBtn.onclick = showPopup;
cross.onclick = closePopup;
window.onclick = eTargetClosePopup;
setInterval(clearClass, 2000);