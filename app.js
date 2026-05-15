const TOPICS = [
  "Scrum Guide 2020", "Empiricism", "Scrum Values", "Product Owner Accountability", "Product Goal",
  "Product Backlog Management", "Stakeholder Management", "Nexus", "Product Owner Stances", "Misunderstood Stances",
  "Evidence-Based Management", "Current Value", "Unrealized Value", "Time-to-Market", "Ability to Innovate",
  "Outcome vs Output", "Experimentation", "Decision Making"
];

const APP_VERSION = {
  number: "1.0.1",
  date: "2026-05-15",
  time: "19:32 BRT"
};

const state = {
  questions: [],
  selectedQuestions: [],
  currentIndex: 0,
  answers: {},
  unsure: {},
  feedbackMode: "final",
  selectedTopics: [],
  questionCount: 40,
  finished: false
};

const $ = (id) => document.getElementById(id);

async function loadQuestions() {
  if (Array.isArray(window.QUESTION_BANK) && window.QUESTION_BANK.length) {
    state.questions = window.QUESTION_BANK;
    return state.questions;
  }
  const response = await fetch("questions.json", { cache: "no-store" });
  if (!response.ok) throw new Error("Não foi possível carregar questions.json.");
  state.questions = await response.json();
  return state.questions;
}

function initializeApp() {
  renderAppVersion();
  renderTopicSelector();
  loadAttemptHistory();
  attachEvents();
  updateQuestionBankCount();
  updateFilterWarning();
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js")
      .then((registration) => registration.update())
      .catch(() => {});
  }
}

function attachEvents() {
  $("startForm").addEventListener("submit", (event) => {
    event.preventDefault();
    startSimulation();
  });
  $("selectAllTopics").addEventListener("change", (event) => {
    document.querySelectorAll(".topic-check").forEach((input) => input.checked = event.target.checked);
    updateFilterWarning();
  });
  $("topicsContainer").addEventListener("change", () => {
    const checks = Array.from(document.querySelectorAll(".topic-check"));
    $("selectAllTopics").checked = checks.every((input) => input.checked);
    updateFilterWarning();
  });
  $("questionCount").addEventListener("change", updateFilterWarning);
  $("feedbackMode").addEventListener("change", updateFilterWarning);
  $("prevButton").addEventListener("click", () => moveQuestion(-1));
  $("nextButton").addEventListener("click", () => {
    if (state.currentIndex === state.selectedQuestions.length - 1) {
      finishExam();
    } else {
      moveQuestion(1);
    }
  });
  $("unsureButton").addEventListener("click", toggleUnsure);
  $("questionSelector").addEventListener("change", (event) => {
    const idx = Number(event.target.value);
    if (!Number.isNaN(idx)) {
      state.currentIndex = idx;
      renderQuestion();
    }
  });
  $("questionFilter").addEventListener("change", renderQuestionSelector);
  $("cancelFinishButton").addEventListener("click", () => $("finishDialog").close());
  $("confirmFinishButton").addEventListener("click", () => {
    $("finishDialog").close();
    finishExamConfirmed();
  });
  $("newAttemptButton").addEventListener("click", () => {
    setScreen("start");
    loadAttemptHistory();
  });
}

function updateQuestionBankCount() {
  $("questionBankCount").textContent = `${state.questions.length} questões`;
}

function renderTopicSelector() {
  const container = $("topicsContainer");
  container.innerHTML = TOPICS.map((topic) => `
    <label class="check-row">
      <input class="topic-check" type="checkbox" value="${escapeHtml(topic)}" checked />
      <span>${escapeHtml(topic)}</span>
    </label>
  `).join("");
}

function getSelectedTopics() {
  return Array.from(document.querySelectorAll(".topic-check:checked")).map((input) => input.value);
}

