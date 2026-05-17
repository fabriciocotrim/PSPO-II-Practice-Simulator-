const TOPIC_GROUPS_BY_LANG = {
  "pt-BR": [
    {
      id: "foundations",
      title: "Fundamentos",
      description: "Scrum Guide, empirismo, valores, accountabilities e Product Goal",
      topics: ["Scrum Guide 2020", "Empirismo", "Scrum Values", "Accountabilities", "Product Goal", "Revisão S1-S2", "Fundamentos, Empirismo, Valores, Accountabilities e Product Goal"]
    },
    {
      id: "product-ownership",
      title: "Product Ownership",
      description: "Product Backlog, refinement, stakeholders, estratégia e descoberta",
      topics: ["Product Backlog", "Refinement", "Stakeholders", "Nexus básico", "Customer Representative", "Visionary", "Experimenter", "Influencer", "Collaborator", "Product Strategy", "User Story Mapping", "Product Backlog, Refinamento, Stakeholders e Nexus"]
    },
    {
      id: "stances",
      title: "Stances e anti-patterns",
      description: "Posturas do Product Owner, Decision Maker e anti-patterns",
      topics: ["Decision Maker", "Clerk / Story Writer", "Manager / Project Manager", "Subject Matter Expert / Gatekeeper", "Revisão de Stances", "As Posturas (Stances) do Product Owner", "Posturas Malcompreendidas (Anti-Patterns) e Decision Maker"]
    },
    {
      id: "ebm",
      title: "EBM e Value Thinking",
      description: "KVAs, valor, outcome vs output, inovação e discovery",
      topics: ["EBM Overview", "Current Value", "Unrealized Value", "Time-to-Market", "Ability to Innovate", "outcome vs output", "Discovery contínuo", "Revisão EBM + Produto", "Evidence-Based Management (EBM) e Value Thinking", "outcome vs output, Discovery, Estratégia e User Story Mapping"]
    },
    {
      id: "practice",
      title: "Simulados e revisão",
      description: "Simulados parciais, finais, revisão de erros e pré-prova",
      topics: ["Simulado parcial 1", "Correção comentada", "Simulado parcial 2", "Crédito parcial", "Open Assessments", "Simulado final 1", "Revisão de erros", "Simulado final 2", "Revisão leve", "Pré-prova", "Cenários Complexos, Nexus, Contratos e Julgamento", "Simulado Final de Tensão e Julgamento Crítico"]
    }
  ],
  en: [
    {
      id: "foundations",
      title: "Foundations",
      description: "Scrum Guide, empiricism, values, accountabilities, and Product Goal",
      topics: ["Scrum Guide 2020", "Empiricism", "Scrum Values", "Accountabilities", "Product Goal", "S1-S2 Review", "Fundamentals, Empiricism, Scrum Values, Accountabilities, and Product Goal"]
    },
    {
      id: "product-ownership",
      title: "Product Ownership",
      description: "Product Backlog, refinement, stakeholders, strategy, and discovery",
      topics: ["Product Backlog", "Refinement", "Stakeholders", "Nexus Basics", "Customer Representative", "Visionary", "Experimenter", "Influencer", "Collaborator", "Product Strategy", "User Story Mapping", "Product Backlog, Refinement, Stakeholders, and Nexus"]
    },
    {
      id: "stances",
      title: "Stances and anti-patterns",
      description: "Product Owner stances, Decision Maker, and anti-patterns",
      topics: ["Decision Maker", "Clerk / Story Writer", "Manager / Project Manager", "Subject Matter Expert / Gatekeeper", "Stances Review", "Product Owner Stances", "Misunderstood Stances, Anti-Patterns, and Decision Maker"]
    },
    {
      id: "ebm",
      title: "EBM and Value Thinking",
      description: "KVAs, value, outcome vs output, innovation, and discovery",
      topics: ["EBM Overview", "Current Value", "Unrealized Value", "Time-to-Market", "Ability to Innovate", "Outcome vs Output", "Continuous Discovery", "EBM + Product Review", "Evidence-Based Management and Value Thinking", "Outcome vs. Output, Discovery, Strategy, and User Story Mapping"]
    },
    {
      id: "practice",
      title: "Simulations and review",
      description: "Partial simulations, final simulations, error review, and pre-exam review",
      topics: ["Partial Simulation 1", "Commented Correction", "Partial Simulation 2", "Partial Credit", "Open Assessments", "Final Simulation 1", "Error Review", "Final Simulation 2", "Light Review", "Pre-Exam Review", "Complex Scenarios, Nexus, Contracts, and Judgment", "Final Simulation: Tension and Critical Judgment"]
    }
  ]
};

