# PSPO II Practice Simulator

Simulador independente para prática da certificação PSPO II.

## Versão

- Versão: 1.1.0
- Data: 2026-05-15
- Hora: 19:48 BRT

## Idioma

A interface pode ser alternada entre português brasileiro e inglês.

As questões, alternativas, comentários e temas permanecem em inglês para aproximar a experiência do ambiente real da certificação PSPO II e reforçar o vocabulário técnico usado no exame.

## Funcionalidades

- Banco com questões em inglês.
- Seleção por um ou mais temas.
- Simulados de 10, 20, 30, 40, 50 ou 60 questões.
- Feedback imediato ou revisão apenas ao final.
- Sorteio aleatório das questões e das alternativas.
- Navegação livre entre questões.
- Filtro por todas, respondidas, não respondidas ou em dúvida.
- Botão para marcar/remover dúvida.
- Botão para finalizar o simulado de qualquer ponto da prova.
- Botão para salvar e sair.
- Retomada automática de simulado salvo no mesmo navegador/dispositivo.
- Salvamento automático do estado da prova em andamento.
- Cronômetro progressivo.
- Histórico local de resultados.
- Toggle de idioma da interface.
- Toggle de tema claro/escuro.
- PWA básica com Service Worker.

## Estrutura de arquivos

```text
/
├── index.html
├── styles.css
├── app.js
├── questions.json
├── questions-data.js
├── manifest.json
├── sw.js
├── README.md
└── icons/
    ├── icon.svg
    ├── icon-192.png
    └── icon-512.png
```

## Como rodar localmente

Abra `index.html` no navegador.

Como existe também o arquivo `questions-data.js`, o app consegue carregar o banco mesmo sem servidor local.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Suba todos os arquivos para a raiz do repositório.
3. Vá em `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve.

## Como atualizar depois

Sempre que alterar CSS, JS ou HTML:

1. Atualize os arquivos.
2. Altere a versão em `app.js`.
3. Altere a versão em `sw.js`.
4. Faça commit.
5. Abra a URL com parâmetro de versão, por exemplo:

```text
?v=1.1.0
```

Isso reduz problemas de cache do PWA.

## Como adicionar novas questões

Edite `questions.json` e adicione novas entradas no formato:

```json
{
  "id": "NEW-Q001",
  "topics": ["Scrum Guide 2020", "Empiricism"],
  "difficulty": "medium",
  "type": "single",
  "question": "Question text in English.",
  "options": [
    { "id": "A", "text": "Option A." },
    { "id": "B", "text": "Option B." }
  ],
  "correctAnswers": ["A"],
  "explanation": "Explanation in English."
}
```

Depois atualize também `questions-data.js` se quiser manter suporte a abertura direta via `index.html` sem servidor.

## Aviso

Este projeto é independente. Não é produto oficial da Scrum.org e não reproduz questões oficiais do exame.