function updateFilterWarning() {
  if (!state.questions.length) return;
  const selectedTopics = getSelectedTopics();
  const desiredCount = Number($("questionCount").value);
  const available = filterQuestions(selectedTopics).length;
  const warning = $("filterWarning");
  const startButton = $("startButton");
  if (!selectedTopics.length) {
    warning.hidden = false;
    warning.textContent = "Selecione pelo menos um tema.";
    startButton.disabled = true;
    return;
  }
  if (available < desiredCount) {
    warning.hidden = false;
    warning.textContent = `Há apenas ${available} questões disponíveis para os filtros selecionados. Reduza a quantidade ou selecione mais temas.`;
    startButton.disabled = true;
  } else {
    warning.hidden = true;
    warning.textContent = "";
    startButton.disabled = false;
  }
}

function filterQuestions(selectedTopics) {
  if (!selectedTopics || !selectedTopics.length) return [];
  return state.questions.filter((question) => question.topics?.some((topic) => selectedTopics.includes(topic)));
}

function startSimulation() {
  state.selectedTopics = getSelectedTopics();
  state.questionCount = Number($("questionCount").value);
  state.feedbackMode = $("feedbackMode").value;
  const pool = filterQuestions(state.selectedTopics);
  if (pool.length < state.questionCount) {
    updateFilterWarning();
    return;
  }
  state.selectedQuestions = shuffleArray(pool).slice(0, state.questionCount).map((question) => ({
    ...question,
    options: shuffleArray(question.options || [])
  }));
  state.currentIndex = 0;
  state.answers = {};
  state.unsure = {};
  state.finished = false;
  $("questionFilter").value = "all";
  setScreen("exam");
  renderQuestion();
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuestion() {
  const question = state.selectedQuestions[state.currentIndex];
  if (!question) return;
  const userAnswers = state.answers[question.id] || [];
  const isImmediateAnswered = state.feedbackMode === "immediate" && userAnswers.length > 0;
  $("examTitle").textContent = `Questão ${state.currentIndex + 1}`;
  $("progressPill").textContent = `${state.currentIndex + 1}/${state.selectedQuestions.length}`;
  $("examModeLabel").textContent = state.feedbackMode === "immediate" ? "Feedback imediato" : "Revisão apenas ao final";
  $("prevButton").disabled = state.currentIndex === 0;
  $("nextButton").textContent = state.currentIndex === state.selectedQuestions.length - 1 ? "Finalizar simulado" : "Próxima questão";
  $("unsureButton").textContent = state.unsure[question.id] ? "Remover dúvida" : "Marcar como dúvida";
  $("unsureButton").classList.toggle("unsure-active", Boolean(state.unsure[question.id]));

  const inputType = question.type === "multiple" ? "checkbox" : "radio";
  const optionsHtml = question.options.map((option) => {
    const checked = userAnswers.includes(option.id) ? "checked" : "";
    const highlight = isImmediateAnswered ? optionHighlightClass(question, option.id, userAnswers) : "";
    return `
      <label class="option-row ${highlight}">
        <input type="${inputType}" name="answer-${escapeHtml(question.id)}" value="${escapeHtml(option.id)}" ${checked} />
        <span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span>
      </label>
    `;
  }).join("");

  const feedbackHtml = isImmediateAnswered ? renderFeedbackBox(question, userAnswers) : "";
  $("questionCard").innerHTML = `
    <div class="question-meta">
      <span class="tag">${question.type === "multiple" ? "Multiple answer" : "Single answer"}</span>
      ${(question.topics || []).map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`).join("")}
    </div>
    <div class="question-text">${escapeHtml(question.question)}</div>
    <div class="options">${optionsHtml}</div>
    ${feedbackHtml}
  `;

  $("questionCard").querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => saveAnswer(question.id));
  });
  renderQuestionSelector();
}

function saveAnswer(questionId) {
  const inputs = Array.from($("questionCard").querySelectorAll("input"));
  const selected = inputs.filter((input) => input.checked).map((input) => input.value);
  state.answers[questionId] = selected;
  updateQuestionStatus(questionId);
  renderQuestion();
}

function toggleUnsure() {
  const question = state.selectedQuestions[state.currentIndex];
  state.unsure[question.id] = !state.unsure[question.id];
  updateQuestionStatus(question.id);
  renderQuestion();
}

function updateQuestionStatus(questionId) {
  return getQuestionStatus(questionId);
}

function getQuestionStatus(questionId) {
  if (state.unsure[questionId]) return "unsure";
  if ((state.answers[questionId] || []).length > 0) return "answered";
  return "unanswered";
}

function renderQuestionSelector() {
  const filter = $("questionFilter").value;
  const selector = $("questionSelector");
  const options = state.selectedQuestions
    .map((question, index) => ({ question, index, status: getQuestionStatus(question.id) }))
    .filter((item) => filter === "all" || item.status === filter);
  selector.innerHTML = options.map((item) => {
    const statusLabel = statusPt(item.status);
    return `<option value="${item.index}" ${item.index === state.currentIndex ? "selected" : ""}>Questão ${item.index + 1} - ${statusLabel}</option>`;
  }).join("");
  if (!options.some((item) => item.index === state.currentIndex) && options.length > 0) {
    selector.value = String(options[0].index);
  }
  if (!options.length) {
    selector.innerHTML = `<option>Sem questões neste filtro</option>`;
  }
}

function moveQuestion(delta) {
  const next = state.currentIndex + delta;
  if (next >= 0 && next < state.selectedQuestions.length) {
    state.currentIndex = next;
    renderQuestion();
  }
}

function finishExam() {
  const unanswered = state.selectedQuestions.filter((question) => getQuestionStatus(question.id) === "unanswered").length;
  const unsure = state.selectedQuestions.filter((question) => state.unsure[question.id]).length;
  $("finishDialogText").textContent = `Você está prestes a finalizar o simulado. Existem ${unanswered} questões não respondidas e ${unsure} questões marcadas como dúvida. Deseja confirmar o encerramento?`;
  const dialog = $("finishDialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else if (confirm($("finishDialogText").textContent)) finishExamConfirmed();
}

function finishExamConfirmed() {
  state.finished = true;
  const result = calculateScore();
  saveAttemptHistory(result);
  renderResults(result);
  setScreen("result");
}

function calculateScore() {
  let correct = 0;
  let unanswered = 0;
  state.selectedQuestions.forEach((question) => {
    const selected = state.answers[question.id] || [];
    if (!selected.length) {
      unanswered += 1;
      return;
    }
    if (isCorrect(question, selected)) correct += 1;
  });
  const total = state.selectedQuestions.length;
  const incorrect = total - correct;
  const percentage = total ? Math.round((correct / total) * 100) : 0;
  return { correct, incorrect, unanswered, total, percentage, passed: percentage >= 85 };
}

function isCorrect(question, selected) {
  const selectedSorted = [...selected].sort();
  const correctSorted = [...question.correctAnswers].sort();
  return selectedSorted.length === correctSorted.length && selectedSorted.every((value, idx) => value === correctSorted[idx]);
}

function renderResults(result) {
  const statusText = result.passed ? "Aprovado" : "Não aprovado";
  const message = result.passed
    ? "Parabéns. Você atingiu o limite de aprovação da PSPO II."
    : "Você ficou abaixo do limite de aprovação da PSPO II. Revise seus pontos fracos e tente novamente.";
  $("resultSummary").innerHTML = `
    <div class="score-card ${result.passed ? "pass" : "fail"}">
      <div>Status: <strong>${statusText}</strong></div>
      <div class="score-number">${result.percentage}%</div>
      <div>${message}</div>
    </div>
    <div class="stats-grid">
      <div class="stat"><span>Corretas</span><strong>${result.correct}</strong></div>
      <div class="stat"><span>Incorretas</span><strong>${result.incorrect}</strong></div>
      <div class="stat"><span>Não respondidas</span><strong>${result.unanswered}</strong></div>
      <div class="stat"><span>Limite</span><strong>85%</strong></div>
    </div>
  `;
  renderReview();
}

function renderReview() {
  const review = state.selectedQuestions.map((question, index) => {
    const selected = state.answers[question.id] || [];
    const optionList = question.options.map((option) => {
      const klass = optionHighlightClass(question, option.id, selected);
      return `<div class="option-row ${klass}"><span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span></div>`;
    }).join("");
    const userAnswer = selected.length ? selected.join(", ") : "Não respondida";
    return `
      <article class="review-item">
        <h3>Questão ${index + 1}</h3>
        <div class="question-text">${escapeHtml(question.question)}</div>
        <div class="options">${optionList}</div>
        <div class="review-label">Sua resposta</div>
        <div>${escapeHtml(userAnswer)}</div>
        <div class="review-label">Resposta correta</div>
        <div>${escapeHtml(question.correctAnswers.join(", "))}</div>
        <div class="review-label">Comentário</div>
        <div>${escapeHtml(question.explanation)}</div>
      </article>
    `;
  }).join("");
  $("reviewContainer").innerHTML = review;
}

function optionHighlightClass(question, optionId, selected) {
  const isSelected = selected.includes(optionId);
  const isRight = question.correctAnswers.includes(optionId);
  if (isSelected && isRight) return "correct";
  if (isSelected && !isRight) return "incorrect";
  if (!isSelected && isRight) return "correct";
  return "";
}

function saveAttemptHistory(result) {
  const history = getHistory();
  const attempt = {
    dateTime: new Date().toISOString(),
    score: result.percentage,
    topics: state.selectedTopics,
    questionCount: state.questionCount,
    feedbackMode: state.feedbackMode,
    appVersion: APP_VERSION.number
  };
  history.unshift(attempt);
  localStorage.setItem("pspoAttemptHistory", JSON.stringify(history.slice(0, 10)));
  localStorage.setItem("pspoLastAttempt", JSON.stringify(attempt));
}

function renderAppVersion() {
  const versionText = `Versão ${APP_VERSION.number} · ${APP_VERSION.date} · ${APP_VERSION.time}`;
  const headerVersion = $("appVersionLine");
  const footerVersion = $("appVersionFooter");
  if (headerVersion) headerVersion.textContent = versionText;
  if (footerVersion) footerVersion.textContent = `${versionText} · Banco: ${state.questions.length} questões`;
}

function loadAttemptHistory() {
  const history = getHistory();
  const container = $("historyContainer");
  if (!history.length) {
    container.className = "history-empty";
    container.textContent = "Nenhuma tentativa registrada ainda.";
    return;
  }
  container.className = "";
  container.innerHTML = `
    <table class="history-table">
      <thead><tr><th>Data</th><th>Nota</th><th>Temas</th><th>Questões</th><th>Modo</th><th>Versão</th></tr></thead>
      <tbody>
        ${history.map((item) => `
          <tr>
            <td>${formatDate(item.dateTime)}</td>
            <td>${item.score}%</td>
            <td>${escapeHtml((item.topics || []).join(", "))}</td>
            <td>${item.questionCount}</td>
            <td>${item.feedbackMode === "immediate" ? "Feedback imediato" : "Revisão ao final"}</td>
            <td>${escapeHtml(item.appVersion || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem("pspoAttemptHistory")) || []; }
  catch { return []; }
}

function setScreen(name) {
  $("startScreen").classList.toggle("active", name === "start");
  $("historyScreen").classList.toggle("active", name === "start");
  $("examScreen").classList.toggle("active", name === "exam");
  $("resultScreen").classList.toggle("active", name === "result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function statusPt(status) {
  return { unanswered: "Não respondida", answered: "Respondida", unsure: "Em dúvida" }[status] || status;
}

function formatDate(iso) {
  try { return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(iso)); }
  catch { return iso; }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[char]));
}

loadQuestions()
  .then(initializeApp)
  .catch((error) => {
    $("questionBankCount").textContent = "Erro";
    $("filterWarning").hidden = false;
    $("filterWarning").textContent = error.message || "Erro ao carregar as questões.";
  });
