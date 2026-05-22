const checklistItems = [
  "What is the input?",
  "What is the output?",
  "Do I need a loop?",
  "Do I need a helper variable?",
  "What is the simplest approach?",
  "What edge cases should I consider?",
  "How would I explain this out loud?"
];

const state = {
  selectedId: 1,
  visibleHints: 0
};

const elements = {
  exerciseList: document.querySelector("#exerciseList"),
  exerciseMeta: document.querySelector("#exerciseMeta"),
  exerciseTitle: document.querySelector("#exerciseTitle"),
  exercisePrompt: document.querySelector("#exercisePrompt"),
  exampleInput: document.querySelector("#exampleInput"),
  expectedOutput: document.querySelector("#expectedOutput"),
  checklistForm: document.querySelector("#checklistForm"),
  codeArea: document.querySelector("#codeArea"),
  hintList: document.querySelector("#hintList"),
  hintButton: document.querySelector("#hintButton"),
  followUpList: document.querySelector("#followUpList"),
  edgeCaseList: document.querySelector("#edgeCaseList"),
  oralExplanation: document.querySelector("#oralExplanation"),
  suggestedSolution: document.querySelector("#suggestedSolution"),
  feedbackList: document.querySelector("#feedbackList"),
  employerPerspective: document.querySelector("#employerPerspective"),
  softSkillsGrid: document.querySelector("#softSkillsGrid"),
  resetButton: document.querySelector("#resetButton")
};

function getSelectedExercise() {
  return window.QUIET_BUG_EXERCISES.find((exercise) => exercise.id === state.selectedId);
}

function renderExerciseList() {
  elements.exerciseList.innerHTML = "";

  window.QUIET_BUG_EXERCISES.forEach((exercise) => {
    const button = document.createElement("button");
    const title = document.createElement("strong");
    const pattern = document.createElement("span");

    button.className = "exercise-button";
    button.type = "button";
    button.dataset.exerciseId = exercise.id;
    button.classList.toggle("active", exercise.id === state.selectedId);

    title.textContent = `${exercise.id}. ${exercise.title}`;
    pattern.textContent = exercise.pattern;

    button.append(title, pattern);

    button.addEventListener("click", () => {
      state.selectedId = exercise.id;
      state.visibleHints = 0;
      render();
    });

    elements.exerciseList.appendChild(button);
  });
}

function renderChecklist() {
  elements.checklistForm.innerHTML = "";

  checklistItems.forEach((item, index) => {
    const id = `check-${index}`;
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");

    label.className = "check-row";
    label.setAttribute("for", id);
    checkbox.id = id;
    checkbox.type = "checkbox";
    text.textContent = item;

    label.append(checkbox, text);
    elements.checklistForm.appendChild(label);
  });
}

function renderHints(exercise) {
  elements.hintList.innerHTML = "";

  if (state.visibleHints === 0) {
    const empty = document.createElement("p");
    empty.className = "hint-item";
    empty.textContent = "Use hints one at a time when you feel blocked.";
    elements.hintList.appendChild(empty);
  }

  exercise.hints.slice(0, state.visibleHints).forEach((hint, index) => {
    const item = document.createElement("div");
    item.className = "hint-item";
    item.textContent = `Hint ${index + 1}: ${hint}`;
    elements.hintList.appendChild(item);
  });

  const allHintsVisible = state.visibleHints >= exercise.hints.length;
  elements.hintButton.disabled = allHintsVisible;
  elements.hintButton.textContent = allHintsVisible ? "All hints shown" : "I'm stuck";
}

function renderFeedback(exercise) {
  elements.feedbackList.innerHTML = "";

  exercise.feedback.forEach((feedbackItem) => {
    const item = document.createElement("li");
    item.textContent = feedbackItem;
    elements.feedbackList.appendChild(item);
  });
}

function renderList(listElement, items) {
  listElement.innerHTML = "";

  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    listElement.appendChild(item);
  });
}

function renderSoftSkills() {
  elements.softSkillsGrid.innerHTML = "";

  window.QUIET_BUG_SOFT_SKILLS.forEach((skill) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const question = document.createElement("p");
    const questionLabel = document.createElement("strong");
    const guidance = document.createElement("p");
    const answerFrame = document.createElement("p");

    card.className = "soft-skill-card";
    answerFrame.className = "answer-frame";

    title.textContent = skill.title;
    questionLabel.textContent = "Question: ";
    question.append(questionLabel, skill.question);
    guidance.textContent = skill.guidance;
    answerFrame.textContent = skill.answerFrame;

    card.append(title, question, guidance, answerFrame);
    elements.softSkillsGrid.appendChild(card);
  });
}

function render() {
  const exercise = getSelectedExercise();

  renderExerciseList();
  renderChecklist();

  elements.exerciseMeta.textContent = `${exercise.language} / ${exercise.level} / ${exercise.pattern}`;
  elements.exerciseTitle.textContent = exercise.title;
  elements.exercisePrompt.textContent = exercise.prompt;
  elements.exampleInput.textContent = exercise.exampleInput;
  elements.expectedOutput.textContent = exercise.expectedOutput;
  elements.codeArea.value = exercise.starterCode;
  elements.oralExplanation.textContent = exercise.oralExplanation;
  elements.suggestedSolution.textContent = exercise.solution;
  elements.employerPerspective.textContent = exercise.employerPerspective;

  renderHints(exercise);
  renderList(elements.followUpList, exercise.followUps);
  renderList(elements.edgeCaseList, exercise.edgeCases);
  renderFeedback(exercise);
  renderSoftSkills();
}

elements.hintButton.addEventListener("click", () => {
  const exercise = getSelectedExercise();
  state.visibleHints = Math.min(state.visibleHints + 1, exercise.hints.length);
  renderHints(exercise);
});

elements.resetButton.addEventListener("click", () => {
  state.visibleHints = 0;
  render();
});

render();
