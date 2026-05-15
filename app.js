const TOPICS = [
  "Scrum Guide 2020", "Empiricism", "Scrum Values", "Product Owner Accountability", "Product Goal",
  "Product Backlog Management", "Stakeholder Management", "Nexus", "Product Owner Stances", "Misunderstood Stances",
  "Evidence-Based Management", "Current Value", "Unrealized Value", "Time-to-Market", "Ability to Innovate",
  "Outcome vs Output", "Experimentation", "Decision Making"
];

const APP_VERSION = {
  number: "1.1.0",
  date: "2026-05-15",
  time: "19:48 BRT"
};

const STORAGE_KEYS = {
  settings: "pspoSettings",
  history: "pspoAttemptHistory",
  lastAttempt: "pspoLastAttempt",
  currentExam: "pspoCurrentExam"
};

const I18N = {
  "pt-BR": {
    htmlLang: "pt-BR",
    independentSimulator: "Simulador independente",
    versionLoading: "Versão carregando...",
    interfaceLanguage: "Idioma",
    visualMode: "Tema",
    lightMode: "Claro",
    darkMode: "Escuro",
    configureExam: "Configurar simulado",
    languageNotice: "As questões, alternativas, comentários e temas são apresentados em inglês para aproximar sua experiência do ambiente real do exame PSPO II e reforçar o vocabulário técnico usado na certificação.",
    selectTopics: "Selecionar temas",
    selectAll: "Selecionar todos",
    questionCount: "Quantidade de questões",
    feedbackMode: "Modo de feedback",
    immediateFeedback: "Feedback imediato",
    finalReviewOnly: "Revisão apenas ao final",
    startSimulation: "Iniciar simulado",
    savedExam: "Simulado salvo",
    resumeSimulation: "Retomar simulado",
    discardSavedExam: "Descartar salvo",
    savedAt: "Salvo em",
    elapsedTime: "Tempo",
    answered: "Respondida",
    answeredPlural: "Respondidas",
    unanswered: "Não respondida",
    unansweredPlural: "Não respondidas",
    unsure: "Em dúvida",
    unsurePlural: "Em dúvida",
    recentHistory: "Histórico recente",
    noHistory: "Nenhuma tentativa registrada ainda.",
    simulation: "Simulado",
    question: "Questão",
    filter: "Filtro",
    allQuestions: "Todas",
    goTo: "Ir para",
    finishSimulation: "Finalizar simulado",
    saveAndExit: "Salvar e sair",
    savedAndExited: "Estado salvo. Você pode retomar depois pela tela inicial.",
    previousQuestion: "Questão anterior",
    markUnsure: "Marcar como dúvida",
    removeUnsure: "Remover dúvida",
    nextQuestion: "Próxima questão",
    finalResult: "Resultado final",
    newSimulation: "Novo simulado",
    confirmFinish: "Confirmar encerramento",
    cancel: "Cancelar",
    confirmFinishButton: "Confirmar encerramento",
    correct: "Correta",
    incorrect: "Incorreta",
    correctAnswer: "Resposta correta",
    explanation: "Comentário",
    status: "Status",
    passed: "Aprovado",
    notPassed: "Não aprovado",
    passMessage: "Parabéns. Você atingiu o limite de aprovação da PSPO II.",
    failMessage: "Você ficou abaixo do limite de aprovação da PSPO II. Revise seus pontos fracos e tente novamente.",
    correctPlural: "Corretas",
    incorrectPlural: "Incorretas",
    threshold: "Limite",
    duration: "Duração",
    yourAnswer: "Sua resposta",
    noQuestionsFilter: "Sem questões neste filtro",
    selectAtLeastOneTopic: "Selecione pelo menos um tema.",
    notEnoughQuestions: "Há apenas {available} questões disponíveis para os filtros selecionados. Reduza a quantidade ou selecione mais temas.",
    confirmFinishText: "Você está prestes a finalizar o simulado. Existem {unanswered} questões não respondidas e {unsure} questões marcadas como dúvida. Deseja confirmar o encerramento?",
    questionBankCount: "{count} questões",
    versionText: "Versão {number} · {date} · {time}",
    versionFooter: "Versão {number} · {date} · {time} · Banco: {count} questões",
    date: "Data",
    score: "Nota",
    topics: "Temas",
    questions: "Questões",
    mode: "Modo",
    appVersion: "Versão",
    loadingError: "Erro ao carregar as questões.",
    cannotLoadQuestions: "Não foi possível carregar questions.json."
  },
  en: {
    htmlLang: "en",
    independentSimulator: "Independent simulator",
    versionLoading: "Loading version...",
    interfaceLanguage: "Language",
    visualMode: "Theme",
    lightMode: "Light",
    darkMode: "Dark",
    configureExam: "Configure simulation",
    languageNotice: "Questions, answer options, explanations, and topics are shown in English to approximate the real PSPO II exam environment and reinforce certification vocabulary.",
    selectTopics: "Select topics",
    selectAll: "Select all",
    questionCount: "Number of questions",
    feedbackMode: "Feedback mode",
    immediateFeedback: "Immediate feedback",
    finalReviewOnly: "Final review only",
    startSimulation: "Start simulation",
    savedExam: "Saved simulation",
    resumeSimulation: "Resume simulation",
    discardSavedExam: "Discard saved simulation",
    savedAt: "Saved at",
    elapsedTime: "Time",
    answered: "Answered",
    answeredPlural: "Answered",
    unanswered: "Unanswered",
    unansweredPlural: "Unanswered",
    unsure: "Unsure",
    unsurePlural: "Unsure",
    recentHistory: "Recent history",
    noHistory: "No attempts recorded yet.",
    simulation: "Simulation",
    question: "Question",
    filter: "Filter",
    allQuestions: "All",
    goTo: "Go to",
    finishSimulation: "Finish simulation",
    saveAndExit: "Save and exit",
    savedAndExited: "State saved. You can resume later from the start screen.",
    previousQuestion: "Previous question",
    markUnsure: "Mark as unsure",
    removeUnsure: "Remove unsure mark",
    nextQuestion: "Next question",
    finalResult: "Final result",
    newSimulation: "New simulation",
    confirmFinish: "Confirm finish",
    cancel: "Cancel",
    confirmFinishButton: "Confirm finish",
    correct: "Correct",
    incorrect: "Incorrect",
    correctAnswer: "Correct answer",
    explanation: "Explanation",
    status: "Status",
    passed: "Passed",
    notPassed: "Not passed",
    passMessage: "Congratulations. You reached the PSPO II passing threshold.",
    failMessage: "You are below the PSPO II passing threshold. Review your weak areas and try again.",
    correctPlural: "Correct",
    incorrectPlural: "Incorrect",
    threshold: "Threshold",
    duration: "Duration",
    yourAnswer: "Your answer",
    noQuestionsFilter: "No questions in this filter",
    selectAtLeastOneTopic: "Select at least one topic.",
    notEnoughQuestions: "There are only {available} questions available for the selected filters. Reduce the amount or select more topics.",
    confirmFinishText: "You are about to finish the simulation. There are {unanswered} unanswered questions and {unsure} questions marked as unsure. Do you want to confirm?",
    questionBankCount: "{count} questions",
    versionText: "Version {number} · {date} · {time}",
    versionFooter: "Version {number} · {date} · {time} · Bank: {count} questions",
    date: "Date",
    score: "Score",
    topics: "Topics",
    questions: "Questions",
    mode: "Mode",
    appVersion: "Version",
    loadingError: "Error loading questions.",
    cannotLoadQuestions: "Could not load questions.json."
  }
};

