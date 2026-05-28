# Handoff técnico — PSPO I Practice Simulator v2.3.0

## Origem

Esta versão foi implementada a partir do pacote aceito `pspo-ii-practice-simulator-v2.2.0.zip`, preservando layout, CSS, UX aprovada, histórico, revisão e engine white-label.

## Objetivo

Converter a base de PSPO II para PSPO I como produto comercial do Estúdio da Agilidade, mantendo PWA estático em HTML/CSS/JS puro.

## Decisões implementadas

- `examId = pspo-i`.
- Interface em português brasileiro.
- Questões e alternativas em inglês.
- 367 questões carregadas no banco.
- 12 temas finais PSPO I.
- Modo prova: até 80 questões, 60 minutos.
- Suporte visual bilíngue desativado.
- Histórico isolado por `pspo-i`.
- Sem migração automática de histórico PSPO II.
- Referência de estudo no lugar de explicação longa.

## Arquivos centrais

```txt
app/app-profile.js
app.js
manifest.json
sw.js
README.md
exams/pspo-i/exam-config.json
exams/pspo-i/topics.json
exams/pspo-i/questions.pt-BR.json
```

## Observação técnica relevante

A engine v2.2.0 acopla idioma da interface ao nome do arquivo do banco. Por isso, para manter interface em português e questões em inglês sem refatoração ampla, o banco principal permanece em `questions.pt-BR.json`, mas o conteúdo das questões está em inglês.

Uma refatoração futura pode separar:

```txt
uiLanguage = pt-BR
questionLanguage = en-US
questionBankPath = questions.en-US.json
```

## Riscos conhecidos

1. Histórico continua local via `localStorage`.
2. Sem sincronização entre dispositivos.
3. Business Strategy tem apenas 1 questão.
4. APK/AAB ainda não gerado.
5. URL de teste ainda contém `PSPO-II` se usado o repositório atual.

## URL de teste

```txt
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.3.0
```
