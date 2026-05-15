const TOPICS = [
  "Scrum Guide 2020", "Empiricism", "Scrum Values", "Product Owner Accountability", "Product Goal",
  "Product Backlog Management", "Stakeholder Management", "Nexus", "Product Owner Stances", "Misunderstood Stances",
  "Evidence-Based Management", "Current Value", "Unrealized Value", "Time-to-Market", "Ability to Innovate",
  "Outcome vs Output", "Experimentation", "Decision Making"
];

const APP_VERSION = {
  number: "1.2.0",
  date: "2026-05-15",
  time: "20:18 BRT"
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
    homeTitle: "Preparar simulado",
    configurationTab: "Configuração",
    historyTab: "Histórico",
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
    lastSaved: "Último salvamento",
    neverSaved: "nunca",
    elapsedTime: "Tempo",
    timeLabel: "Tempo",
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
    saveState: "Salvar",
    exitSimulation: "Sair",
    stateSaved: "Estado salvo.",
    previousQuestion: "Questão anterior",
    markUnsure: "Marcar como dúvida",
    removeUnsure: "Remover dúvida",
    nextQuestion: "Próxima questão",
    finalResult: "Resultado final",
    newSimulation: "Novo simulado",
    confirmFinish: "Confirmar encerramento",
    confirmExit: "Confirmar saída",
    cancel: "Cancelar",
    confirmFinishButton: "Confirmar encerramento",
    confirmExitButton: "Confirmar saída",
    back: "Voltar",
    proceed: "Prosseguir",
    correct: "Correta",
    incorrect: "Incorreta",
    notAnswered: "Não respondida",
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
    correctAnswer: "Resposta correta",
    explanation: "Comentário",
    noQuestionsFilter: "Não há questões nesse filtro",
    selectAtLeastOneTopic: "Selecione pelo menos um tema.",
    notEnoughQuestions: "Há apenas {available} questões disponíveis para os filtros selecionados. Reduza a quantidade ou selecione mais temas.",
    confirmFinishText: "Você está prestes a finalizar o simulado. Existem {unanswered} questões não respondidas e {unsure} questões marcadas como dúvida. Deseja confirmar o encerramento?",
    confirmExitText: "Suas últimas alterações após {time} não salvas serão perdidas. Tem certeza que deseja sair?",
    questionBankCount: "{count} questões",
    versionText: "Versão {number} · {date} · {time}",
    versionFooter: "Versão {number} · {date} · {time} · Banco: {count} questões",
    date: "Data",
    score: "Nota",
    topics: "Temas",
    questions: "Questões",
    mode: "Modo",
    appVersion: "Versão",
    loadingError: "Erro ao carregar questões.",
    cannotLoadQuestions: "Não foi possível carregar questions.json."
  },
  en: {
    htmlLang: "en",
    independentSimulator: "Independent simulator",
    versionLoading: "Loading version...",
    homeTitle: "Prepare simulation",
    configurationTab: "Configuration",
    historyTab: "History",
    languageNotice: "Questions, answer options, explanations, and topics are shown in English to better simulate the real PSPO II exam environment and reinforce the technical vocabulary used in the certification.",
    selectTopics: "Select topics",
    selectAll: "Select all",
    questionCount: "Number of questions",
    feedbackMode: "Feedback mode",
    immediateFeedback: "Immediate feedback",
    finalReviewOnly: "Final review only",
    startSimulation: "Start simulation",
    savedExam: "Saved simulation",
    resumeSimulation: "Resume simulation",
    discardSavedExam: "Discard saved",
    savedAt: "Saved at",
    lastSaved: "Last saved",
    neverSaved: "never",
    elapsedTime: "Time",
    timeLabel: "Time",
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
    saveState: "Save",
    exitSimulation: "Exit",
    stateSaved: "State saved.",
    previousQuestion: "Previous question",
    markUnsure: "Mark as unsure",
    removeUnsure: "Remove unsure",
    nextQuestion: "Next question",
    finalResult: "Final result",
    newSimulation: "New simulation",
    confirmFinish: "Confirm finish",
    confirmExit: "Confirm exit",
    cancel: "Cancel",
    confirmFinishButton: "Confirm finish",
    confirmExitButton: "Confirm exit",
    back: "Back",
    proceed: "Proceed",
    correct: "Correct",
    incorrect: "Incorrect",
    notAnswered: "Unanswered",
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
    correctAnswer: "Correct answer",
    explanation: "Explanation",
    noQuestionsFilter: "No questions in this filter",
    selectAtLeastOneTopic: "Select at least one topic.",
    notEnoughQuestions: "There are only {available} questions available for the selected filters. Reduce the amount or select more topics.",
    confirmFinishText: "You are about to finish the simulation. There are {unanswered} unanswered questions and {unsure} questions marked as unsure. Do you want to confirm?",
    confirmExitText: "Your unsaved changes after {time} will be lost. Are you sure you want to exit?",
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
  lastSavedAt: null,
  dirty: false,
  pendingAction: null
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
  updateToggleStates();
}