const APP_VERSION = {
  number: "1.9.1",
  date: "2026-05-17",
  time: "08:00 BRT"
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
    independentSimulator: "",
    versionLoading: "Versão carregando...",
    homeTitle: "Preparar simulado",
    prepareSimulation: "Preparar simulado",
    savedSimulationTab: "Simulado interrompido",
    savedExamSubtitle: "Tentativa salva neste dispositivo.",
    historySubtitle: "Tentativas concluídas neste dispositivo.",
    formatTitle: "Formato",
    topicModalSubtitle: "Escolha grupos amplos.",
    applyTopics: "Aplicar tópicos",
    selectedTopicGroups: "{count} grupos selecionados",
    configurationTab: "Início",
    historyTab: "Histórico",
    languageNotice: "O idioma selecionado define interface, questões, alternativas, comentários e temas do simulado.",
    interfaceLanguage: "Idioma",
    visualTheme: "Tema",
    selectTopics: "Selecionar temas",
    selectAll: "Selecionar todos",
    questionCount: "Quantidade de questões",
    startSimulation: "Iniciar simulado",
    savedExam: "Simulado interrompido",
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
    of: "de",
    saveProgress: "Salvar progresso",
    exitExamTooltip: "Sair do simulado",
    previousQuestionTooltip: "Questão anterior",
    nextQuestionTooltip: "Próxima questão",
    finishSimulationTooltip: "Finalizar simulado",
    markUnsureTooltip: "Marcar questão como dúvida",
    removeUnsureTooltip: "Remover marcação de dúvida",
    filter: "Filtro",
    allQuestions: "Todas",
    goTo: "Ir para",
    goToQuestion: "Ir para questão",
    examTimerTooltip: "Tempo de prova",
    selectorQuestionAnswered: "Questão {number}",
    selectorQuestionUnanswered: "Questão {number} - não respondida",
    selectorQuestionUnsure: "Questão {number} - dúvida",
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
    correct: "Correta",
    incorrect: "Incorreta",
    notAnswered: "Não respondida",
    status: "Status",
    passed: "Aprovado",
    notPassed: "Não aprovado",
    passMessage: "Parabéns. Você atingiu o limite de aprovação da PSPO II.",
    failMessage: "Você ficou abaixo do limite de aprovação da PSPO II. Revise seus pontos fracos e tente novamente.",
    correctPlural: "Corretas",
    incorrectPlural: "Erros",
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
    versionFooter: "Versão {number} · Build: {date} · {time}",
    date: "Data",
    score: "Nota",
    topics: "Temas",
    questions: "Questões",
    mode: "Modo",
    appVersion: "Versão",
    loadingError: "Erro ao carregar questões.",
    cannotLoadQuestions: "Não foi possível carregar o banco de questões.",
    singleAnswer: "Resposta única",
    multipleAnswers: "Múltiplas respostas",
    moreTopics: "temas",
    multiAnswerHelp: "Selecione todas as alternativas corretas antes de avançar. A correção é rigorosa.",
    quickSettings: "Configurações rápidas",
    resultQuickSettings: "Configurações rápidas do resultado",
    homeSections: "Seções da tela inicial",
    configTabTooltip: "Início",
    savedTabTooltip: "Retomar simulado",
    noSavedTabTooltip: "Nenhum simulado salvo",
    historyTabTooltip: "Histórico",
    questionCountTooltip: "Quantidade de questões",
    topicButtonTooltip: "Selecionar tópicos",
    closeTooltip: "Fechar",
    topicsGroupTooltip: "Temas",
    examQuickActionsTooltip: "Ações rápidas do simulado",
    examNavigationTooltip: "Navegação do simulado",
    versionInfoTooltip: "Informações da versão",
    resultHomeTooltip: "Voltar para início",
    switchToEnglishTooltip: "Alternar para inglês",
    switchToPortugueseTooltip: "Alternar para português brasileiro",
    switchToDarkTooltip: "Alternar para modo escuro",
    switchToLightTooltip: "Alternar para modo claro"
  },
  en: {
    htmlLang: "en",
    independentSimulator: "",
    versionLoading: "Loading version...",
    homeTitle: "Prepare simulation",
    prepareSimulation: "Prepare simulation",
    savedSimulationTab: "Interrupted simulation",
    savedExamSubtitle: "Attempt saved locally on this device.",
    historySubtitle: "Completed attempts on this device.",
    formatTitle: "Format",
    topicModalSubtitle: "Choose broad groups.",
    applyTopics: "Apply topics",
    selectedTopicGroups: "{count} groups selected",
    configurationTab: "Home",
    historyTab: "History",
    languageNotice: "The selected language defines the interface, questions, answer options, explanations, and topics for the simulation.",
    interfaceLanguage: "Language",
    visualTheme: "Theme",
    selectTopics: "Select topics",
    selectAll: "Select all",
    questionCount: "Number of questions",
    startSimulation: "Start simulation",
    savedExam: "Interrupted simulation",
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
    of: "of",
    saveProgress: "Save progress",
    exitExamTooltip: "Exit simulation",
    previousQuestionTooltip: "Previous question",
    nextQuestionTooltip: "Next question",
    finishSimulationTooltip: "Finish simulation",
    markUnsureTooltip: "Mark question as unsure",
    removeUnsureTooltip: "Remove unsure mark",
    filter: "Filter",
    allQuestions: "All",
    goTo: "Go to",
    goToQuestion: "Go to question",
    examTimerTooltip: "Exam timer",
    selectorQuestionAnswered: "Question {number}",
    selectorQuestionUnanswered: "Question {number} - unanswered",
    selectorQuestionUnsure: "Question {number} - unsure",
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
    correct: "Correct",
    incorrect: "Incorrect",
    notAnswered: "Unanswered",
    status: "Status",
    passed: "Passed",
    notPassed: "Not passed",
    passMessage: "Congratulations. You reached the PSPO II passing threshold.",
    failMessage: "You are below the PSPO II passing threshold. Review your weak areas and try again.",
    correctPlural: "Correct",
    incorrectPlural: "Errors",
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
    versionFooter: "Version {number} · Build: {date} · {time}",
    date: "Date",
    score: "Score",
    topics: "Topics",
    questions: "Questions",
    mode: "Mode",
    appVersion: "Version",
    loadingError: "Error loading questions.",
    cannotLoadQuestions: "Could not load the question bank.",
    singleAnswer: "Single answer",
    multipleAnswers: "Multiple answers",
    moreTopics: "topics",
    multiAnswerHelp: "Select all correct options before continuing. Strict scoring is applied.",
    quickSettings: "Quick settings",
    resultQuickSettings: "Result quick settings",
    homeSections: "Home sections",
    configTabTooltip: "Home",
    savedTabTooltip: "Resume simulation",
    noSavedTabTooltip: "No saved simulation",
    historyTabTooltip: "History",
    questionCountTooltip: "Number of questions",
    topicButtonTooltip: "Select topics",
    closeTooltip: "Close",
    topicsGroupTooltip: "Topics",
    examQuickActionsTooltip: "Exam quick actions",
    examNavigationTooltip: "Exam navigation",
    versionInfoTooltip: "Version information",
    resultHomeTooltip: "Back to home",
    switchToEnglishTooltip: "Switch to English",
    switchToPortugueseTooltip: "Switch to Brazilian Portuguese",
    switchToDarkTooltip: "Switch to dark mode",
    switchToLightTooltip: "Switch to light mode"
  }
};

const settings = loadSettings();

const state = {
  questions: [],
  selectedQuestions: [],
  currentIndex: 0,
  answers: {},
  unsure: {},
  selectedTopics: [],
  questionCount: 40,
  finished: false,
  elapsedSeconds: 0,
  timerId: null,
  currentExamId: null,
  lastSavedAt: null,
  dirty: false,
  lastResult: null,
  resultReviewFilters: [],
  resultReviewActiveId: null,
  currentExamLanguage: null
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
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", settings.theme === "dark" ? "#191919" : "#f6f6f4");
  updateToggleStates();
}

function applyLanguage() {
  document.documentElement.lang = t("htmlLang");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
  updateToggleStates();
  updateStaticTooltips();
  updateTopicSummary();
  updateQuestionCountSlider();
  renderAppVersion();
  updateQuestionBankCount();
  updateFilterWarning();
  renderResumeCard();
  loadAttemptHistory();
  updateSaveLine();
  updateActionButtonLabels();
  if ($("examScreen")?.classList.contains("active")) renderQuestion();
  if ($("resultScreen")?.classList.contains("active") && state.lastResult) renderResults(state.lastResult);
}

function updateToggleStates() {
  document.querySelectorAll(".lang-switch").forEach((button) => {
    const isEnglish = settings.lang === "en";
    const label = isEnglish ? t("switchToPortugueseTooltip") : t("switchToEnglishTooltip");
    button.dataset.state = isEnglish ? "right" : "left";
    button.setAttribute("aria-checked", String(isEnglish));
    button.setAttribute("aria-label", label);
    button.title = label;
  });
  document.querySelectorAll(".theme-switch").forEach((button) => {
    const isDark = settings.theme === "dark";
    const label = isDark ? t("switchToLightTooltip") : t("switchToDarkTooltip");
    button.dataset.state = isDark ? "right" : "left";
    button.setAttribute("aria-checked", String(isDark));
    button.setAttribute("aria-label", label);
    button.title = label;
  });
}

function setTooltip(selector, key, includeTitle = true) {
  document.querySelectorAll(selector).forEach((element) => {
    const label = t(key);
    element.setAttribute("aria-label", label);
    if (includeTitle) element.title = label;
  });
}

function updateStaticTooltips() {
  setTooltip(".settings-switches", "quickSettings", false);
  setTooltip(".result-header-controls", "resultQuickSettings", false);
  setTooltip(".icon-tabs", "homeSections", false);
  setTooltip("#configTab", "configTabTooltip");
  setTooltip("#savedTab", "savedTabTooltip");
  setTooltip("#historyTab", "historyTabTooltip");
  setTooltip("#questionCount", "questionCountTooltip", false);
  setTooltip("#openTopicsButton", "topicButtonTooltip");
  setTooltip("#resultHomeButton", "resultHomeTooltip");
  setTooltip("#closeTopicsButton", "closeTooltip");
  setTooltip("#topicsContainer", "topicsGroupTooltip", false);
  setTooltip(".exam-quick-actions", "examQuickActionsTooltip", false);
  setTooltip(".nav-buttons.icon-nav", "examNavigationTooltip", false);
  setTooltip(".app-footer", "versionInfoTooltip", false);
}

