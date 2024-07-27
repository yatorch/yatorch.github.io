// initializing necessary variables

const circularLogoDiv = document.getElementById('circular-logo-div');
const circularLogoText = document.getElementById('circular-logo-text');
const flashlightEmoji = document.getElementsByClassName('left-col-emoji')[0];
const navbar = document.getElementById('navbar-container');
let clickables = Array.from(document.getElementsByClassName('clickable'));

let brightenLogoDiv = function() {
    circularLogoDiv.style.transitionDuration = '1s';
    circularLogoDiv.style.filter = 'brightness(1.75)';
};

let resetLogoDiv = function() {
    circularLogoDiv.style.transitionDuration = '1s';
    circularLogoDiv.style.filter = 'none';
};

let brightenLogoText = function() {
    circularLogoText.style.padding = '1rem 0rem 1.5rem 0rem';
};

let resetLogoText = function() {
    circularLogoText.style.padding = '1.25rem 0rem';
};

let linkHighlight = function(event) {
    event.target.style.transitionDuration = '0.3s';
    event.target.style.color = 'white';
};

let linkDarken = function(event) {
    event.target.style.transitionDuration = '0.3s';
    event.target.style.color = 'blue';
};

clickables.forEach((clickable) => {
    clickable.addEventListener('mouseover', linkHighlight);
    clickable.addEventListener('mouseleave', linkDarken);
});

document.addEventListener('scroll', () => {
    navbar.style.borderBottom = '1px solid snow';
});

circularLogoDiv.addEventListener('mouseover', brightenLogoDiv);
circularLogoDiv.addEventListener('mouseleave', resetLogoDiv);
circularLogoDiv.addEventListener('mouseover', brightenLogoText);
circularLogoDiv.addEventListener('mouseleave', resetLogoText);
flashlightEmoji.addEventListener('mouseover', brightenLogoDiv);
flashlightEmoji.addEventListener('mouseleave', resetLogoDiv);