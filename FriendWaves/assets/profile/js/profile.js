const navBar = document.querySelector('.box-center');
const allLi = document.querySelectorAll('li');
const icon1 = document.querySelector('#icon-1');
const icon2 = document.querySelector('#icon-2');
const icon3 = document.querySelector('#icon-3');
const icon4 = document.querySelector('#icon-4');
const icon5 = document.querySelector('#icon-5');
const book = document.querySelector('.book');
const grid = document.querySelector('.grid');
const albums = document.querySelector('.albums');
const heart = document.querySelector('.heart');
const bookmark = document.querySelector('.bookmark');

allLi.forEach((li, index) => {
    li.addEventListener('click', (e) => {
        navBar.querySelector('.active-list').classList.remove('active-list');
        li.classList.add('active-list');

        const indicator = document.querySelector('.indicator');
        indicator.style.transform = `translateX(calc(${index * 190.5}%))`;
    });

    const setAtributIcom1 = () => {
        if (index == 0) {
            book.classList.add('ActivePosition');
        } else {
            grid.classList.remove('ActivePosition');
            albums.classList.remove('ActivePosition');
            heart.classList.remove('ActivePosition');
            bookmark.classList.remove('ActivePosition');
        }
    };
    const setAtributIcom2 = () => {
        if (index == 1) {
            grid.classList.add('ActivePosition');
        } else {
            book.classList.remove('ActivePosition');
            albums.classList.remove('ActivePosition');
            heart.classList.remove('ActivePosition');
            bookmark.classList.remove('ActivePosition');
        }
    };
    const setAtributIcom3 = () => {
        if (index == 2) {
            albums.classList.add('ActivePosition');
        } else {
            book.classList.remove('ActivePosition');
            grid.classList.remove('ActivePosition');
            heart.classList.remove('ActivePosition');
            bookmark.classList.remove('ActivePosition');
        }
    };
    const setAtributIcom4 = () => {
        if (index == 3) {
            heart.classList.add('ActivePosition');
        } else {
            book.classList.remove('ActivePosition');
            grid.classList.remove('ActivePosition');
            albums.classList.remove('ActivePosition');
            bookmark.classList.remove('ActivePosition');
        }
    };
    const setAtributIcom5 = () => {
        if (index == 4) {
            bookmark.classList.add('ActivePosition');
        } else {
            book.classList.remove('ActivePosition');
            grid.classList.remove('ActivePosition');
            heart.classList.remove('ActivePosition');
            albums.classList.remove('ActivePosition');
        }
    };

    icon1.addEventListener('click', () => setAtributIcom1());
    icon2.addEventListener('click', () => setAtributIcom2());
    icon3.addEventListener('click', () => setAtributIcom3());
    icon4.addEventListener('click', () => setAtributIcom4());
    icon5.addEventListener('click', () => setAtributIcom5());
});
