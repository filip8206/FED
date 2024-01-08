var scrollTopButton = document.querySelector("footer>a");
var eersteSection = document.querySelector("main section:first-of-type");

var audioElement = document.querySelector("audio");
var eersteLevel = document.querySelectorAll("main ul li:first-of-type");

//function en intersectionObserver voor de visibility van de scrollTop button
function scrollTopButtonVisible (entry) {
    const intersecting = entry.isIntersecting;
    if (intersecting == true) {
        scrollTopButton.classList.remove("visible");
    } else if (intersecting == false) {
        scrollTopButton.classList.add("visible");
    }
}

const scrollTopButtonObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => scrollTopButtonVisible(entry));
}, { threshold: 1 });

scrollTopButtonObserver.observe(eersteSection);

function playAudio() {
    audioElement.play();
}

eersteLevel[0].addEventListener("click", playAudio);
eersteLevel[1].addEventListener("click", playAudio);