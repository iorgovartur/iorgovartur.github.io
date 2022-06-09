function myAnimScroll(elem, showClass) {
    let elemHeight = elem.offsetHeight; //визначаємо висоту елементу
    
    let temp = elem.getBoundingClientRect(); //постійно змінюється
    let elemPosition = temp.top + scrollY; //завжди стабільне

    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    if ((scrollY > elemPosition - startAnim) && scrollY < (elemPosition + elemHeight)) {
        elem.classList.add(showClass)
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(showClass)
        }
    }
}

let divAnimElements1 = document.querySelectorAll('.anim-hide-left');
for (let element of divAnimElements1) {
    window.addEventListener('scroll', () => {
        myAnimScroll(element, 'anim-show-left');
    })
    myAnimScroll(element, 'anim-show-left');
}

let divAnimElements2 = document.querySelectorAll('.anim-hide-right');
for (let element of divAnimElements2) {
    window.addEventListener('scroll', () => {
        myAnimScroll(element, 'anim-show-right');
    })
    myAnimScroll(element, 'anim-show-right');
}
