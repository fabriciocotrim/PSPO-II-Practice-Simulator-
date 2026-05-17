(function registerExamRepository(global) {
  function normalizeBasePath(path) {
    return String(path || "").replace(/^\/+|\/+$/g, "");
  }

  function resolveProfile(profile) {
    const activeExamId = profile?.activeExamId || "default";
    const examBasePath = normalizeBasePath(profile?.examBasePath || `exams/${activeExamId}`);
    return { activeExamId, examBasePath };
  }

  async function fetchJson(path, errorMessage) {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(errorMessage || `Could not load ${path}`);
    return response.json();
  }

  async function loadConfig(profile, errorMessage) {
    const { examBasePath } = resolveProfile(profile);
    return fetchJson(`${examBasePath}/exam-config.json`, errorMessage);
  }

  async function loadTopics(profile, errorMessage) {
    const { examBasePath } = resolveProfile(profile);
    return fetchJson(`${examBasePath}/topics.json`, errorMessage);
  }

  function questionBankPath(profile, language) {
    const { examBasePath } = resolveProfile(profile);
    return `${examBasePath}/questions.${language}.json`;
  }

  global.ExamRepository = Object.freeze({
    resolveProfile,
    fetchJson,
    loadConfig,
    loadTopics,
    questionBankPath
  });
})(window);
