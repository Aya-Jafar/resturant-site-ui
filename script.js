

function showBox() {
    var name = document.getElementById("name");
    var gmail = document.getElementById("gmail");
    var msg = document.getElementById("msg");
    if (name.value != "" && gmail.value != "" && validateEmail(gmail.value) == true && msg.value != "") {
        alert("You have submited your message");
    }
}

function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}

function cardnumber(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;
    if (inputtxt.value.match(cardno)) {
        return true;
    }
    else {
        return false;
    }
}

function checkValidation() {
    var name = document.getElementById("ownerName");
    var cvv = document.getElementById("cvv");
    var cardNum = document.getElementById("cardNum");
    if (name != "" && cvv != "" && cardnumber(cardNum) == true) {
        alert("ORDER IS SENT SUCSSESFULY");
    }
}






// const sliderContainer = document.querySelector('.container');//return 1st div of the left-part
// const slideRight = document.querySelector('.right-part');//return the 1st img
// const slideLeft = document.querySelector('.left-part');//return the background colors
// const upButton = document.querySelector('.up-arrow');
// const downButton = document.querySelector('.down-arrow');
// const sliderLength = right.querySelectorAll('div').length;//will return the number of div elements in the right-part class

// //console.log(sliderLength);
// let activeSlideIdx = 0;
// slideLeft.style.top = '-${(sliderLength -1)*100}vh';

// upButton.addEventListener('click', () => changeSlide('up'));
// downButton.addEventListener('click', () => changeSlide('down'));

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight;
//     if (direction == 'up') {
//         activeSlideIdx++;
//         if (activeSlideIdx > sliderLength - 1) {
//             activeSlideIdx = 0;
//         }
//     }
//     slideRight.style.transform = 'translateY(-${activeSlideIdx*sliderHeight}px';
// }