const settings = loadSettings();

const state = {
  questions: [],
  selectedQuestions: [],
  currentIndex: 0,
  answers: {},
  unsure: {},
  feedbackMode: "final",
  selectedTopics: [],
  questionCount: 40,
  finished: false,
  elapsedSeconds: 0,
  timerId: null,
  currentExamId: null,
  lastSavedAt: null
};

const $ = (id) => document.getElementById(id);

function t(key, vars = {}) {
  const dict = I18N[settings.lang] || I18N["pt-BR"];
  let value = dict[key] || I18N["pt-BR"][key] || key;
  Object.entries(vars).forEach(([k, v]) => {
    value = value.replaceAll(`{{${k}}}`, String(v)).replaceAll(`{${k}}`, String(v));
  });
  return value;
}

function loadSettings() {
  const fallbackTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings)) || {};
    return { lang: parsed.lang || "pt-BR", theme: parsed.theme || fallbackTheme };
  } catch {
    return { lang: "pt-BR", theme: fallbackTheme };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

function applyTheme() {
  document.documentElement.dataset.theme = settings.theme === "dark" ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", settings.theme === "dark" ? "#020617" : "#172554");
}

function applyLanguage() {
  document.documentElement.lang = t("htmlLang");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
  $("languageToggle").value = settings.lang;
  $("themeToggle").value = settings.theme;
  renderAppVersion();
  updateQuestionBankCount();
  updateFilterWarning();
  renderResumeCard();
  loadAttemptHistory();
  if ($("examScreen").classList.contains("active")) renderQuestion();
}

async function loadQuestions() {
  if (Array.isArray(window.QUESTION_BANK) && window.QUESTION_BANK.length) {
    state.questions = window.QUESTION_BANK;
    return state.questions;
  }
  const response = await fetch("questions.json", { cache: "no-store" });
  if (!response.ok) throw new Error(t("cannotLoadQuestions"));
  state.questions = await response.json();
  return state.questions;
}

function initializeApp() {
  applyTheme();
  renderTopicSelector();
  attachEvents();
  applyLanguage();
  updateQuestionBankCount();
  updateFilterWarning();
  renderResumeCard();
  loadAttemptHistory();
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js")
      .then((registration) => registration.update())
      .catch(() => {});
  }
}

