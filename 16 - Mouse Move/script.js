const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; // px


function shadow(e) {
    // * This is the same as the ES6 destructure below
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;

    let { offsetX: x, offsetY: y } = e;

    // * `this` will always be there `hero` element; `e.target` is whatever triggered the event (eg. might be a child of hero)
    if (this !== e.target) {    
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // * Simple version    
    // text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7)`;
    
    // * WHOA
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
    `
}

hero.addEventListener('mousemove', shadow)