function applyLanguage() {
  document.documentElement.lang = t("htmlLang");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
  updateToggleStates();
  renderAppVersion();
  updateQuestionBankCount();
  updateFilterWarning();
  renderResumeCard();
  loadAttemptHistory();
  updateSaveLine();
  if ($("examScreen")?.classList.contains("active")) renderQuestion();
}

function updateToggleStates() {
  document.querySelectorAll(".lang-toggle").forEach((button) => {
    const active = button.dataset.lang === settings.lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const active = button.dataset.themeValue === settings.theme;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

async function loadQuestions() {
  if (Array.isArray(window.QUESTION_BANK) && window.QUESTION_BANK.length) {
    state.questions = normalizeQuestions(window.QUESTION_BANK);
    return state.questions;
  }
  const response = await fetch("questions.json", { cache: "no-store" });
  if (!response.ok) throw new Error(t("cannotLoadQuestions"));
  const data = await response.json();
  state.questions = normalizeQuestions(data);
  return state.questions;
}

function normalizeQuestions(questions) {
  return questions.map((question) => ({
    ...question,
    options: sortOptions(question.options || [])
  }));
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
  document.querySelectorAll(".lang-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      settings.lang = button.dataset.lang;
      saveSettings();
      applyLanguage();
    });
  });

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      settings.theme = button.dataset.themeValue;
      saveSettings();
      applyTheme();
    });
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchHomeTab(button.dataset.tab));
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
  $("nextButton").addEventListener("click", handleNextQuestion);
  $("finishNowButton").addEventListener("click", finishExam);
  $("saveButton").addEventListener("click", () => {
    saveAnswerFromDom();
    saveCurrentExam(true);
    showExamStatus(t("stateSaved"));
  });
  $("exitButton").addEventListener("click", confirmExit);
  $("unsureButton").addEventListener("click", toggleUnsure);
  $("questionSelector").addEventListener("change", (event) => {
    const idx = Number(event.target.value);
    if (!Number.isNaN(idx)) {
      saveAnswerFromDom();
      state.currentIndex = idx;
      state.dirty = true;
      renderQuestion();
    }
  });
  $("questionFilter").addEventListener("change", renderQuestionSelector);

  $("cancelFinishButton").addEventListener("click", () => $("finishDialog").close());
  $("confirmFinishButton").addEventListener("click", () => {
    $("finishDialog").close();
    finishExamConfirmed();
  });

  $("cancelExitButton").addEventListener("click", () => $("exitDialog").close());
  $("confirmExitButton").addEventListener("click", () => {
    $("exitDialog").close();
    exitWithoutSaving();
  });

  $("feedbackBackButton").addEventListener("click", () => $("feedbackDialog").close());
  $("feedbackProceedButton").addEventListener("click", () => {
    $("feedbackDialog").close();
    proceedAfterFeedback();
  });

  $("newAttemptButton").addEventListener("click", () => {
    clearCurrentExam();
    setScreen("home");
    switchHomeTab("config");
    renderResumeCard();
    loadAttemptHistory();
  });

  window.addEventListener("beforeunload", () => saveCurrentExam(false, { automatic: true }));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveCurrentExam(false, { automatic: true });
  });
}

function switchHomeTab(tab) {
  const safeTab = tab === "history" ? "history" : "config";
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.tab === safeTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  ["config", "history"].forEach((name) => {
    const panel = $(`${name}Panel`);
    const active = name === safeTab;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  if (safeTab === "history") loadAttemptHistory();
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
    options: sortOptions(question.options || [])
  }));
  state.currentIndex = 0;
  state.answers = {};
  state.unsure = {};
  state.finished = false;
  state.elapsedSeconds = 0;
  state.currentExamId = `exam-${Date.now()}`;
  state.lastSavedAt = null;
  state.dirty = false;
  state.pendingAction = null;
  $("questionFilter").value = "all";
  setScreen("exam");
  startTimer();
  saveCurrentExam(true);
  renderQuestion();
}