let questionBanks = {};

function getActiveLanguage() {
  return settings.lang === "en" ? "en" : "pt-BR";
}

function getTopicGroups() {
  return TOPIC_GROUPS_BY_LANG[getActiveLanguage()] || TOPIC_GROUPS_BY_LANG["pt-BR"];
}

async function loadQuestions() {
  if (window.QUESTION_BANKS && typeof window.QUESTION_BANKS === "object") {
    questionBanks = window.QUESTION_BANKS;
    return setActiveQuestionBank();
  }
  if (Array.isArray(window.QUESTION_BANK) && window.QUESTION_BANK.length) {
    questionBanks = { en: window.QUESTION_BANK, "pt-BR": window.QUESTION_BANK };
    return setActiveQuestionBank();
  }
  const response = await fetch("questions.json", { cache: "no-store" });
  if (!response.ok) throw new Error(t("cannotLoadQuestions"));
  const data = await response.json();
  questionBanks = Array.isArray(data) ? { en: data, "pt-BR": data } : data;
  return setActiveQuestionBank();
}

function setActiveQuestionBank() {
  state.questions = getQuestionsForLanguage(getActiveLanguage());
  return state.questions;
}

function getQuestionsForLanguage(language) {
  const bank = questionBanks[language] || questionBanks["pt-BR"] || questionBanks.en || [];
  return normalizeQuestions(Array.isArray(bank) ? bank : []);
}

function normalizeQuestions(questions) {
  return questions.map((question) => ({
    ...question,
    options: sortOptions(question.options || [])
  }));
}

function syncSelectedQuestionsToActiveLanguage() {
  if (!state.selectedQuestions.length) return;
  const activeQuestions = getQuestionsForLanguage(getActiveLanguage());
  const byId = new Map(activeQuestions.map((question) => [question.id, question]));
  state.selectedQuestions = state.selectedQuestions.map((question) => {
    const translated = byId.get(question.id);
    return translated ? { ...translated, options: sortOptions(translated.options || []) } : question;
  });
  state.currentExamLanguage = getActiveLanguage();
}

function setLanguage(nextLanguage) {
  const normalized = nextLanguage === "en" ? "en" : "pt-BR";
  if (settings.lang === normalized) return;
  settings.lang = normalized;
  saveSettings();
  setActiveQuestionBank();
  syncSelectedQuestionsToActiveLanguage();
  renderTopicSelector();
  applyLanguage();
  saveCurrentExam(false, { automatic: true });
}

function initializeApp() {
  applyTheme();
  renderTopicSelector();
  attachEvents();
  applyLanguage();
  updateQuestionCountSlider();
  updateTopicSummary();
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
  document.querySelectorAll(".lang-switch").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(settings.lang === "en" ? "pt-BR" : "en");
    });
  });

  document.querySelectorAll(".theme-switch").forEach((button) => {
    button.addEventListener("click", () => {
      settings.theme = settings.theme === "dark" ? "light" : "dark";
      saveSettings();
      applyTheme();
    });
  });

  document.querySelectorAll(".icon-tab").forEach((button) => {
    button.addEventListener("click", () => switchHomeTab(button.dataset.tab));
  });

  $("startForm").addEventListener("submit", (event) => {
    event.preventDefault();
    startSimulation();
  });

  $("selectAllTopics").addEventListener("change", (event) => {
    document.querySelectorAll(".topic-group-check:not(:disabled)").forEach((input) => input.checked = event.target.checked);
    updateFilterWarning();
  });

  $("topicsContainer").addEventListener("change", () => {
    const checks = Array.from(document.querySelectorAll(".topic-group-check:not(:disabled)"));
    $("selectAllTopics").checked = checks.length > 0 && checks.every((input) => input.checked);
    updateFilterWarning();
  });

  $("questionCount").addEventListener("input", () => {
    updateQuestionCountSlider();
    updateFilterWarning();
  });


  $("openTopicsButton")?.addEventListener("click", () => {
    const dialog = $("topicsDialog");
    if (dialog && typeof dialog.showModal === "function") dialog.showModal();
  });
  $("closeTopicsButton")?.addEventListener("click", () => $("topicsDialog")?.close());
  $("cancelTopicsButton")?.addEventListener("click", () => $("topicsDialog")?.close());
  $("applyTopicsButton")?.addEventListener("click", () => {
    updateTopicSummary();
    updateFilterWarning();
    $("topicsDialog")?.close();
  });

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


  $("newAttemptButton")?.addEventListener("click", startNewAttemptFromResult);
  $("resultHomeButton")?.addEventListener("click", goHomeFromResult);
  $("resultScreen")?.addEventListener("click", handleResultClick);

  window.addEventListener("beforeunload", () => saveCurrentExam(false, { automatic: true }));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveCurrentExam(false, { automatic: true });
  });
}

function updateQuestionCountSlider() {
  const input = $("questionCount");
  if (!input) return;
  const value = Number(input.value || 40);
  if ($("questionCountValue")) $("questionCountValue").textContent = String(value);
  const min = Number(input.min || 10);
  const max = Number(input.max || 60);
  const pct = ((value - min) / (max - min)) * 100;
  input.style.setProperty("--slider-progress", `${pct}%`);
}

function updateTopicSummary() {
  const selectedGroups = Array.from(document.querySelectorAll(".topic-group-check:checked"));
  if ($("selectedTopicSummary")) $("selectedTopicSummary").textContent = t("selectedTopicGroups", { count: selectedGroups.length });
}

