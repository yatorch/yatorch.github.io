// initializing necessary variables

const circularLogoDiv = document.getElementById('circular-logo-div');
const circularLogoText = document.getElementById('circular-logo-text');
const flashlightEmoji = document.getElementsByClassName('left-col-emoji')[0];
const logoDesc = document.getElementsByClassName('center-col-desc')[0];
const navbar = document.getElementById('navbar-container');
const bannerGrid = document.getElementById('banner-grid');
let clickables = Array.from(document.getElementsByClassName('clickable'));

let brightenBackground = function() {
    document.body.style.backgroundColor = 'rgba(100, 57, 123, 1)';
}

let darkenBackground = function() {
    document.body.style.backgroundColor = 'rgb(35, 20, 43)';
}

let brightenLogoDiv = function() {
    circularLogoDiv.style.transitionDuration = '1s';
    circularLogoDiv.style.filter = 'brightness(1.75)';
    circularLogoDiv.style.opacity = '1';
};

let brightenLogoDesc = function() {
    logoDesc.style.transitionDuration = '1s';
    logoDesc.style.filter = 'brightness(1.75)';
    logoDesc.style.color = 'white';
    logoDesc.style.fontSize = '1.2rem';
};

let resetLogoDiv = function() {
    circularLogoDiv.style.transitionDuration = '1s';
    circularLogoDiv.style.filter = 'none';
    circularLogoDiv.style.opacity = '0.1';
};

let resetLogoDesc = function() {
    logoDesc.style.transitionDuration = '1s';
    logoDesc.style.filter = 'none';
    logoDesc.style.color = 'rgba(90, 89, 89, 1)';
    logoDesc.style.fontSize = '1rem';
};

let brightenLogoText = function() {
    circularLogoText.style.padding = '1rem 0rem 1.5rem 0rem';
};

let resetLogoText = function() {
    circularLogoText.style.padding = '1.25rem 0rem';
};

let linkHighlight = function(event) {
    event.target.style.transitionDuration = '0.3s';
    event.target.style.color = '#84D2FF';
};

let linkDarken = function(event) {
    event.target.style.transitionDuration = '0.3s';
    event.target.style.color = 'white';
};

clickables.forEach((clickable) => {
    clickable.addEventListener('mouseover', linkHighlight);
    clickable.addEventListener('mouseleave', linkDarken);
});

document.addEventListener('scroll', () => {
    navbar.style.borderBottom = '1px solid rgba(255, 250, 250, 1)';
});

bannerGrid.addEventListener('topEvent', (event) => {
    navbar.style.borderBottom = '1px solid transparent';
});

circularLogoDiv.addEventListener('mouseover', brightenLogoDiv);
circularLogoDiv.addEventListener('mouseleave', resetLogoDiv);
circularLogoDiv.addEventListener('mouseover', brightenLogoText);
circularLogoDiv.addEventListener('mouseleave', resetLogoText);
flashlightEmoji.addEventListener('mouseover', brightenLogoDiv);
flashlightEmoji.addEventListener('mouseleave', resetLogoDiv);
flashlightEmoji.addEventListener('mouseover', brightenLogoDesc);
flashlightEmoji.addEventListener('mouseleave', resetLogoDesc);
flashlightEmoji.addEventListener('mouseover', brightenBackground);
flashlightEmoji.addEventListener('mouseleave', darkenBackground);
logoDesc.addEventListener('mouseover', brightenLogoDesc);
logoDesc.addEventListener('mouseleave', resetLogoDesc);