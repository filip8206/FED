var scrollTopButton = document.querySelector("footer>a");
var eersteSection = document.querySelector("main section:first-of-type");

var audioElement = document.querySelector("audio");
var eersteLevel = document.querySelectorAll("main ul li:first-of-type");

//function voor scroll animatie
function scrollTop() {
    //onderstaande regel code gebruikt van ChatGPT
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        window.scrollTo(0, 0);
    } else {
        //onderstaande regel code gebruikt van https://www.educative.io/answers/what-is-animate-scrolltop
        $("html, body").animate({ scrollTop: "0" }, 500);
    }
}

scrollTopButton.addEventListener("click", scrollTop)

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