function switchHomeTab(tab) {
  const allowed = ["config", "saved", "history"];
  const hasSaved = Boolean(getSavedExam());
  const safeTab = allowed.includes(tab) && (tab !== "saved" || hasSaved) ? tab : "config";
  document.querySelectorAll(".icon-tab").forEach((button) => {
    const active = button.dataset.tab === safeTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  ["config", "saved", "history"].forEach((name) => {
    const panel = $(`${name}Panel`);
    if (!panel) return;
    const active = name === safeTab;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  if (safeTab === "history") loadAttemptHistory();
  if (safeTab === "saved") renderResumeCard();
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
  if (!container) return;
  container.innerHTML = getTopicGroups().map((group) => `
    <label class="topic-group-card ${group.topics.length ? "" : "topic-group-empty"}">
      <input class="topic-group-check" type="checkbox" value="${escapeHtml(group.id)}" ${group.topics.length ? "checked" : ""} ${group.topics.length ? "" : "disabled"} />
      <span class="topic-group-content">
        <span class="topic-group-title">${escapeHtml(group.title)}</span>
        <span class="topic-group-description">${escapeHtml(group.description)}</span>
      </span>
      <span class="topic-group-checkmark" aria-hidden="true">✓</span>
    </label>
  `).join("");
  updateTopicSummary();
}

function getSelectedTopics() {
  const selectedIds = Array.from(document.querySelectorAll(".topic-group-check:checked")).map((input) => input.value);
  return [...new Set(getTopicGroups()
    .filter((group) => selectedIds.includes(group.id))
    .flatMap((group) => group.topics))];
}

function getSelectedTopicGroupCount() {
  return Array.from(document.querySelectorAll(".topic-group-check:checked")).length;
}

function updateFilterWarning() {
  updateTopicSummary();
  updateQuestionCountSlider();
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
  state.currentExamLanguage = getActiveLanguage();
  state.lastSavedAt = null;
  state.dirty = false;
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
  const isLastQuestion = state.currentIndex === state.selectedQuestions.length - 1;
  $("examTitle").textContent = `${t("question")} ${state.currentIndex + 1} ${t("of")} ${state.selectedQuestions.length}`;
  $("progressPill").textContent = `${state.currentIndex + 1}/${state.selectedQuestions.length} · ${question.type === "multiple" ? "multi" : "single"}`;
  $("timerPill").textContent = formatDuration(state.elapsedSeconds);
  $("prevButton").disabled = state.currentIndex === 0;
  $("prevButton").textContent = "←";
  $("nextButton").textContent = "→";
  $("nextButton").disabled = isLastQuestion;
  $("nextButton").classList.toggle("finish-primary", false);
  $("unsureButton").textContent = state.unsure[question.id] ? "⚑" : "⚐";
  $("unsureButton").classList.toggle("unsure-active", Boolean(state.unsure[question.id]));
  updateSaveLine();
  updateActionButtonLabels();

  const isMultiple = question.type === "multiple";
  const inputType = isMultiple ? "checkbox" : "radio";
  const optionsHtml = sortOptions(question.options || []).map((option) => {
    const checked = userAnswers.includes(option.id) ? "checked" : "";
    return `
      <label class="option-row ${isMultiple ? "multi-option" : "single-option"}">
        <input type="${inputType}" name="answer" value="${escapeHtml(option.id)}" ${checked} />
        <span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span>
      </label>
    `;
  }).join("");

  const multiHint = isMultiple ? `<div class="multi-answer-hint">${escapeHtml(t("multiAnswerHelp"))}</div>` : "";
  $("questionCard").innerHTML = `
    <div class="question-meta">
      ${renderQuestionTags(question)}
    </div>
    ${multiHint}
    <div class="question-text">${escapeHtml(question.question)}</div>
    <div class="options ${isMultiple ? "multi-options" : "single-options"}">${optionsHtml}</div>
  `;

  $("questionCard").querySelectorAll("input").forEach((input) => input.addEventListener("change", saveAnswerFromDom));
  renderQuestionSelector();
}

function renderQuestionTags(question) {
  const isMultiple = question.type === "multiple";
  const typeLabel = isMultiple ? t("multipleAnswers") : t("singleAnswer");
  const typeIcon = isMultiple ? "☑" : "○";
  const typeTag = `<span class="tag ${isMultiple ? "tag-emphasis" : ""}"><span aria-hidden="true">${typeIcon}</span> ${escapeHtml(typeLabel)}</span>`;
  const topics = question.topics || [];
  const visibleTopics = topics.slice(0, 2).map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`);
  const remaining = topics.length - visibleTopics.length;
  const moreTag = remaining > 0 ? `<span class="tag tag-muted">+${remaining} ${escapeHtml(t("moreTopics"))}</span>` : "";
  return [typeTag, ...visibleTopics, moreTag].filter(Boolean).join("");
}

function updateActionButtonLabels() {
  const question = state.selectedQuestions[state.currentIndex];
  const isLastQuestion = question && state.currentIndex === state.selectedQuestions.length - 1;
  const unsureActive = question && Boolean(state.unsure[question.id]);
  const controls = [
    ["saveButton", t("saveProgress")],
    ["exitButton", t("exitExamTooltip")],
    ["prevButton", t("previousQuestionTooltip")],
    ["nextButton", t("nextQuestionTooltip")],
    ["finishNowButton", t("finishSimulationTooltip")],
    ["unsureButton", unsureActive ? t("removeUnsureTooltip") : t("markUnsureTooltip")]
  ];
  controls.forEach(([id, label]) => {
    const el = $(id);
    if (!el) return;
    el.title = label;
    el.setAttribute("aria-label", label);
  });
  const timer = $("timerPill");
  if (timer) {
    timer.title = t("examTimerTooltip");
    timer.setAttribute("aria-label", t("examTimerTooltip"));
  }
  const selector = $("questionSelector");
  if (selector) {
    selector.title = t("goToQuestion");
    selector.setAttribute("aria-label", t("goToQuestion"));
  }
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
  if (state.currentIndex >= state.selectedQuestions.length - 1) return;
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
  const selector = $("questionSelector");
  if (!selector) return;
  const rows = state.selectedQuestions
    .map((question, index) => ({ question, index, status: getQuestionStatus(question.id) }));
  selector.innerHTML = rows.length ? rows.map((item) => `
    <option value="${item.index}" ${item.index === state.currentIndex ? "selected" : ""}>${questionSelectorLabel(item.index, item.status)}</option>
  `).join("") : `<option>${t("noQuestionsFilter")}</option>`;
}

function questionSelectorLabel(index, status) {
  const number = index + 1;
  if (status === "unsure") return t("selectorQuestionUnsure", { number });
  if (status === "unanswered") return t("selectorQuestionUnanswered", { number });
  return t("selectorQuestionAnswered", { number });
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
  state.resultReviewFilters = [];
  state.resultReviewActiveId = null;
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
  const incorrect = Math.max(0, total - correct - unanswered);
  const percentage = total ? Math.round((correct / total) * 100) : 0;
  return { correct, incorrect, unanswered, total, percentage, passed: percentage >= 85, durationSeconds: state.elapsedSeconds };
}

function isCorrect(question, selected) {
  const selectedSorted = [...selected].sort();
  const correctSorted = [...question.correctAnswers].sort();
  return selectedSorted.length === correctSorted.length && selectedSorted.every((value, index) => value === correctSorted[index]);
}

function renderResults(result) {
  state.lastResult = result;
  if (!Array.isArray(state.resultReviewFilters)) state.resultReviewFilters = ["incorrect"];
  const filterData = getResultFilterData(result);
  const allSelected = state.resultReviewFilters.length === filterData.filters.length;
  const noneSelected = state.resultReviewFilters.length === 0;
  const selectedCount = countResultReviewQuestions(state.resultReviewFilters);
  const filterLabel = getResultFilterLabel(state.resultReviewFilters, filterData.filters);
  const topics = getTopicPerformance(showingAllTopics());
  const topicRows = topics.map((topic) => topicRowHtml(topic)).join("");
  const toggleAllLabel = allSelected ? resultCopy().deselect : resultCopy().all;
  const toggleAllAction = allSelected ? resultCopy().deselectAll : resultCopy().selectAll;

  $("resultSummary").innerHTML = `
    <section class="result-hero-v160">
      <div class="result-score-block-v160">
        <div class="result-eyebrow-v160">${escapeHtml(t("finalResult"))}</div>
        <div class="result-score-v160 ${result.passed ? "pass" : "fail"}">${result.percentage}%</div>
        <div class="result-status-v160 ${result.passed ? "pass" : "fail"}">${escapeHtml(result.passed ? t("passed") : t("notPassed"))}</div>
      </div>
      <div class="result-details-v160">
        <p class="result-message-v160">${escapeHtml(result.passed ? t("passMessage") : t("failMessage"))}</p>
        <div class="result-filter-grid-v160">
          ${filterCardHtml({ id: "__all", label: toggleAllLabel, value: result.total, icon: svgIcon("list"), tone: "neutral", active: allSelected, actionLabel: toggleAllAction })}
          ${filterData.filters.map((filter) => filterCardHtml({ ...filter, active: state.resultReviewFilters.includes(filter.id) })).join("")}
          <button type="button" class="result-review-inline-v160" data-result-action="review" ${noneSelected ? "disabled" : ""} title="${escapeHtml(noneSelected ? resultCopy().selectGroup : `${resultCopy().review} ${filterLabel}`)}" aria-label="${escapeHtml(noneSelected ? resultCopy().selectGroup : `${resultCopy().review} ${filterLabel}`)}">
            <span class="result-review-inline-icon-v160">${svgIcon("review")}</span>
            <span class="result-review-inline-text-v160">
              <strong>${escapeHtml(noneSelected ? resultCopy().selectGroup : `${resultCopy().review} ${filterLabel}`)}</strong>
              <small>${escapeHtml(noneSelected ? resultCopy().chooseOne : resultCopy().selectedQuestions(selectedCount))}</small>
            </span>
          </button>
        </div>
      </div>
    </section>

    <section class="topic-performance-v160">
      <div class="topic-performance-head-v160">
        <h3>${escapeHtml(resultCopy().topicPerformance)}</h3>
      </div>
      <div class="topic-performance-grid-v160">${topicRows}</div>
      <button type="button" class="topic-toggle-v160" data-result-action="toggle-topics">
        ${svgIcon("list")} ${escapeHtml(showingAllTopics() ? resultCopy().showCriticalTopics : resultCopy().showAllTopics)}
      </button>
    </section>
  `;
  renderReview({ hidden: true });
}

function resultCopy() {
  if (settings.lang === "en") {
    return {
      all: "All",
      deselect: "Deselect",
      selectAll: "Select all",
      deselectAll: "Deselect all",
      review: "Review",
      selectGroup: "Select a group",
      chooseOne: "Choose at least one question type to review.",
      selectedQuestions: (count) => `${count} question${count === 1 ? "" : "s"} selected for review.`,
      backToConfig: "Back to setup.",
      home: "Home",
      backHome: "Return to the home screen.",
      topicPerformance: "Performance by topic",
      showAllTopics: "Show all topics",
      showCriticalTopics: "Show only critical areas",
      errorsOf: (missed, total) => `${missed} error${missed === 1 ? "" : "s"} of ${total}`,
      correct: "correct",
      incorrect: "incorrect",
      unanswered: "unanswered",
      unsure: "unsure",
      allAnswers: "all answers"
    };
  }
  return {
    all: "Todas",
    deselect: "Desmarcar",
    selectAll: "Selecionar todas",
    deselectAll: "Desmarcar todas",
    review: "Revisar",
    selectGroup: "Selecione um grupo",
    chooseOne: "Escolha ao menos um tipo de questão para revisar.",
    selectedQuestions: (count) => `${count} ${count === 1 ? "questão selecionada" : "questões selecionadas"} para revisão.`,
    backToConfig: "Volta para configuração.",
    home: "Início",
    backHome: "Retorna à página inicial.",
    topicPerformance: "Desempenho por tópico",
    showAllTopics: "Mostrar todos os tópicos",
    showCriticalTopics: "Mostrar só áreas críticas",
    errorsOf: (missed, total) => `${missed} ${missed === 1 ? "erro" : "erros"} de ${total}`,
    correct: "corretas",
    incorrect: "erros",
    unanswered: "não respondidas",
    unsure: "dúvidas",
    allAnswers: "todas as respostas"
  };
}

function getResultFilterData(result) {
  const copy = resultCopy();
  return {
    filters: [
      { id: "correct", label: t("correctPlural"), value: result.correct, tone: "good", icon: svgIcon("check") },
      { id: "incorrect", label: t("incorrectPlural"), value: result.incorrect, tone: "bad", icon: svgIcon("x") },
      { id: "unanswered", label: t("unansweredPlural"), value: result.unanswered, tone: "neutral", icon: svgIcon("minus") },
      { id: "unsure", label: t("unsurePlural"), value: getUnsureCount(), tone: "neutral", icon: svgIcon("flag") }
    ],
    copy
  };
}

function filterCardHtml({ id, label, value, tone, icon, active, actionLabel }) {
  return `
    <button type="button" class="result-filter-card-v160 ${tone || "neutral"} ${active ? "active" : "inactive"}" data-result-filter="${escapeHtml(id)}" aria-pressed="${active ? "true" : "false"}" title="${escapeHtml(actionLabel || label)}" aria-label="${escapeHtml(actionLabel || label)}">
      <span class="result-filter-head-v160"><span>${escapeHtml(label)}</span><span class="result-filter-check-v160">${svgIcon("check", "button-icon check-icon-v160")}</span></span>
      <span class="result-filter-foot-v160"><strong>${escapeHtml(String(value))}</strong><span>${icon}</span></span>
    </button>
  `;
}

function getResultQuestionStatus(question) {
  const selected = state.answers[question.id] || [];
  if (!selected.length) return "unanswered";
  return isCorrect(question, selected) ? "correct" : "incorrect";
}

function getUnsureCount() {
  return state.selectedQuestions.filter((question) => Boolean(state.unsure[question.id])).length;
}

function questionMatchesResultFilter(question, filters) {
  if (!filters || !filters.length) return false;
  if (filters.includes("unsure") && state.unsure[question.id]) return true;
  const status = getResultQuestionStatus(question);
  return filters.includes(status);
}

function countResultReviewQuestions(filters) {
  return state.selectedQuestions.filter((question) => questionMatchesResultFilter(question, filters)).length;
}

function getResultFilterLabel(filters, filterData) {
  const copy = resultCopy();
  if (!filters.length) return copy.selectGroup;
  if (filters.length === filterData.length) return copy.allAnswers;
  const labelMap = { correct: copy.correct, incorrect: copy.incorrect, unanswered: copy.unanswered, unsure: copy.unsure };
  const labels = filters.map((id) => labelMap[id]).filter(Boolean);
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} ${settings.lang === "en" ? "and" : "e"} ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")} ${settings.lang === "en" ? "and" : "e"} ${labels[labels.length - 1]}`;
}

function showingAllTopics() {
  return $("resultSummary")?.dataset.showAllTopics === "true";
}

function toggleTopicVisibility() {
  const node = $("resultSummary");
  if (!node) return;
  node.dataset.showAllTopics = showingAllTopics() ? "false" : "true";
  renderResults(state.lastResult || calculateScore());
}

function getTopicPerformance(showAll = false) {
  const map = new Map();
  state.selectedQuestions.forEach((question) => {
    const topics = Array.isArray(question.topics) && question.topics.length ? question.topics : ["Uncategorized"];
    const status = getResultQuestionStatus(question);
    topics.forEach((topic) => {
      if (!map.has(topic)) map.set(topic, { title: topic, total: 0, missed: 0, correct: 0 });
      const item = map.get(topic);
      item.total += 1;
      if (status === "correct") item.correct += 1;
      else item.missed += 1;
    });
  });
  const rows = Array.from(map.values()).map((item) => ({
    ...item,
    score: item.total ? Math.round((item.correct / item.total) * 100) : 0
  })).sort((a, b) => a.score - b.score || b.missed - a.missed || a.title.localeCompare(b.title));
  return showAll ? rows : rows.slice(0, 3);
}

function topicRowHtml(topic) {
  const tone = topic.score < 60 ? "bad" : topic.score >= 85 ? "good" : "neutral";
  return `
    <article class="topic-row-v160 ${tone}">
      <div>
        <div class="topic-title-v160">${escapeHtml(topic.title)}</div>
        <div class="topic-bar-v160"><span style="width: ${Math.max(0, Math.min(100, topic.score))}%"></span></div>
      </div>
      <div class="topic-score-v160">${topic.score}%</div>
      <div class="topic-errors-v160">${escapeHtml(resultCopy().errorsOf(topic.missed, topic.total))}</div>
    </article>
  `;
}

function handleResultClick(event) {
  const filterButton = event.target.closest("[data-result-filter]");
  if (filterButton) {
    const filter = filterButton.dataset.resultFilter;
    if (filter === "__all") {
      const allIds = getResultFilterData(state.lastResult || calculateScore()).filters.map((item) => item.id);
      state.resultReviewFilters = state.resultReviewFilters.length === allIds.length ? [] : allIds;
    } else {
      state.resultReviewFilters = state.resultReviewFilters.includes(filter)
        ? state.resultReviewFilters.filter((item) => item !== filter)
        : [...state.resultReviewFilters, filter];
    }
    renderResults(state.lastResult || calculateScore());
    return;
  }
  const actionButton = event.target.closest("[data-result-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.resultAction;
  if (action === "toggle-topics") toggleTopicVisibility();
  if (action === "review") showFilteredReview();
}

function showFilteredReview() {
  if (!state.resultReviewFilters.length) return;
  renderReview({ hidden: false });
  $("reviewContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startNewAttemptFromResult() {
  clearCurrentExam();
  setScreen("home");
  switchHomeTab("config");
  renderResumeCard();
  loadAttemptHistory();
}

function goHomeFromResult() {
  clearCurrentExam();
  setScreen("home");
  switchHomeTab("config");
  renderResumeCard();
  loadAttemptHistory();
}

function renderReview(options = {}) {
  const hidden = options.hidden !== false;
  const container = $("reviewContainer");
  if (!container) return;
  container.hidden = hidden;
  if (hidden) {
    container.innerHTML = "";
    return;
  }
  const filteredQuestions = state.selectedQuestions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => questionMatchesResultFilter(question, state.resultReviewFilters))
    .sort((a, b) => {
      const order = { incorrect: 0, unanswered: 1, unsure: 2, correct: 3 };
      const aStatus = getResultQuestionStatus(a.question);
      const bStatus = getResultQuestionStatus(b.question);
      return (order[aStatus] ?? 9) - (order[bStatus] ?? 9) || a.index - b.index;
    });
  if (!filteredQuestions.length) {
    container.innerHTML = `<div class="review-empty-v160">${escapeHtml(t("noQuestionsFilter"))}</div>`;
    return;
  }
  container.innerHTML = filteredQuestions.map(({ question, index }) => reviewItemHtml(question, index)).join("");
}

function reviewItemHtml(question, index) {
  const selected = state.answers[question.id] || [];
  const status = getResultQuestionStatus(question);
  const optionList = sortOptions(question.options || []).map((option) => {
    const klass = optionHighlightClass(question, option.id, selected);
    return `<div class="option-row ${klass}"><span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span></div>`;
  }).join("");
  const userAnswer = selected.length ? selected.join(", ") : t("unanswered");
  return `
    <article class="review-item review-item-v160 ${status}">
      <div class="review-item-head-v160">
        <h3>${escapeHtml(t("question"))} ${index + 1}</h3>
        <span>${escapeHtml(statusLabelFor(status))}${state.unsure[question.id] ? ` · ${escapeHtml(t("unsure"))}` : ""}</span>
      </div>
      <div class="question-text">${escapeHtml(question.question)}</div>
      <div class="options">${optionList}</div>
      <div class="review-label">${escapeHtml(t("yourAnswer"))}</div>
      <div>${escapeHtml(userAnswer)}</div>
      <div class="review-label">${escapeHtml(t("correctAnswer"))}</div>
      <div>${escapeHtml(question.correctAnswers.join(", "))}</div>
      <div class="review-label">${escapeHtml(t("explanation"))}</div>
      <div>${escapeHtml(question.explanation)}</div>
    </article>
  `;
}

function svgIcon(name, className = "button-icon") {
  const icons = {
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
    review: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"/><path d="m9 11 2 2 4-5"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    minus: '<path d="M5 12h14"/>',
    flag: '<path d="M5 22V4"/><path d="M5 4h12l-2 5 2 5H5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>'
  };
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ""}</svg>`;
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
    selectedTopics: state.selectedTopics,
    questionCount: state.questionCount,
    elapsedSeconds: state.elapsedSeconds,
    currentExamId: state.currentExamId,
    language: state.currentExamLanguage || getActiveLanguage(),
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
  if (saved.language && saved.language !== getActiveLanguage()) {
    settings.lang = saved.language === "en" ? "en" : "pt-BR";
    saveSettings();
    setActiveQuestionBank();
    renderTopicSelector();
    applyLanguage();
  }
  state.selectedQuestions = saved.selectedQuestions;
  state.currentIndex = saved.currentIndex || 0;
  state.answers = saved.answers || {};
  state.unsure = saved.unsure || {};
  state.selectedTopics = saved.selectedTopics || [];
  state.questionCount = saved.questionCount || saved.selectedQuestions.length;
  state.elapsedSeconds = saved.elapsedSeconds || 0;
  state.currentExamId = saved.currentExamId || `exam-${Date.now()}`;
  state.currentExamLanguage = saved.language || getActiveLanguage();
  state.lastSavedAt = saved.savedAt || null;
  state.finished = false;
  state.dirty = false;
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
  const savedTab = $("savedTab");
  if (!resumeScreen || !container) return;
  const saved = getSavedExam();
  if (!saved) {
    if (savedTab) {
      savedTab.disabled = true;
      savedTab.classList.remove("has-saved");
      savedTab.setAttribute("aria-disabled", "true");
      savedTab.setAttribute("aria-label", t("noSavedTabTooltip"));
      savedTab.title = t("noSavedTabTooltip");
    }
    resumeScreen.hidden = true;
    container.innerHTML = "";
    if ($("savedPanel") && !$('configPanel').classList.contains('active') && !$('historyPanel').classList.contains('active')) switchHomeTab("config");
    return;
  }
  if (savedTab) {
    savedTab.disabled = false;
    savedTab.classList.add("has-saved");
    savedTab.removeAttribute("aria-disabled");
    savedTab.setAttribute("aria-label", t("savedTabTooltip"));
    savedTab.title = t("savedTabTooltip");
  }
  resumeScreen.hidden = false;
  const answeredCount = Object.values(saved.answers || {}).filter((arr) => Array.isArray(arr) && arr.length).length;
  const unsureCount = Object.values(saved.unsure || {}).filter(Boolean).length;
  container.innerHTML = `
    <div class="resume-grid resume-grid-v150">
      <div class="stat"><span>${t("questions")}</span><strong>${saved.selectedQuestions.length}</strong></div>
      <div class="stat"><span>${t("answeredPlural")}</span><strong>${answeredCount}</strong></div>
      <div class="stat"><span>${t("unsurePlural")}</span><strong>${unsureCount}</strong></div>
      <div class="stat"><span>${t("elapsedTime")}</span><strong>${formatDuration(saved.elapsedSeconds || 0)}</strong></div>
    </div>
    <p class="muted-line">${t("savedAt")}: ${formatDate(saved.savedAt)}</p>
    <div class="resume-actions resume-actions-v150">
      <button type="button" class="primary" id="resumeSavedButton">${t("resumeSimulation")}</button>
      <button type="button" class="secondary icon-only-danger" id="discardSavedButton" title="${t("discardSavedExam")}" aria-label="${t("discardSavedExam")}">
        <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg>
      </button>
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
    language: state.currentExamLanguage || getActiveLanguage(),
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
  container.className = "history-cards";
  container.innerHTML = history.slice(0, 8).map((item) => `
    <article class="history-card-v150">
      <div class="history-score">${item.score}%</div>
      <div class="history-main">
        <div class="history-meta"><strong>${item.questionCount}</strong> ${t("questions")}</div>
        <div class="history-date">${formatDate(item.dateTime)}</div>
        <div class="history-topics">${escapeHtml((item.topics || []).slice(0, 5).join(", "))}${(item.topics || []).length > 5 ? "…" : ""}</div>
      </div>
      <div class="history-version">${escapeHtml(item.appVersion || "-")}</div>
    </article>
  `).join("");
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.history)) || []; }
  catch { return []; }
}

function setScreen(name) {
  document.body.dataset.screen = name;
  $("homeScreen").classList.toggle("active", name === "home");
  $("examScreen").classList.toggle("active", name === "exam");
  $("resultScreen").classList.toggle("active", name === "result");
  if (name !== "exam") stopTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function statusLabelFor(status) {
  return { unanswered: t("unanswered"), answered: t("answered"), unsure: t("unsure"), correct: t("correct"), incorrect: t("incorrect") }[status] || status;
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


/* -------------------------------------------------------
   v1.7.0 - Focused result review overrides
------------------------------------------------------- */

function resultCopy() {
  if (settings.lang === "en") {
    return {
      all: "All",
      review: "Review answers",
      finalResult: "Final result",
      notPassed: "Not passed",
      passed: "Passed",
      correct: "Correct",
      incorrect: "Errors",
      unanswered: "Unanswered",
      unsure: "Marked",
      marked: "Marked",
      duration: "Time",
      completion: "Completion",
      topic: "Topic",
      questionMap: "Question map",
      questionMapHelp: "",
      previous: "Previous",
      next: "Next",
      close: "Close",
      yourAnswer: "Your answer",
      correctAnswer: "Correct answer",
      explanation: "Explanation",
      noQuestionsFilter: "No questions match the selected filters.",
      selected: "Selected",
      resultCount: (shown, total) => `${shown} of ${total}`,
      questionCounter: (current, total) => `${current}/${total}`,
      mapCounter: (current, total) => `Q${current}/${total}`
    };
  }
  return {
    all: "Todas",
    review: "Revisão das respostas",
    finalResult: "Resultado final",
    notPassed: "Não aprovado",
    passed: "Aprovado",
    correct: "Corretas",
    incorrect: "Erradas",
    unanswered: "Sem resposta",
    unsure: "Dúvidas",
    marked: "Dúvidas",
    duration: "Tempo",
    completion: "Conclusão",
    topic: "Tópico",
    questionMap: "Mapa das questões",
    questionMapHelp: "",
    previous: "Anterior",
    next: "Próxima",
    close: "Fechar",
    yourAnswer: "Sua resposta",
    correctAnswer: "Resposta correta",
    explanation: "Explicação",
    noQuestionsFilter: "Nenhuma questão corresponde aos filtros selecionados.",
    selected: "Selecionado",
    resultCount: (shown, total) => `${shown} de ${total}`,
    questionCounter: (current, total) => `${current}/${total}`,
    mapCounter: (current, total) => `Q${current}/${total}`
  };
}

function getResultFilterData(result) {
  const copy = resultCopy();
  return {
    filters: [
      { id: "correct", label: copy.correct, value: result.correct, tone: "good", icon: svgIcon("check") },
      { id: "incorrect", label: copy.incorrect, value: result.incorrect, tone: "bad", icon: svgIcon("x") },
      { id: "unanswered", label: copy.unanswered, value: result.unanswered, tone: "neutral", icon: svgIcon("minus") },
      { id: "unsure", label: copy.marked, value: getUnsureCount(), tone: "marked", icon: svgIcon("flag") }
    ],
    copy
  };
}

function getFilteredReviewItems() {
  const filters = Array.isArray(state.resultReviewFilters) ? state.resultReviewFilters : [];
  return state.selectedQuestions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => !filters.length || questionMatchesResultFilter(question, filters));
}

function ensureActiveReviewQuestion(items) {
  if (!items.length) {
    state.resultReviewActiveId = null;
    return null;
  }
  const current = items.find((item) => item.question.id === state.resultReviewActiveId);
  if (current) return current;
  state.resultReviewActiveId = items[0].question.id;
  return items[0];
}

function currentReviewPosition(items, activeId = state.resultReviewActiveId) {
  const idx = items.findIndex((item) => item.question.id === activeId);
  return idx >= 0 ? idx : 0;
}

function renderResults(result) {
  state.lastResult = result;
  if (!Array.isArray(state.resultReviewFilters)) state.resultReviewFilters = [];

  const copy = resultCopy();
  const filterData = getResultFilterData(result);
  const items = getFilteredReviewItems();
  const activeItem = ensureActiveReviewQuestion(items);
  const activeIndex = activeItem ? currentReviewPosition(items, activeItem.question.id) : 0;

  const summary = `
    <section class="v170-page-head">
      <div>
        <h2>${escapeHtml(copy.review)}</h2>
      </div>
    </section>

    <section class="v170-summary-panel" aria-label="${escapeHtml(copy.finalResult)}">
      <div class="v170-main-stats">
        <div class="v170-score-card ${result.passed ? "pass" : "fail"}">
          <span>${escapeHtml(copy.finalResult)}</span>
          <strong>${result.percentage}%</strong>
          <small>${escapeHtml(result.passed ? copy.passed : copy.notPassed)}</small>
        </div>
        <div class="v170-time-card">
          <span>${svgIcon("clock")} ${escapeHtml(copy.duration)}</span>
          <strong>${escapeHtml(formatDuration(result.durationSeconds))}</strong>
          <small>${escapeHtml(copy.completion)}</small>
        </div>
      </div>

      <div class="v170-filter-cards" aria-label="${escapeHtml(copy.questionMap)}">
        ${filterData.filters.map((filter) => resultStatusCardHtml(filter)).join("")}
      </div>

    </section>

    ${items.length ? focusedReviewLayoutHtml({ items, activeItem, activeIndex, copy, result }) : `<div class="v170-empty">${escapeHtml(copy.noQuestionsFilter)}</div>`}
  `;

  const resultSummary = $("resultSummary");
  if (resultSummary) resultSummary.innerHTML = summary;
  const reviewContainer = $("reviewContainer");
  if (reviewContainer) {
    reviewContainer.hidden = true;
    reviewContainer.innerHTML = "";
  }
}

function resultStatusCardHtml(filter) {
  const active = Array.isArray(state.resultReviewFilters) && state.resultReviewFilters.includes(filter.id);
  return `
    <button type="button" class="v170-status-card ${escapeHtml(filter.tone)} ${active ? "active" : ""}" data-v170-filter="${escapeHtml(filter.id)}" aria-pressed="${active ? "true" : "false"}">
      <span class="v170-status-card-label">${escapeHtml(filter.label)}</span>
      <strong>${escapeHtml(String(filter.value))}</strong>
      <span class="v170-card-selected" aria-hidden="true">${svgIcon("check")}</span>
    </button>
  `;
}

function resultFilterPillHtml(filter) {
  const active = Array.isArray(state.resultReviewFilters) && state.resultReviewFilters.includes(filter.id);
  return `
    <button type="button" class="v170-filter-pill ${active ? "active" : ""}" data-v170-filter="${escapeHtml(filter.id)}" aria-pressed="${active ? "true" : "false"}">
      ${escapeHtml(filter.label)}
    </button>
  `;
}

function focusedReviewLayoutHtml({ items, activeItem, activeIndex, copy, result }) {
  const question = activeItem.question;
  const index = activeItem.index;
  const countLabel = copy.questionCounter(activeIndex + 1, items.length);
  return `
    <section class="v170-review-layout">
      <aside class="v170-question-map" aria-label="${escapeHtml(copy.questionMap)}">
        <div class="v170-map-head">
          <div>
            <h3>${escapeHtml(copy.questionMap)}</h3>
          </div>
        </div>
        <div class="v170-map-grid">
          ${items.map((item) => questionMapButtonHtml(item.question, item.index, item.question.id === question.id)).join("")}
        </div>
        <div class="v170-map-legend">
          <span><i class="good"></i>${escapeHtml(copy.correct)}</span>
          <span><i class="bad"></i>${escapeHtml(copy.incorrect)}</span>
          <span><i class="neutral"></i>${escapeHtml(copy.unanswered)}</span>
          <span><i class="marked"></i>${escapeHtml(copy.marked)}</span>
        </div>
      </aside>

      <article class="v170-question-card">
        ${reviewQuestionHtml(question, index, countLabel, copy)}
      </article>
    </section>

    <nav class="v170-mobile-nav" aria-label="Navegação da revisão">
      <button type="button" class="v170-nav-button secondary" data-v170-nav="prev">← ${escapeHtml(copy.previous)}</button>
      <button type="button" class="v170-nav-button map" data-v170-map="open">
        ${svgIcon("grid")}<span>${escapeHtml(copy.questionMap.split(" ")[0])}</span><small>${escapeHtml(copy.mapCounter(activeIndex + 1, items.length))}</small>
      </button>
      <button type="button" class="v170-nav-button primary" data-v170-nav="next">${escapeHtml(copy.next)} →</button>
    </nav>

    <section class="v170-mobile-map-sheet" data-v170-sheet hidden>
      <button type="button" class="v170-sheet-backdrop" data-v170-map="close" aria-label="${escapeHtml(copy.close)}"></button>
      <div class="v170-sheet-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(copy.questionMap)}">
        <div class="v170-sheet-handle"></div>
        <div class="v170-map-head">
          <div>
            <h3>${escapeHtml(copy.questionMap)}</h3>
          </div>
          <button type="button" class="v170-sheet-close" data-v170-map="close">${escapeHtml(copy.close)}</button>
        </div>
        <div class="v170-map-grid mobile">
          ${items.map((item) => questionMapButtonHtml(item.question, item.index, item.question.id === question.id)).join("")}
        </div>
        <div class="v170-map-legend mobile">
          <span><i class="good"></i>${escapeHtml(copy.correct)}</span>
          <span><i class="bad"></i>${escapeHtml(copy.incorrect)}</span>
          <span><i class="neutral"></i>${escapeHtml(copy.unanswered)}</span>
          <span><i class="marked"></i>${escapeHtml(copy.marked)}</span>
        </div>
      </div>
    </section>
  `;
}

function questionMapButtonHtml(question, index, active) {
  const status = getResultQuestionStatus(question);
  const marked = Boolean(state.unsure[question.id]);
  return `
    <button type="button" class="v170-map-button ${escapeHtml(status)} ${marked ? "marked" : ""} ${active ? "active" : ""}" data-v170-question="${escapeHtml(question.id)}" aria-label="${escapeHtml(t("question"))} ${index + 1}" aria-current="${active ? "true" : "false"}">
      ${index + 1}
      ${marked ? `<span></span>` : ""}
    </button>
  `;
}

function reviewQuestionHtml(question, index, countLabel, copy) {
  const selected = state.answers[question.id] || [];
  const status = getResultQuestionStatus(question);
  const marked = Boolean(state.unsure[question.id]);
  const optionList = sortOptions(question.options || []).map((option) => {
    const klass = optionHighlightClass(question, option.id, selected);
    const isUserAnswer = selected.includes(option.id);
    const isCorrectAnswer = question.correctAnswers.includes(option.id);
    const badges = [
      isUserAnswer ? `<span class="v170-answer-badge user">${escapeHtml(copy.yourAnswer)}</span>` : "",
      isCorrectAnswer ? `<span class="v170-answer-badge correct">${escapeHtml(copy.correctAnswer)}</span>` : ""
    ].join("");
    return `<div class="v170-option ${klass}"><span><strong>${escapeHtml(option.id)})</strong> ${escapeHtml(option.text)}</span>${badges}</div>`;
  }).join("");
  const userAnswer = selected.length ? selected.join(", ") : t("unanswered");

  return `
    <div class="v170-question-head">
      <div class="v170-question-tags">
        <span class="v170-question-number">${escapeHtml(t("question"))} ${index + 1}</span>
        <span class="v170-status-badge ${escapeHtml(status)}">${escapeHtml(statusLabelFor(status))}</span>
        ${marked ? `<span class="v170-status-badge marked">${escapeHtml(copy.marked)}</span>` : ""}
      </div>
    </div>
    <h3>${escapeHtml(question.question)}</h3>
    <p class="v170-topic">${escapeHtml(copy.topic)}: ${escapeHtml((question.topics || []).join(", ") || "Uncategorized")}</p>
    <div class="v170-options">${optionList}</div>
    <section class="v170-answer-summary">
      <div>
        <span>${escapeHtml(copy.yourAnswer)}</span>
        <strong>${escapeHtml(userAnswer)}</strong>
      </div>
      <div class="correct">
        <span>${escapeHtml(copy.correctAnswer)}</span>
        <strong>${escapeHtml(question.correctAnswers.join(", "))}</strong>
      </div>
    </section>
    <section class="v170-explanation">
      <span>${escapeHtml(copy.explanation)}</span>
      <p>${escapeHtml(question.explanation)}</p>
    </section>
  `;
}

function handleResultClick(event) {
  const filterButton = event.target.closest("[data-v170-filter]");
  if (filterButton) {
    const filter = filterButton.dataset.v170Filter;
    if (filter === "__all") {
      state.resultReviewFilters = [];
    } else {
      const current = Array.isArray(state.resultReviewFilters) ? state.resultReviewFilters : [];
      state.resultReviewFilters = current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter];
    }
    const items = getFilteredReviewItems();
    ensureActiveReviewQuestion(items);
    renderResults(state.lastResult || calculateScore());
    return;
  }

  const questionButton = event.target.closest("[data-v170-question]");
  if (questionButton) {
    state.resultReviewActiveId = questionButton.dataset.v170Question;
    closeMobileReviewMap();
    renderResults(state.lastResult || calculateScore());
    return;
  }

  const navButton = event.target.closest("[data-v170-nav]");
  if (navButton) {
    moveFocusedReview(navButton.dataset.v170Nav);
    return;
  }

  const mapButton = event.target.closest("[data-v170-map]");
  if (mapButton) {
    if (mapButton.dataset.v170Map === "open") openMobileReviewMap();
    if (mapButton.dataset.v170Map === "close") closeMobileReviewMap();
    return;
  }

  const actionButton = event.target.closest("[data-result-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.resultAction;
  if (action === "toggle-topics") toggleTopicVisibility();
}

function moveFocusedReview(direction) {
  const items = getFilteredReviewItems();
  if (!items.length) return;
  const currentIndex = currentReviewPosition(items);
  const nextIndex = direction === "prev"
    ? Math.max(0, currentIndex - 1)
    : Math.min(items.length - 1, currentIndex + 1);
  state.resultReviewActiveId = items[nextIndex].question.id;
  renderResults(state.lastResult || calculateScore());
}

function openMobileReviewMap() {
  const sheet = document.querySelector("[data-v170-sheet]");
  if (sheet) sheet.hidden = false;
}

function closeMobileReviewMap() {
  const sheet = document.querySelector("[data-v170-sheet]");
  if (sheet) sheet.hidden = true;
}

function showFilteredReview() {
  renderResults(state.lastResult || calculateScore());
  $("resultSummary")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderReview(options = {}) {
  const container = $("reviewContainer");
  if (!container) return;
  container.hidden = true;
  container.innerHTML = "";
}
