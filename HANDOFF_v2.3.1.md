# Handoff — PSPO I Practice Simulator v2.3.1

## Release

v2.3.1 — Identidade visual e diagnóstico de erros

## Objetivo

Corrigir a percepção visual da v2.3.0/r1 e alinhar o app à linguagem premium das apostilas do Estúdio da Agilidade, além de tornar o histórico mais útil para estudo.

## Mudanças principais

- Paleta editorial: azul-marinho profundo, cinza-gelo, azul técnico e grafite.
- Dark mode ajustado para o mesmo universo visual.
- Toggle de idioma ocultado, pois a interface permanece em português e o banco de questões está em inglês.
- Histórico passa a exibir diagnóstico da última tentativa.
- Decomposição dos erros por tópico:
  - quantidade de erros por tópico;
  - impacto em pontos percentuais da prova;
  - participação no total de erros;
  - indicação de amostra insuficiente quando o tópico teve menos de 5 questões na tentativa.
- Cards de tentativa mostram maior lacuna detectada.
- Evolução recente de até 5 tentativas preparada visualmente para expansão na v2.4.0.

## Arquivos alterados

- `app.js`
- `styles.css`
- `index.html`
- `manifest.json`
- `sw.js`
- `README.md`
- `CHANGELOG.md`
- `RELEASE_NAME.txt`
- `RELEASE_NOTES.txt`

## Teste no GitHub Pages

URL de teste:

```text
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.3.1
```

## Pontos de atenção

- Limpar service worker/cache se a v2.3.0 continuar aparecendo.
- Confirmar legibilidade no mobile em modo claro e escuro.
- Confirmar se a decomposição dos erros aparece após concluir uma nova tentativa.
- Históricos antigos sem snapshot podem não exibir decomposição completa.