function attachEvents() {
  $("languageToggle").addEventListener("change", (event) => {
    settings.lang = event.target.value;
    saveSettings();
    applyLanguage();
  });

  $("themeToggle").addEventListener("change", (event) => {
    settings.theme = event.target.value;
    saveSettings();
    applyTheme();
  });

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
    if (state.currentIndex === state.selectedQuestions.length - 1) finishExam();
    else moveQuestion(1);
  });
  $("finishNowButton").addEventListener("click", finishExam);
  $("saveExitButton").addEventListener("click", saveAndExit);
  $("unsureButton").addEventListener("click", toggleUnsure);
  $("questionSelector").addEventListener("change", (event) => {
    const idx = Number(event.target.value);
    if (!Number.isNaN(idx)) {
      state.currentIndex = idx;
      saveCurrentExam();
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
    clearCurrentExam();
    setScreen("start");
    renderResumeCard();
    loadAttemptHistory();
  });

  window.addEventListener("beforeunload", () => saveCurrentExam());
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveCurrentExam();
  });
}

function updateQuestionBankCount() {
  if ($("questionBankCount")) $("questionBankCount").textContent = t("questionBankCount", { count: state.questions.length });
  renderAppVersion();
}

function renderAppVersion() {
  const versionText = t("versionText", APP_VERSION);
  const footerText = t("versionFooter", { ...APP_VERSION, count: state.questions.length });
  const headerVersion = $("appVersionLine");
  const footerVersion = $("appVersionFooter");
  if (headerVersion) headerVersion.textContent = versionText;
  if (footerVersion) footerVersion.textContent = footerText;
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
  if (!state.questions.length || !$("filterWarning")) return;
  const selectedTopics = getSelectedTopics();
  const desiredCount = Number($("questionCount").value);
  const available = filterQuestions(selectedTopics).length;
  const warning = $("filterWarning");
  const startButton = $("startButton");
  if (!selectedTopics.length) {
    warning.hidden = false;
    warning.textContent = t("selectAtLeastOneTopic");
    startButton.disabled = true;
    return;
  }
  if (available < desiredCount) {
    warning.hidden = false;
    warning.textContent = t("notEnoughQuestions", { available });
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
  state.elapsedSeconds = 0;
  state.currentExamId = `exam-${Date.now()}`;
  state.lastSavedAt = null;
  $("questionFilter").value = "all";
  setScreen("exam");
  startTimer();
  saveCurrentExam();
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
  $("examTitle").textContent = `${t("question")} ${state.currentIndex + 1}`;
  $("progressPill").textContent = `${state.currentIndex + 1}/${state.selectedQuestions.length}`;
  $("timerPill").textContent = formatDuration(state.elapsedSeconds);
  $("examModeLabel").textContent = state.feedbackMode === "immediate" ? t("immediateFeedback") : t("finalReviewOnly");
  $("prevButton").disabled = state.currentIndex === 0;
  $("nextButton").textContent = state.currentIndex === state.selectedQuestions.length - 1 ? t("finishSimulation") : t("nextQuestion");
  $("unsureButton").textContent = state.unsure[question.id] ? t("removeUnsure") : t("markUnsure");
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

function renderFeedbackBox(question, userAnswers) {
  const correct = isCorrect(question, userAnswers);
  return `
    <div class="feedback-box ${correct ? "correct" : "incorrect"}">
      <strong>${correct ? t("correct") : t("incorrect")}</strong>
      <div><strong>${t("correctAnswer")}:</strong> ${escapeHtml(question.correctAnswers.join(", "))}</div>
      <div><strong>${t("explanation")}:</strong> ${escapeHtml(question.explanation)}</div>
    </div>
  `;
}

function saveAnswer(questionId) {
  const inputs = Array.from($("questionCard").querySelectorAll("input"));
  const selected = inputs.filter((input) => input.checked).map((input) => input.value);
  state.answers[questionId] = selected;
  updateQuestionStatus(questionId);
  saveCurrentExam();
  renderQuestion();
}

function toggleUnsure() {
  const question = state.selectedQuestions[state.currentIndex];
  state.unsure[question.id] = !state.unsure[question.id];
  updateQuestionStatus(question.id);
  saveCurrentExam();
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
    const statusLabel = statusLabelFor(item.status);
    return `<option value="${item.index}" ${item.index === state.currentIndex ? "selected" : ""}>${t("question")} ${item.index + 1} - ${statusLabel}</option>`;
  }).join("");
  if (!options.some((item) => item.index === state.currentIndex) && options.length > 0) {
    selector.value = String(options[0].index);
  }
  if (!options.length) {
    selector.innerHTML = `<option>${t("noQuestionsFilter")}</option>`;
  }
}

