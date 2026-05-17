# PSPO II Practice Simulator

Simulador bilíngue independente para prática da certificação PSPO II.

## Versão atual

v2.0.1 — Ajustes visuais pós-modularização

URL de teste:

https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.0.1

## Produto

- PWA estático em HTML, CSS e JavaScript puro.
- Hospedagem prevista no GitHub Pages.
- Sem backend, login, framework ou multi-exame.
- Banco bilíngue com 400 questões em português e 400 em inglês.
- Simulado carrega apenas questões do idioma ativo.
- Revisão final/focada preservada.
- Feedback imediato removido.
- Light mode e dark mode preservados.
- Desktop e mobile preservados.

## Estrutura modular mantida

```txt
/exams/
  /pspo-ii/
    exam-config.json
    topics.json
    questions.pt-BR.json
    questions.en-US.json
```

## Carregamento de dados

O app carrega:

- configuração do exame de `/exams/pspo-ii/exam-config.json`;
- grupos/tópicos de `/exams/pspo-ii/topics.json`;
- questões em português de `/exams/pspo-ii/questions.pt-BR.json`;
- questões em inglês de `/exams/pspo-ii/questions.en-US.json`.

## Regras mantidas

- PSPO II permanece como único exame da aplicação.
- Não há tela de seleção de exame.
- Não há marketplace de exames.
- Não há backend.
- Não há alteração visual planejada em relação à v1.9.1.
- IDs das questões devem permanecer pareados entre idiomas.
- Gabaritos PT/EN devem permanecer equivalentes.
- O simulado não deve misturar idiomas.
- Nem todas as questões precisam ter 5 alternativas.

## Release name

v2.0.1 — Ajustes visuais pós-modularização

## Release notes

- Corrigido o toggle de idioma no light mode para não ficar escuro ao alternar para inglês.
- Padronizado o botão de voltar/sair do simulado com ícone de casinha.
- Centralizado o ícone de lixeira no botão de descartar simulado salvo, em desktop e mobile.
- Mantida a modularização leve da v2.0.0.
- Mantida a experiência visual geral da v1.9.1.
- Mantidos bancos bilíngues PT/EN sem alteração de conteúdo.
- Atualizados `APP_VERSION`, `CACHE_NAME`, `manifest.json` e `README.md`.
- URL de teste: https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=2.0.1

## Aviso

Este app é independente. Não é produto oficial, afiliado, validado nem endossado pela Scrum.org.
