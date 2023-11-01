// for textBox
let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('#button');
let error = document.getElementsByClassName('error');
let ans;
// Result function
function result() {
    try {
        ans = Number(eval(input.value).toFixed(3));
        // error handling
        if (ans === Infinity) {
            error[1].removeAttribute('hidden');
            setTimeout(e => {
                error[1].setAttribute('hidden', 'true');
            }, 2000);
            ans = null;
        }
    }
    catch (e) {
        error[0].removeAttribute('hidden');
        setTimeout(e => {
            error[0].setAttribute('hidden', 'true');
        }, 2000);
        ans = null;

    }
    finally {
        input.value = ans;
    }
}

//for result(by keyPress on anywhere)
document.getElementsByClassName('mainBody')[0].addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        result();
    }
})
// onclick function for delete left
function removeLast() {
    input.value = input.value.substring(0, input.value.length - 1);
}
// onclick function for division button
function divideKey() {
    input.value += '/';
}
// onclick function for minus button
function minusKey() {
    input.value += '-';
}

// Button actions
Array.from(btn).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        let str = input.value; //input as string
        // let ans;
        // for result(by click)
        if (e.target.innerHTML === '=') {
            result();
        }
        // for delete all
        else if (e.target.innerHTML === 'C') {
            input.value = null;

        }
        // for font images
        else if (e.target.innerHTML === '<i class="fa-solid fa-divide"></i>' || e.target.innerHTML === '<i class="fa-solid fa-delete-left"></i>' || e.target.innerHTML === '<i class="fa-solid fa-minus"></i>') {
            input.value = input.value;
        }
        else if (e.target.innerHTML === 'X') {
            input.value += '*';
        }
        else {
            input.value += e.target.innerHTML;
        }
    })
})