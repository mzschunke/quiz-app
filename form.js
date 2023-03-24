const submitButton = document.querySelector('[data-js="submitbutton"]');
const yourQuestion = document.querySelector('[data-js="yourquestion"]');
const yourAnswer = document.querySelector('[data-js="youranswer"]');
const yourTag = document.querySelector('[data-js="yourtag"]');
const yourForm = document.querySelector('[data-js="form"]');
const yourField = document.querySelector('[data-js="field"]');
const yourList = document.querySelector('[data-js="list"]');

yourForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.classList.add("container1");
  newCard.innerHTML = `I am a new question.`;
  yourList.append(newCard);
  form.reset(); 
  yourQuestion.focus();
});

