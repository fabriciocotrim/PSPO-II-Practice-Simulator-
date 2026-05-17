# PSPO II Practice Simulator

Simulador bilíngue independente para prática da certificação PSPO II.

## Versão atual

v2.1.0 — Engine white-label

URL de teste:

https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.1.0

## Produto

- PWA estático em HTML, CSS e JavaScript puro.
- Hospedagem prevista no GitHub Pages.
- Sem backend, login, framework ou multi-exame visível ao usuário.
- Banco bilíngue com 400 questões em português e 400 em inglês.
- Simulado carrega apenas questões do idioma ativo.
- Revisão final/focada preservada.
- Feedback imediato removido.
- Light mode e dark mode preservados.
- Desktop e mobile preservados.

## Estrutura white-label

A v2.1.0 cria uma camada mínima para reutilizar o mesmo motor técnico em apps separados por público.

```txt
/app/
  app-profile.js
/data/
  exam-repository.js
  question-repository.js
/exams/
  /pspo-ii/
    exam-config.json
    topics.json
    questions.pt-BR.json
    questions.en-US.json
```

## Perfil ativo do app

O exame ativo é definido em `/app/app-profile.js`:

```js
window.APP_PROFILE = Object.freeze({
  activeExamId: "pspo-ii",
  examBasePath: "exams/pspo-ii"
});
```

Nesta versão, o único app concreto continua sendo o PSPO II Practice Simulator.

## Carregamento de dados

O app carrega dados por repositórios:

- configuração do exame via `ExamRepository.loadConfig()`;
- grupos/tópicos via `ExamRepository.loadTopics()`;
- questões por idioma via `QuestionRepository.loadBanks()`.

Os caminhos são derivados de `activeExamId` e `examBasePath`, evitando dependência direta do motor ao pacote PSPO II.

## Storage

As novas chaves de storage são derivadas de `examId`:

```txt
pspo-ii:settings
pspo-ii:attemptHistory
pspo-ii:lastAttempt
pspo-ii:currentExam
```

A migração preserva dados legados da v2.0.1 quando encontrados:

```txt
pspoSettings
pspoAttemptHistory
pspoLastAttempt
pspoCurrentExam
```

## Regras mantidas

- PSPO II permanece como único exame da aplicação.
- Não há tela de seleção de exame.
- Não há marketplace de exames.
- Não há backend.
- Não há alteração visual em relação à v2.0.1.
- IDs das questões devem permanecer pareados entre idiomas.
- Gabaritos PT/EN devem permanecer equivalentes.
- O simulado não deve misturar idiomas.
- Nem todas as questões precisam ter 5 alternativas.
- Bancos de questões não devem ser alterados sem pedido explícito.

## Release name

v2.1.0 — Engine white-label

## Release notes

- Criada base técnica para engine white-label.
- Centralizada a definição do exame ativo.
- Reduzidos hardcodes específicos de PSPO II no motor do app.
- Criada camada de acesso a configuração, tópicos e questões.
- Storage preparado para isolamento por `examId`.
- Implementada migração de chaves legadas da v2.0.1 para chaves namespaced.
- Preservado PSPO II como único app concreto desta versão.
- Mantida a experiência visual da v2.0.1.
- Mantido suporte bilíngue PT/EN.
- Mantida revisão final/focada.
- Mantidos bancos de questões sem alteração de conteúdo.
- Atualizados `APP_VERSION`, `CACHE_NAME`, `manifest.json` e `README.md`.
- URL de teste: https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.1.0

## Aviso

Este app é independente. Não é produto oficial, afiliado, validado nem endossado pela Scrum.org.
