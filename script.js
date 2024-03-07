let button = document.querySelector(".button");
let result = document.querySelector(".result");
button.onclick = function() {
    let answer1 = Number(document.querySelector(".answer1").value);
    let answer2 = document.querySelector(".answer2").value;


    if (answer1 < 30 && answer2 === "baggy jeans") {
        result.innerHTML = "nerd girly";

    } else if (answer1 >= 30 && answer2 === "curvy jeans") {
        result.innerHTML = "Baddie";
    } else if (answer1 >= 30 && answer2 === "baggy jeans") {
        result.innerHTML = "heavy makeup";

    } else if (answer1 < 30 && answer2 === "curvy jeans") {
        result.innerHTML = "baddie";




    } else {
        result.innerHTML = "Re-enter inputs";
    }
};