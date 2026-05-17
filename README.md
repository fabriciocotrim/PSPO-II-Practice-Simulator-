# PSPO II Practice Simulator

Simulador bilíngue independente para prática da certificação PSPO II.

## Versão atual

v2.2.0 — Histórico analítico e revisão de tentativas

URL de teste:

https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.2.0

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

A engine white-label criada na v2.1.0 permanece ativa e isolada por `examId`.

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

O exame ativo continua definido em `/app/app-profile.js`:

```js
window.APP_PROFILE = Object.freeze({
  activeExamId: "pspo-ii",
  examBasePath: "exams/pspo-ii"
});
```

Nesta versão, o único app concreto continua sendo o PSPO II Practice Simulator.

## Histórico e revisão

A v2.2.0 melhora o histórico com:

- cards analíticos de tentativas, média, melhor resultado e último resultado;
- lista paginada com 5 tentativas por página;
- revisão de tentativas salvas com snapshot completo para novas tentativas;
- fallback seguro para tentativas antigas sem dados suficientes;
- botão de revisão esmaecido quando a revisão detalhada não estiver disponível;
- exclusão individual de tentativas com confirmação e recálculo imediato da análise;
- botão de retorno ao histórico quando a revisão for aberta a partir de tentativa histórica.

## Storage

As chaves seguem isoladas por `examId`:

```txt
pspo-ii:settings
pspo-ii:attemptHistory
pspo-ii:lastAttempt
pspo-ii:currentExam
```

A migração de chaves legadas da v2.0.1 permanece preservada:

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
- Não há alteração nos bancos de questões.
- IDs das questões devem permanecer pareados entre idiomas.
- Gabaritos PT/EN devem permanecer equivalentes.
- O simulado não deve misturar idiomas.
- Nem todas as questões precisam ter 5 alternativas.
- Bancos de questões não devem ser alterados sem pedido explícito.

## Release name

v2.2.0 — Histórico analítico e revisão de tentativas

## Release notes

- Melhorada a visão de histórico com indicadores analíticos simples.
- Histórico passa a exibir 5 tentativas por página.
- Adicionada paginação simples no histórico.
- Adicionada revisão de tentativas salvas no histórico.
- Adicionado botão para voltar ao histórico quando a revisão é aberta por tentativa histórica.
- Adicionada exclusão de tentativas do histórico com confirmação.
- Atualizada a análise do histórico após exclusão de itens.
- Ajustados títulos das telas de histórico e retomada de simulado.
- Ajustado estado visual do botão Revisar quando a revisão detalhada não está disponível.
- Mantida a Engine white-label da v2.1.0.
- Mantido PSPO II como único app concreto desta versão.
- Mantido suporte bilíngue PT/EN.
- Mantida revisão final/focada.
- Mantidos bancos de questões sem alteração de conteúdo.
- Atualizados `APP_VERSION`, `CACHE_NAME`, `manifest.json` e `README.md`.
- URL de teste: https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.2.0

## Aviso

Este app é independente. Não é produto oficial, afiliado, validado nem endossado pela Scrum.org.
