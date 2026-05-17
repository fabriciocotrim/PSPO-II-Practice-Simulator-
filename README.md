# PSPO II Practice Simulator

v2.2.0 — Histórico analítico e revisão de tentativas

PWA estático em HTML, CSS e JavaScript puro para preparação PSPO II, hospedado no GitHub Pages.

URL de teste:

https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.2.0

## Estado do produto

- App específico para preparação PSPO II.
- Interface bilíngue pt-BR/en-US.
- Banco bilíngue com 400 questões em português e 400 em inglês.
- Simulado carrega apenas questões do idioma ativo.
- Revisão final/focada preservada.
- Feedback imediato removido.
- Light mode e dark mode funcionando.
- Desktop e mobile ajustados.
- Não há backend.
- Não há login.
- Não há framework.
- Não há multi-exame para usuário final.

## v2.2.0

Esta versão melhora a tela de histórico e permite revisar tentativas concluídas quando houver snapshot completo salvo.

### Alterações

- Adicionados indicadores do histórico:
  - tentativas;
  - média;
  - melhor resultado;
  - última tentativa.
- Histórico passou a exibir 5 tentativas por página.
- Adicionada paginação simples: anterior / página atual / próxima.
- Indicadores são calculados sobre todo o histórico salvo, não apenas sobre a página visível.
- Novas tentativas passam a salvar snapshot suficiente para revisão posterior:
  - questões sorteadas;
  - respostas do usuário;
  - marcações de dúvida;
  - tópicos;
  - idioma;
  - data/hora;
  - score;
  - versão do app.
- Botão `Revisar` no histórico abre a tela de resultado/revisão existente em modo somente leitura.
- Tentativas antigas sem snapshot completo continuam visíveis no histórico, mas não permitem revisão detalhada.
- Adicionada exclusão individual de tentativas com confirmação.
- A análise do histórico é recalculada após exclusão.
- Histórico limitado a até 50 tentativas por `examId`.
- Mantida a Engine white-label da v2.1.0.
- Mantido PSPO II como único app concreto desta versão.
- Mantido suporte bilíngue PT/EN.
- Mantida revisão final/focada.
- Mantidos bancos de questões sem alteração de conteúdo.

## Arquitetura relevante

```text
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

## Regras técnicas preservadas

- PWA estático.
- HTML/CSS/JS puro.
- Storage isolado por `examId`.
- Sem backend.
- Sem login.
- Sem framework.
- Sem SQLite.
- Sem alteração de conteúdo dos bancos de questões.

## Release name

```text
v2.2.0 — Histórico analítico e revisão de tentativas
```

## Release notes

```text
- Melhorada a visão de histórico com indicadores analíticos simples.
- Histórico passa a exibir 5 tentativas por página.
- Adicionada paginação simples no histórico.
- Indicadores do histórico são calculados sobre todo o histórico salvo.
- Adicionada revisão de tentativas salvas no histórico quando houver snapshot completo.
- Botão Revisar reaproveita a tela de resultado/revisão existente em modo somente leitura.
- Tentativas antigas sem snapshot completo permanecem visíveis, com revisão detalhada indisponível.
- Adicionada exclusão de tentativas do histórico com confirmação.
- Atualizada a análise do histórico após exclusão de itens.
- Histórico limitado a 50 tentativas concluídas por examId.
- Mantida a Engine white-label da v2.1.0.
- Mantido PSPO II como único app concreto desta versão.
- Mantido suporte bilíngue PT/EN.
- Mantida revisão final/focada.
- Mantidos bancos de questões sem alteração de conteúdo.
- Atualizados APP_VERSION, CACHE_NAME, manifest.json e README.md.
- URL de teste: https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.2.0
```
