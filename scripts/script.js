// JavaScript Document
console.log("hi");

var eersteSection = document.querySelector("section:first-of-type");
var headerElement = document.querySelector("header");

var eersteSectionLink = document.querySelector("section:first-of-type a:first-of-type");
var headerGetStartedLink = document.querySelector("header a:last-of-type");
var headerImage = document.querySelector("header img");

var learnAnywhereSection = document.querySelector("section:nth-of-type(4)");

// function en IntersectionObserver voor lijntje onder de header
function headerScroll(entry) {
    const intersecting = entry.isIntersecting;
    if (intersecting == true) {
        headerElement.classList.remove("scroll");
    } else if (intersecting == false) {
        headerElement.classList.add("scroll");
    }
}

const headerScrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => headerScroll(entry));
}, { threshold: 1 });

headerScrollObserver.observe(eersteSection);


//function en IntersectionObserver voor get started button in header
function headerScrollButton (entry) {
    const intersecting = entry.isIntersecting;
    if (intersecting == true) {
        headerGetStartedLink.classList.add("noDisplay");
        headerImage.src = "./images/logotext.svg";
        headerElement.classList.remove("scrollVerder");
    } else if (intersecting == false) {
        headerGetStartedLink.classList.remove("noDisplay");
        headerImage.src = "./images/logoicon.svg";
        headerElement.classList.add("scrollVerder");
    }
}

const headerScrollButtonObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => headerScrollButton(entry));
}, { threshold: 1 });

headerScrollButtonObserver.observe(eersteSectionLink);