function moveQuestion(delta) {
  const next = state.currentIndex + delta;
  if (next >= 0 && next < state.selectedQuestions.length) {
    state.currentIndex = next;
    saveCurrentExam();
    renderQuestion();
  }
}

function finishExam() {
  const unanswered = state.selectedQuestions.filter((question) => getQuestionStatus(question.id) === "unanswered").length;
  const unsure = state.selectedQuestions.filter((question) => state.unsure[question.id]).length;
  $("finishDialogText").textContent = t("confirmFinishText", { unanswered, unsure });
  const dialog = $("finishDialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else if (confirm($("finishDialogText").textContent)) finishExamConfirmed();
}

function finishExamConfirmed() {
  state.finished = true;
  stopTimer();
  const result = calculateScore();
  saveAttemptHistory(result);
  clearCurrentExam();
  renderResults(result);
  setScreen("result");
}

function saveAndExit() {
  saveCurrentExam(true);
  stopTimer();
  showExamStatus(t("savedAndExited"));
  setScreen("start");
  renderResumeCard();
  loadAttemptHistory();
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
  return { correct, incorrect, unanswered, total, percentage, passed: percentage >= 85, durationSeconds: state.elapsedSeconds };
}

function isCorrect(question, selected) {
  const selectedSorted = [...selected].sort();
  const correctSorted = [...question.correctAnswers].sort();
  return selectedSorted.length === correctSorted.length && selectedSorted.every((value, idx) => value === correctSorted[idx]);
}

function renderResults(result) {
  const statusText = result.passed ? t("passed") : t("notPassed");
  const message = result.passed ? t("passMessage") : t("failMessage");
  $("resultSummary").innerHTML = `
    <div class="score-card ${result.passed ? "pass" : "fail"}">
      <div>${t("status")}: <strong>${statusText}</strong></div>
      <div class="score-number">${result.percentage}%</div>
      <div>${message}</div>
    </div>
    <div class="stats-grid">
      <div class="stat"><span>${t("correctPlural")}</span><strong>${result.correct}</strong></div>
      <div class="stat"><span>${t("incorrectPlural")}</span><strong>${result.incorrect}</strong></div>
      <div class="stat"><span>${t("unansweredPlural")}</span><strong>${result.unanswered}</strong></div>
      <div class="stat"><span>${t("threshold")}</span><strong>85%</strong></div>
      <div class="stat"><span>${t("duration")}</span><strong>${formatDuration(result.durationSeconds)}</strong></div>
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
    const userAnswer = selected.length ? selected.join(", ") : t("unanswered");
    return `
      <article class="review-item">
        <h3>${t("question")} ${index + 1}</h3>
        <div class="question-text">${escapeHtml(question.question)}</div>
        <div class="options">${optionList}</div>
        <div class="review-label">${t("yourAnswer")}</div>
        <div>${escapeHtml(userAnswer)}</div>
        <div class="review-label">${t("correctAnswer")}</div>
        <div>${escapeHtml(question.correctAnswers.join(", "))}</div>
        <div class="review-label">${t("explanation")}</div>
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

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerId = window.setInterval(() => {
    if (!state.finished && $("examScreen").classList.contains("active")) {
      state.elapsedSeconds += 1;
      updateTimerDisplay();
      if (state.elapsedSeconds % 5 === 0) saveCurrentExam();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerDisplay() {
  if ($("timerPill")) $("timerPill").textContent = formatDuration(state.elapsedSeconds);
}

function saveCurrentExam(force = false) {
  if (!state.selectedQuestions.length || state.finished) return;
  const payload = {
    selectedQuestions: state.selectedQuestions,
    currentIndex: state.currentIndex,
    answers: state.answers,
    unsure: state.unsure,
    feedbackMode: state.feedbackMode,
    selectedTopics: state.selectedTopics,
    questionCount: state.questionCount,
    elapsedSeconds: state.elapsedSeconds,
    currentExamId: state.currentExamId,
    savedAt: new Date().toISOString(),
    appVersion: APP_VERSION.number
  };
  localStorage.setItem(STORAGE_KEYS.currentExam, JSON.stringify(payload));
  state.lastSavedAt = payload.savedAt;
  if (force) renderResumeCard();
}

function getSavedExam() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.currentExam));
    if (!saved || !Array.isArray(saved.selectedQuestions) || !saved.selectedQuestions.length) return null;
    return saved;
  } catch {
    return null;
  }
}

function resumeSavedExam() {
  const saved = getSavedExam();
  if (!saved) return;
  state.selectedQuestions = saved.selectedQuestions;
  state.currentIndex = saved.currentIndex || 0;
  state.answers = saved.answers || {};
  state.unsure = saved.unsure || {};
  state.feedbackMode = saved.feedbackMode || "final";
  state.selectedTopics = saved.selectedTopics || [];
  state.questionCount = saved.questionCount || saved.selectedQuestions.length;
  state.elapsedSeconds = saved.elapsedSeconds || 0;
  state.currentExamId = saved.currentExamId || `exam-${Date.now()}`;
  state.finished = false;
  $("questionFilter").value = "all";
  setScreen("exam");
  startTimer();
  renderQuestion();
}

function discardSavedExam() {
  clearCurrentExam();
  renderResumeCard();
}

function clearCurrentExam() {
  localStorage.removeItem(STORAGE_KEYS.currentExam);
}

function renderResumeCard() {
  const resumeScreen = $("resumeScreen");
  const container = $("resumeContainer");
  if (!resumeScreen || !container) return;
  const saved = getSavedExam();
  if (!saved) {
    resumeScreen.hidden = true;
    container.innerHTML = "";
    return;
  }
  resumeScreen.hidden = false;
  const answeredCount = Object.values(saved.answers || {}).filter((arr) => Array.isArray(arr) && arr.length).length;
  const unsureCount = Object.values(saved.unsure || {}).filter(Boolean).length;
  container.innerHTML = `
    <div class="resume-grid">
      <div class="stat"><span>${t("questions")}</span><strong>${saved.selectedQuestions.length}</strong></div>
      <div class="stat"><span>${t("answeredPlural")}</span><strong>${answeredCount}</strong></div>
      <div class="stat"><span>${t("unsurePlural")}</span><strong>${unsureCount}</strong></div>
      <div class="stat"><span>${t("elapsedTime")}</span><strong>${formatDuration(saved.elapsedSeconds || 0)}</strong></div>
    </div>
    <p class="muted-line">${t("savedAt")}: ${formatDate(saved.savedAt)}</p>
    <div class="resume-actions">
      <button type="button" class="primary" id="resumeSavedButton">${t("resumeSimulation")}</button>
      <button type="button" class="secondary" id="discardSavedButton">${t("discardSavedExam")}</button>
    </div>
  `;
  $("resumeSavedButton")?.addEventListener("click", resumeSavedExam);
  $("discardSavedButton")?.addEventListener("click", discardSavedExam);
}

function saveAttemptHistory(result) {
  const history = getHistory();
  const attempt = {
    dateTime: new Date().toISOString(),
    score: result.percentage,
    correct: result.correct,
    incorrect: result.incorrect,
    unanswered: result.unanswered,
    durationSeconds: result.durationSeconds,
    topics: state.selectedTopics,
    questionCount: state.questionCount,
    feedbackMode: state.feedbackMode,
    appVersion: APP_VERSION.number
  };
  history.unshift(attempt);
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history.slice(0, 30)));
  localStorage.setItem(STORAGE_KEYS.lastAttempt, JSON.stringify(attempt));
}

