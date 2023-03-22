const quizCard = document.querySelector('[data-js="quizcard"]');
const answerButton = document.querySelector('[data-js="answerbutton"]');

/*  ---- 1. Versuch vom 20.03.23:
button.addEventListener("click", () => {
    quizcard.classList.add("container1-answer");
}); */

// ----- 2. Versuch, nun über: quizCard.innerHTML ="";

answerButton.addEventListener("click", () => {
    quizCard.innerHTML ="";
    quizCard.innerHTML =`
    <article><p class="questions">What property flips the axes in flexbox?</p></article>
    <p class="answer1">flex-box</p>
    <ul class="hash-buttons">
            <li><button class="tags">#html</button></li>
            <li><button class="tags">#flexbox</button></li>
            <li><button class="tags">#css</button></li>
    </ul>
    <button class="bookmark-button"><img src="img/bookmark-svgrepo-com.svg" alt="bookmark this" class="quiz-bookmark"></button>
    `
    quizCard.style.backgroundColor = "BlanchedAlmond";
    quizCard.style.border =  "thick inset #A52A2A";

});











