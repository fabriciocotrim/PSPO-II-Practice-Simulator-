(function registerQuestionRepository(global) {
  async function loadBank(profile, language, errorMessage) {
    return global.ExamRepository.fetchJson(global.ExamRepository.questionBankPath(profile, language), errorMessage);
  }

  async function loadBanks(profile, languages, errorMessage) {
    const banks = {};
    await Promise.all((languages || []).map(async (language) => {
      banks[language] = await loadBank(profile, language, errorMessage);
    }));
    return banks;
  }

  global.QuestionRepository = Object.freeze({
    loadBank,
    loadBanks
  });
})(window);
