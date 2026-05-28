# PSPO I Practice Simulator

Simulador independente para preparação ao exame PSPO I, com interface em português brasileiro e banco de questões em inglês.

## Versão atual

v2.3.2 — Pivot PSPO I + Android readiness

URL de teste:

https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.3.2

> Observação: a URL ainda contém `PSPO-II` por causa do nome atual do repositório. Para publicação comercial e Android, recomenda-se renomear o repositório ou usar domínio próprio.

## Produto

- PWA estático em HTML, CSS e JavaScript puro.
- Hospedagem prevista no GitHub Pages.
- Sem backend, login ou framework.
- Interface em português brasileiro.
- Questões, alternativas e referências de estudo em inglês.
- Banco com 367 questões PSPO I.
- Modo prova com até 80 questões e 60 minutos.
- Seleção por 12 temas.
- Histórico local por dispositivo.
- Revisão de tentativas concluídas.
- Desempenho por tópico na tela de resultado.
- Preparação inicial para empacotamento Android via TWA/Bubblewrap.

## Estrutura white-label preservada

```txt
/app/
  app-profile.js
/data/
  exam-repository.js
  question-repository.js
/exams/
  /pspo-i/
    exam-config.json
    topics.json
    questions.pt-BR.json
```

## Perfil ativo do app

```js
window.APP_PROFILE = Object.freeze({
  activeExamId: "pspo-i",
  examBasePath: "exams/pspo-i",
  legacyStorageKeys: Object.freeze({})
});
```

## Storage

As chaves seguem isoladas por `examId`:

```txt
pspo-i:settings
pspo-i:attemptHistory
pspo-i:lastAttempt
pspo-i:currentExam
```

A v2.3.2 não migra histórico antigo do PSPO II, para evitar mistura de dados entre exames.

## Temas

1. Empirismo e Valores do Scrum
2. Scrum Team e Accountabilities
3. Eventos do Scrum
4. Artefatos e Commitments
5. Definition of Done
6. Self-Managing Teams
7. Forecasting e Release Planning
8. Product Vision
9. Product Value e EBM
10. Product Backlog Management
11. Business Strategy
12. Stakeholders e Customers

## Limitações conhecidas

- Histórico apenas local no navegador/dispositivo.
- Sem login, backend ou sincronização entre dispositivos.
- O arquivo técnico do banco principal se chama `questions.pt-BR.json` porque a engine v2.2.0 acopla idioma da interface ao arquivo do banco. O conteúdo das questões está em inglês.
- O tema Business Strategy possui apenas 1 questão; análises desse tema devem ser tratadas como amostra insuficiente.
- Play Store exige publicação em Android App Bundle (`.aab`), ainda não gerado nesta versão.

## Disclaimer

Este material é uma publicação independente de preparação para o exame PSPO I. Não é afiliado, patrocinado, aprovado ou endossado pela Scrum.org. Scrum.org, Professional Scrum, Professional Scrum Product Owner, PSPO e Scrum são marcas de seus respectivos titulares.

O simulador não contém questões oficiais da prova, não reproduz banco oficial de exame e não garante aprovação.

## Release name

v2.3.2 — Pivot PSPO I + Android readiness

## Release notes

- Transformado o app de PSPO II para PSPO I.
- Atualizado `examId` para `pspo-i`.
- Atualizado perfil ativo para `/exams/pspo-i`.
- Inserido banco PSPO I com 367 questões.
- Mantida interface em português com questões e alternativas em inglês.
- Configurado modo prova com até 80 questões e 60 minutos.
- Configurados 12 temas finais do PSPO I.
- Ajustada label de comentário para referência de estudo.
- Mantido histórico local por `examId`.
- Mantida revisão de tentativas concluídas.
- Mantido desempenho por tópico no resultado.
- Atualizados `APP_VERSION`, `CACHE_NAME`, `manifest.json` e `README.md`.
- Incluído disclaimer de independência em relação à Scrum.org.
- Preparado handoff para próxima etapa Android.


## v2.3.2 — Polimento visual, abas e marca

- Paleta visual alinhada ao padrão editorial do Estúdio da Agilidade.
- Remoção do ruído visual do toggle de idioma.
- Histórico com diagnóstico da última tentativa.
- Decomposição dos erros por tópico: p.p. da prova e participação nos erros.
- Evolução recente preparada para expansão analítica na v2.4.0.
