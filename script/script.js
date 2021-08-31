const   input = document.querySelector('.fibo__index input'),
        go = document.querySelector('.fibo__index button'),
        fiboWait = document.querySelector('.fibo__wait'),
        fiboLoading = document.querySelector('.fibo__load'),
        fiboResult = document.querySelector('.fibo__result'),
        fiboNumbers = document.querySelector('.fibo_numbers'),
        finalText = document.querySelector('.fibo__final');
let fibo = [1];
let resultNumbers = Array.from(fiboNumbers.children);
// EventListenet
go.addEventListener('click', ()=>{
    fibo = [1]
    fiboResult.classList.remove('active');
    fiboResult.classList.remove('wrap');
    fiboNumbers.classList.remove('minimize');
    resultNumbers[1].classList.remove('alert');
    if(input.value === '' || input.value < 1){
        fiboWait.classList.add('active');
        finalText.innerHTML = `Fibo Final Result `;
    }else {
        calc(input.value);
    }
})

function calc(getsome) {
    let sum = 0;
    if(getsome == 1) {
        // do nothing
    }else {
        for (i = 0; i < getsome; i++) {
            if (i === 0) {
                sum = 1;
                fibo.push(sum);
            } else {
                sum = fibo[i] + fibo[i - 1];
                fibo.push(sum);
            }
        }
    }
    showRerult(getsome);
};
function showRerult(getsome) {
    fiboWait.classList.remove('active');
    fiboLoading.classList.add('active');
    setTimeout(() => {
        fiboLoading.classList.remove('active');
        fiboResult.classList.add('active');
        showFinal(getsome);
    }, 3000);
}
function showFinal(getsome) {
    if(getsome == 1) {
        resultNumbers[2].innerHTML = 1;
        resultNumbers[1].innerHTML = 0;
        resultNumbers[0].innerHTML = '';
        finalText.innerHTML = `The value of index 1 of the Fibonacci sequence is equal to 0`;
    }else if (getsome == 2) {
        resultNumbers[2].innerHTML = 1;
        resultNumbers[1].innerHTML = 1;
        resultNumbers[0].innerHTML = 0;
        finalText.innerHTML = `The value of index 2 of the Fibonacci sequence is equal to 1`;
    }
     else {
        resultNumbers[2].innerHTML = fibo[Number(input.value - 1)];
        resultNumbers[1].innerHTML = fibo[Number(input.value - 2)];
        resultNumbers[0].innerHTML = fibo[Number(input.value - 3)];
        finalText.innerHTML = `The value of index ${getsome} of the Fibonacci sequence is equal to ${fibo[Number(input.value - 2)]}`

        if(fibo[(input.value - 2)].toString().length > 4 && fibo[(input.value - 2)].toString().length < 8 ) {
            fiboResult.classList.add('wrap');
        } else if (fibo[(input.value - 2)].toString().length > 7 && fibo[(input.value - 2)].toString().length < 13) {
            fiboResult.classList.add('wrap');
            fiboNumbers.classList.add('minimize');
        } else if (fibo[(input.value - 2)].toString().length > 12) {
            fiboResult.classList.add('wrap');
            resultNumbers[2].innerHTML = '';
            resultNumbers[1].innerHTML = 'Thats a BIG number . . .</br>See below';
            resultNumbers[1].classList.add('alert');
            resultNumbers[0].innerHTML = '';
        }
    }
}
