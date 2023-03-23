const quizCard = document.querySelector('[data-js="quizcard"]');
const answer1 = document.querySelector('[data-js="answer1"]');
const quizCard2 = document.querySelector('[data-js="quizcard2"]');
const answerButton = document.querySelector('[data-js="answerbutton"]');
const hideButton = document.querySelector('[data-js="hidebutton"]');

/*  ---- 1. Versuch vom 20.03.23:
button.addEventListener("click", () => {
    quizcard.classList.add("container1-answer");
}); */

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



/* -----Versuch über display: none:

answerButton.addEventListener("click", () => {
function myToggle() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }    
})




  // nötig?--> var x = document.getElementById("myDIV");


*/





