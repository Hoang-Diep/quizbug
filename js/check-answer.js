// REMOVE DISABLED FROM CHECK ANSWER BUTTON
function selected() {
    document.querySelector(".qp__select-form__btn button").removeAttribute("disabled");
}

// CHECK ANSWER & SHOW RESULT FUNCTION
function checkAnswer() {
    var opt = document.getElementsByName("opt");

    var falseAnswer = document.querySelector(".qp__select-form--result #false"),
        trueAnswer  = document.querySelector(".qp__select-form--result #true"),
        congrate    = document.querySelector(".qp--congratulate"),
        congrateBox = document.querySelector(".qp--congratulate__container"),
        closedBtn   = document.querySelector("button#closed");

    // CHECK USER'S ANSWER
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].checked) {

            if (opt[i].value == answer) {
                // IF USER SELECTED ANSWER BE RIGHT
                trueAnswer.style.display = "block";

                // SHOW THE CONGRATULATE BLOCK
                setTimeout(() => congratulate(), 2000);

                function congratulate() {
                    trueAnswer.style.display = "none";
                    congrate.style.transform = "scale(1)";
                    congrateBox.style.top = "50%";
                }
                
            } else {
                // IF USER SELECTED ANSWER BE WRONG
                falseAnswer.style.display = "block";

                // AUTOMATIC CLOSE FUNCTION
                setTimeout(() => falseAnswer.style.display = "none", 2000);
            }
        }
	}
    
    // CLOSE THE CONGRATULATE BLOCK
    closedBtn.onclick = function() {
        congrateBox.style.top = "-100%";
        setTimeout(() => congrate.style.transform = "scale(0)", 200);
    }
}
