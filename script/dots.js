const   dots = document.querySelectorAll('.fibo__load span'),
        fiboLoad = document.querySelector('.fibo__load'),
        dotsArray = Array.from(dots);
        

setInterval(() => {
    if(fiboLoad.classList.contains('active')) {
        loading();
    }
}, 1000);


function loading() {
    if(dotsArray[0].classList.contains('active')) {
        dotsArray[0].classList.remove('active');
        dotsArray[1].classList.add('active');
    } else if (dotsArray[1].classList.contains('active')) {
        dotsArray[1].classList.remove('active');
        dotsArray[2].classList.add('active');
    } else if (dotsArray[2].classList.contains('active')) {
        dotsArray[2].classList.remove('active');
        dotsArray[0].classList.add('active');
    }
}


