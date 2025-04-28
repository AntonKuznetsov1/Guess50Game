let number = 0;
let guessed = 0;
let answer = "";
let tries = 0;
number = Math.floor(Math.random() * 50) + 1;
answer = document.getElementById("output");
console.log(number);

function guess() {
    guessed = document.getElementById("input").value;
    guessed = Number(guessed)
    tries = tries + 1;
    if (number === guessed) {
        answer.innerHTML ="Good job, you're right! You took " + tries + " tries!";
    } else if (number > guessed ) {
        answer.innerHTML ="Try higher! You took " + tries + " tries!";
    } else if (number < guessed ) {
        answer.innerHTML ="Try lower! You took " + tries + " tries!";
    }

};