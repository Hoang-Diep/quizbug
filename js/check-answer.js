// REMOVE DISABLED FROM CHECK ANSWER BUTTON
function selected() {
    document.querySelector(".qp__select-form__btn button").removeAttribute("disabled");
}

// CHECK ANSWER & SHOW RESULT FUNCTION
function checkAnswer() {
    var opt = document.getElementsByName("opt");

    var trueAnswer  = document.querySelector(".qp__result--true"),
        canvas      = document.querySelector("canvas#my-canvas"),
        blur        = document.querySelector(".qp__result__blur"),
        falseAnswer = document.querySelector(".qp__result--false");

    // CHECK USER'S ANSWER
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].checked) {

            if (opt[i].value == answer) {
                // IF USER SELECTED ANSWER BE RIGHT
                canvas.style.top = "0";
                trueAnswer.classList.add("active");
                blur.style.display = "block";
                
            } else {
                // IF USER SELECTED ANSWER BE WRONG
                falseAnswer.style.left = "-5px";

                // AUTOMATIC CLOSE FUNCTION
                setTimeout(() => falseAnswer.style.left = "-100%", 3000)
            }
        }
	}

    // blur.onclick = function() {
    //     canvas.classList.remove("active");
    //     trueAnswer.classList.remove("active");

    //     blur.style.display = "none";
    // }
}