function loadAttemptHistory() {
  const history = getHistory();
  const container = $("historyContainer");
  if (!container) return;
  if (!history.length) {
    container.className = "history-empty";
    container.textContent = t("noHistory");
    return;
  }
  container.className = "";
  container.innerHTML = `
    <table class="history-table">
      <thead><tr><th>${t("date")}</th><th>${t("score")}</th><th>${t("duration")}</th><th>${t("topics")}</th><th>${t("questions")}</th><th>${t("mode")}</th><th>${t("appVersion")}</th></tr></thead>
      <tbody>
        ${history.map((item) => `
          <tr>
            <td>${formatDate(item.dateTime)}</td>
            <td>${item.score}%</td>
            <td>${formatDuration(item.durationSeconds || 0)}</td>
            <td>${escapeHtml((item.topics || []).join(", "))}</td>
            <td>${item.questionCount}</td>
            <td>${item.feedbackMode === "immediate" ? t("immediateFeedback") : t("finalReviewOnly")}</td>
            <td>${escapeHtml(item.appVersion || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.history)) || []; }
  catch { return []; }
}

function setScreen(name) {
  $("startScreen").classList.toggle("active", name === "start");
  $("resumeScreen").classList.toggle("active", name === "start");
  $("historyScreen").classList.toggle("active", name === "start");
  $("examScreen").classList.toggle("active", name === "exam");
  $("resultScreen").classList.toggle("active", name === "result");
  if (name !== "exam") stopTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function statusLabelFor(status) {
  return { unanswered: t("unanswered"), answered: t("answered"), unsure: t("unsure") }[status] || status;
}

function formatDate(iso) {
  if (!iso) return "-";
  try { return new Intl.DateTimeFormat(settings.lang === "en" ? "en-US" : "pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(iso)); }
  catch { return iso; }
}

function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Number(totalSeconds) || 0);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (value) => String(value).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

function showExamStatus(message) {
  const el = $("examStatus");
  if (!el) return;
  el.hidden = false;
  el.textContent = message;
  window.setTimeout(() => { el.hidden = true; }, 3000);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[char]));
}

loadQuestions()
  .then(initializeApp)
  .catch((error) => {
    applyTheme();
    if ($("questionBankCount")) $("questionBankCount").textContent = "Erro";
    if ($("filterWarning")) {
      $("filterWarning").hidden = false;
      $("filterWarning").textContent = error.message || t("loadingError");
    }
  });
