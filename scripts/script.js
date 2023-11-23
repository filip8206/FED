// JavaScript Document
console.log("hi")

var eersteSection = document.querySelector("section:first-of-type")
var headerElement = document.querySelector("header")

function headerScroll () {
    const intersecting = entry.isIntersecting
    if (intersecting == true) {
        headerElement.classList.remove("scroll")
    } else if (intersecting == false) {
        headerElement.classList.add("scroll")
    }
}

const headerScrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => headerScroll
    )
},{ treshold: 0.01 },{rootMargin:"100px"})

headerScrollObserver.observe(eersteSection)

