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














// Another one
// let str = document.getElementById('inputBox');
// let error = document.getElementsByClassName('error');
// let button = document.getElementById('button');
// str.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         result();
//     }
// })

// // onclick functions
// function Delete() {
//     str.value = null;
//     if (!error[0].hasAttribute('hidden')) {
//         error[0].setAttribute('hidden', 'true');
//     }
//     if (!error[1].hasAttribute('hidden')) {
//         error[1].setAttribute('hidden', 'true');
//     }
// }
// function removeLast() {
//     let s = str.value;
//     str.value = s.substring(0, s.length-1);
// }
// function keydiv(){
//     str.value = str.value + '/';
// }
// function keyX(){
//     str.value = str.value + '*';
// }
// function key7(){
//     str.value = str.value + '7';
// }
// function key8(){
//     str.value = str.value + '8';
// }
// function key9(){
//     str.value = str.value + '9';
// }
// function key4(){
//     str.value = str.value + '4';
// }
// function key5(){
//     str.value = str.value + '5';
// }
// function key6(){
//     str.value = str.value + '6';
// }
// function key1(){
//     str.value = str.value + '1';
// }
// function key2(){
//     str.value = str.value + '2';
// }
// function key3(){
//     str.value = str.value + '3';
// }
// function key0(){
//     str.value = str.value + '0';
// }
// function keysub(){
//     str.value = str.value + '-';
// }
// function keyplus(){
//     str.value = str.value + '+';
// }
// function keydot() {
//     str.value = str.value + '.';
// }
// function result() {
//     console.log(str.value, typeof str.value);
//     try {
//         if (eval(str.value) === Infinity) {
//             str.value = 0;
//             error[1].removeAttribute('hidden');
//         }
//         else {
//             str.value = eval(str.value);
//         }
//     }
//     catch (e) {
//         str.value = 0;
//         error[0].removeAttribute('hidden');
//     }
//         // str.value = eval(str.value);
//         // console.log(typeof eval(str.value));
// }




