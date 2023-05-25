const next = document.querySelector('.left');
const previous = document.querySelector('.right');
const partone = document.querySelector('.partone');
const el = document.querySelectorAll('.el');
let toggleNav = document.querySelector('.mobile-nav');
const openMenu = document.querySelector('.open')
const hiddenElement = document.getElementById('.open');
let count = 0;
let counter = 0;
const arrayOfImages = [
    'desktop-image-hero-1.jpg',
    'desktop-image-hero-2.jpg',
    'desktop-image-hero-3.jpg'
];

const nextSlide = () => {
    if (count <= 1) {
        count = 3
    }
    count--
    partone.style.backgroundImage = `url(/images/desktop-image-hero-${count}.jpg)`;

}
const previousSlide = () => {
    count++
    partone.style.backgroundImage = `url(/images/desktop-image-hero-${count}.jpg)`;
    if (count >= arrayOfImages.length) {
        count = 0
    }
}
const nextText = () => {
    const ar = Array.from(el)

    ar.forEach(e => e.classList.remove('slide'))

    ar[counter].classList.add("slide");
    counter++


    if (counter >= 3) {
        counter = 0
    }
}
const previousText = () => {
    if (counter <= 0) {
        counter = 3
    }
    counter--
    const ar = Array.from(el)
    ar.forEach(e => e.classList.remove('slide'))
    ar[counter].classList.add("slide");
}
const showToggleBtn = () => {
    toggleNav.classList.toggle('active')

    if (toggleNav.classList.contains('active')) {
        openMenu.innerHTML =
        `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="white" fill-rule="evenodd" opacity="1"/>
        </svg>`
    } else {
        openMenu.innerHTML = '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="white" fill-rule="evenodd"  opacity="1"/></svg>';
    }
};





next.addEventListener('click', nextSlide)
previous.addEventListener('click', previousSlide)
previous.addEventListener('click', previousText)
next.addEventListener('click', nextText)
openMenu.addEventListener('click', showToggleBtn)