function sortOptions(options) {
  return [...options].sort((a, b) => String(a.id).localeCompare(String(b.id)));
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
  $("examTitle").textContent = `${t("question")} ${state.currentIndex + 1}`;
  $("progressPill").textContent = `${state.currentIndex + 1}/${state.selectedQuestions.length}`;
  $("timerPill").textContent = formatDuration(state.elapsedSeconds);
  $("examModeLabel").textContent = state.feedbackMode === "immediate" ? t("immediateFeedback") : t("finalReviewOnly");
  $("prevButton").disabled = state.currentIndex === 0;
  $("nextButton").textContent = state.currentIndex === state.selectedQuestions.length - 1 ? t("finishSimulation") : t("nextQuestion");
  $("unsureButton").textContent = state.unsure[question.id] ? t("removeUnsure") : t("markUnsure");
  $("unsureButton").classList.toggle("unsure-active", Boolean(state.unsure[question.id]));
  updateSaveLine();

  const inputType = question.type === "multiple" ? "checkbox" : "radio";
  const optionsHtml = sortOptions(question.options || []).map((option) => {
    const checked = userAnswers.includes(option.id) ? "checked" : "";
    return `
      <label class="option-row">
        <input type="${inputType}" name="answer" value="${escapeHtml(option.id)}" ${checked} />
        <span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span>
      </label>
    `;
  }).join("");

  $("questionCard").innerHTML = `
    <div class="question-meta">
      <span class="tag">${question.type === "multiple" ? "Multiple answer" : "Single answer"}</span>
      ${(question.topics || []).map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`).join("")}
    </div>
    <div class="question-text">${escapeHtml(question.question)}</div>
    <div class="options">${optionsHtml}</div>
  `;

  $("questionCard").querySelectorAll("input").forEach((input) => input.addEventListener("change", saveAnswerFromDom));
  renderQuestionSelector();
}

function saveAnswerFromDom() {
  const question = state.selectedQuestions[state.currentIndex];
  if (!question) return;
  const inputs = Array.from($("questionCard").querySelectorAll("input"));
  const selected = inputs.filter((input) => input.checked).map((input) => input.value).sort();
  state.answers[question.id] = selected;
  updateQuestionStatus(question.id);
  state.dirty = true;
  renderQuestionSelector();
}

function handleNextQuestion() {
  saveAnswerFromDom();
  if (state.feedbackMode === "immediate") {
    const isLast = state.currentIndex === state.selectedQuestions.length - 1;
    state.pendingAction = isLast ? "finish" : "next";
    openFeedbackDialog();
    return;
  }
  if (state.currentIndex === state.selectedQuestions.length - 1) finishExam();
  else moveQuestion(1);
}

function openFeedbackDialog() {
  const question = state.selectedQuestions[state.currentIndex];
  const selected = state.answers[question.id] || [];
  const answered = selected.length > 0;
  const correct = answered && isCorrect(question, selected);
  const title = !answered ? t("notAnswered") : (correct ? t("correct") : t("incorrect"));
  const statusClass = !answered ? "unanswered-feedback" : (correct ? "correct" : "incorrect");

  const optionsHtml = sortOptions(question.options || []).map((option) => {
    const klass = optionHighlightClass(question, option.id, selected);
    return `<div class="option-row ${klass}"><span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span></div>`;
  }).join("");

  $("feedbackDialogTitle").textContent = title;
  $("feedbackDialogContent").innerHTML = `
    <div class="feedback-box ${statusClass}">
      <div class="feedback-result"><strong>${escapeHtml(title)}</strong></div>
      <div class="review-label">${t("correctAnswer")}</div>
      <div>${escapeHtml(question.correctAnswers.join(", "))}</div>
      <div class="options feedback-options">${optionsHtml}</div>
      <div class="review-label">${t("explanation")}</div>
      <div>${escapeHtml(question.explanation)}</div>
    </div>
  `;
  const dialog = $("feedbackDialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(`${title}\n\n${question.explanation}`);
}

function proceedAfterFeedback() {
  if (state.pendingAction === "finish") {
    state.pendingAction = null;
    finishExam();
    return;
  }
  state.pendingAction = null;
  moveQuestion(1);
}

function toggleUnsure() {
  const question = state.selectedQuestions[state.currentIndex];
  if (!question) return;
  state.unsure[question.id] = !state.unsure[question.id];
  updateQuestionStatus(question.id);
  state.dirty = true;
  renderQuestion();
}

function updateQuestionStatus(questionId) {
  const status = getQuestionStatus(questionId);
  return status;
}

function getQuestionStatus(questionId) {
  if (state.unsure[questionId]) return "unsure";
  return (state.answers[questionId] || []).length ? "answered" : "unanswered";
}

function renderQuestionSelector() {
  const filter = $("questionFilter").value;
  const selector = $("questionSelector");
  const rows = state.selectedQuestions
    .map((question, index) => ({ question, index, status: getQuestionStatus(question.id) }))
    .filter((item) => {
      if (filter === "all") return true;
      if (filter === "answered") return (state.answers[item.question.id] || []).length > 0;
      if (filter === "unanswered") return !(state.answers[item.question.id] || []).length;
      if (filter === "unsure") return Boolean(state.unsure[item.question.id]);
      return true;
    });
  selector.innerHTML = rows.length ? rows.map((item) => `
    <option value="${item.index}" ${item.index === state.currentIndex ? "selected" : ""}>${t("question")} ${item.index + 1} - ${statusLabelFor(item.status)}</option>
  `).join("") : `<option>${t("noQuestionsFilter")}</option>`;
}

function moveQuestion(delta) {
  saveAnswerFromDom();
  const next = state.currentIndex + delta;
  if (next < 0 || next >= state.selectedQuestions.length) return;
  state.currentIndex = next;
  state.dirty = true;
  renderQuestion();
}

function finishExam() {
  saveAnswerFromDom();
  const unanswered = state.selectedQuestions.filter((question) => !(state.answers[question.id] || []).length).length;
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
  setScreen("result");
  renderResults(result);
}

function confirmExit() {
  saveAnswerFromDom();
  const lastSave = state.lastSavedAt ? formatTimeOnly(state.lastSavedAt) : t("neverSaved");
  $("exitDialogText").textContent = t("confirmExitText", { time: lastSave });
  const dialog = $("exitDialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else if (confirm($("exitDialogText").textContent)) exitWithoutSaving();
}

function exitWithoutSaving() {
  stopTimer();
  state.selectedQuestions = [];
  state.currentIndex = 0;
  state.answers = {};
  state.unsure = {};
  state.pendingAction = null;
  state.dirty = false;
  setScreen("home");
  switchHomeTab("config");
  renderResumeCard();
  loadAttemptHistory();
}

function calculateScore() {
  let correct = 0;
  let unanswered = 0;
  state.selectedQuestions.forEach((question) => {
    const selected = state.answers[question.id] || [];
    if (!selected.length) unanswered += 1;
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
  return selectedSorted.length === correctSorted.length && selectedSorted.every((value, index) => value === correctSorted[index]);
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
    const optionList = sortOptions(question.options || []).map((option) => {
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

function saveCurrentExam(force = false, options = {}) {
  if (!state.selectedQuestions.length || state.finished) return;
  const payload = {
    selectedQuestions: state.selectedQuestions.map((question) => ({ ...question, options: sortOptions(question.options || []) })),
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
  state.dirty = false;
  updateSaveLine();
  if (force || options.automatic) renderResumeCard();
}

function getSavedExam() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.currentExam));
    if (!saved || !Array.isArray(saved.selectedQuestions) || !saved.selectedQuestions.length) return null;
    saved.selectedQuestions = saved.selectedQuestions.map((question) => ({ ...question, options: sortOptions(question.options || []) }));
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
  state.lastSavedAt = saved.savedAt || null;
  state.finished = false;
  state.dirty = false;
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
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history.slice(0, 50)));
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
  $("homeScreen").classList.toggle("active", name === "home");
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

function formatTimeOnly(iso) {
  if (!iso) return "-";
  try { return new Intl.DateTimeFormat(settings.lang === "en" ? "en-US" : "pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date(iso)); }
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

function updateSaveLine() {
  const el = $("saveLine");
  if (!el) return;
  const time = state.lastSavedAt ? formatTimeOnly(state.lastSavedAt) : t("neverSaved");
  el.textContent = `${t("lastSaved")}: ${time}${state.dirty ? " *" : ""}`;
}

function showExamStatus(message) {
  const el = $("examStatus");
  if (!el) return;
  el.hidden = false;
  el.textContent = message;
  window.setTimeout(() => { el.hidden = true; }, 2500);
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
