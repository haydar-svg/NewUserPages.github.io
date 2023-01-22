function checkGmailChar(event) {
    event.nextElementSibling.firstElementChild.style.display = "block";
    /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(event.value) ?
        event.nextElementSibling.firstElementChild.setAttribute('src', './images/check_circle_outline.svg') :
        event.nextElementSibling.firstElementChild.setAttribute('src', './images/error_outline.svg');
    if (event.value == '') event.nextElementSibling.firstElementChild.style.display = "none"
}

function checkPasswordChar(event) {
    event.nextElementSibling.firstElementChild.style.display = "block";
    /^([a-zA-Z0-9_-]|[!@#$%^&*(),=+-\\.]|\s){8,64}$/.test(event.value) ?
        event.nextElementSibling.firstElementChild.setAttribute('src', './images/check_circle_outline.svg') :
        event.nextElementSibling.firstElementChild.setAttribute('src', './images/error_outline.svg');
    if (event.value == '') event.nextElementSibling.firstElementChild.style.display = "none"
}