let headerNavDOM = document.querySelector(".header-nav")
let openbtnDOM = document.querySelector(".hdr-btn")
let closebtnDOM = document.querySelector(".header-close-btn")
openbtnDOM.addEventListener("click", toggleNav)
openbtnDOM.isOpen = true;
closebtnDOM.addEventListener("click", toggleNav)
closebtnDOM.isOpen = false;




function toggleNav(event) {
    event.preventDefault()
    if (event.currentTarget.isOpen) {
        headerNavDOM.classList.add("show")
    }
    if (!event.currentTarget.isOpen) {
        headerNavDOM.classList.remove("show")
    }


}