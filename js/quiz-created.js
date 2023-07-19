const searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get("id");

// CREATE VALIABLE OF QUIZ VALUES 
var code = quizData[id].code,
    opt1 = quizData[id].opt1,
    opt2 = quizData[id].opt2,
    opt3 = quizData[id].opt3,
    opt4 = quizData[id].opt4,
    answer = quizData[id].answer;

// CREATE QUIZ PAGE FORM
var quizForm = `
    <pre class="qp__code">
        <code>${code}</code>
    </pre>

    <div class="qp__select-form">
        <div class="qp__select-form__option">
            <input id="opt1" type="radio" name="opt" value="${opt1}" onclick="selected()">
            <label for="opt1">${opt1}</label>
        </div>
        <div class="qp__select-form__option">
            <input id="opt2" type="radio" name="opt" value="${opt2}" onclick="selected()">
            <label for="opt2">${opt2}</label>
        </div>
        <div class="qp__select-form__option">
            <input id="opt3" type="radio" name="opt" value="${opt3}" onclick="selected()">
            <label for="opt3">${opt3}</label>
        </div>
        <div class="qp__select-form__option">
            <input id="opt4" type="radio" name="opt" value="${opt4}" onclick="selected()">
            <label for="opt4">${opt4}</label>
        </div>

        <div class="qp__select-form__btn">
            <button onclick="checkAnswer()" disabled>Check your answer!</button>
        </div>

        <div class="qp__select-form--result">
            <span id="false">
            </span>
            <span id="true">
            </span>
        </div>
    </div>
`;

document.querySelector(".qp__content__container").innerHTML = quizForm;