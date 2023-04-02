const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);
const counters = document.querySelectorAll('.counter');
const achievments = document.querySelector('.achievments');
const btnServices = document.querySelector('.btn-services');
const arrow = document.querySelector('.fa-arrow-right-long');

btnServices.addEventListener('mouseenter', ()=> {
    arrow.style.transform = 'translateX(10px)';
})

btnServices.addEventListener('mouseleave', ()=> {
    arrow.style.transform = 'translateX(0)';
})

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter, 1)
        }
        else {
            counter.innerText = target;
        }
    }
    if(window.scrollY === achievments.offsetHeight){
        updateCounter();
    }
})  

function fixNav(){
    if(window.scrollY> nav.offsetHeight  +150 ){
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
}