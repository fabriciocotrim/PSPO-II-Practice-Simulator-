// v2.3.1 — PSPO I Practice Simulator
// Carrega bancos de questões por idioma técnico da engine. Nesta versão,
// questions.pt-BR.json mantém conteúdo em inglês para preservar a interface PT-BR.
(function registerQuestionRepository(global) {
  const DATA_LAYER_VERSION = "2.3.1";

  function assertQuestionBank(bank, language) {
    if (!Array.isArray(bank)) {
      throw new Error(`Invalid question bank for ${language}`);
    }
    return bank;
  }

  async function loadBank(profile, language, errorMessage) {
    const bank = await global.ExamRepository.fetchJson(
      global.ExamRepository.questionBankPath(profile, language),
      errorMessage
    );
    return assertQuestionBank(bank, language);
  }

  async function loadBanks(profile, languages, errorMessage) {
    const banks = {};
    await Promise.all((languages || []).map(async (language) => {
      banks[language] = await loadBank(profile, language, errorMessage);
    }));
    return banks;
  }

  global.QuestionRepository = Object.freeze({
    version: DATA_LAYER_VERSION,
    loadBank,
    loadBanks
  });
})(window);
