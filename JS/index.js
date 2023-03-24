const quizCard = document.querySelector('[data-js="quizcard"]');
const answer1 = document.querySelector('[data-js="answer1"]');
const quizCard2 = document.querySelector('[data-js="quizcard2"]');
const answerButton = document.querySelector('[data-js="answerbutton"]');
const hideButton = document.querySelector('[data-js="hidebutton"]');



// ----- 2. Versuch funktioniert über: quizCard.innerHTML ="";
/*
answerButton.addEventListener("click", () => {
    quizCard.innerHTML ="";
    quizCard.innerHTML =`
    <article><p class="questions">What property flips the axes in flexbox?</p></article>
    <button  class="answer-button" data-js="answerbutton">Hide Answer</button>
    <p class="answer1">"flex-box"</p>
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

*/

// Versuch toggle zu iplementieren 

/* answerButton.addEventListener("click", () => {
    quizCard.classList.add("hidden");
    quizCard2.classList.add("hidden");
    answer1.classList.remove("hidden");
}); */

answerButton.addEventListener("click", () => {
    answerButton.classList.add("hidden");
    hideButton.classList.remove("hidden");
    answer1.classList.remove("hidden");
});

hideButton.addEventListener("click", () => {
    answerButton.classList.remove("hidden");
    hideButton.classList.add("hidden");
    answer1.classList.add("hidden");
});

/* Formular:
const submitButton = document.querySelector('[data-js="submitbutton"]');
const yourQuestion = document.querySelector('[data-js="yourquestion"]');
const yourAnswer = document.querySelector('[data-js="youranswer"]');
const yourTag = document.querySelector('[data-js="yourtag"]');
const yourForm = document.querySelector('[data-js="form"]');
const yourField = document.querySelector('[data-js="field"]');
const yourList = document.querySelector('[data-js="list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.classList.add("container1");
  newCard.innerHTML = `I am a new question.`;
  yourList.append(newCard);
  form.reset(); 
  yourQuestion.focus();
});





/* const newCard = document.createElement(""); 
newToast.classList.add
newToast.innerHTML = "I am a toast message.";
toastContainer.append(newToast);
}); */ 








