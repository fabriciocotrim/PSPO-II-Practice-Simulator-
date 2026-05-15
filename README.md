# PSPO II Practice Simulator

Simulador independente para prática da certificação PSPO II.

## Versão

**1.2.0** — 2026-05-15 — 20:18 BRT

## Características

- Interface em português brasileiro ou inglês.
- Questões, alternativas, comentários e temas em inglês para simular melhor o ambiente real da certificação.
- Alternância de tema claro/escuro por toggle.
- Banco com 400 questões em `questions.json`.
- Seleção por temas.
- Simulados com 10, 20, 30, 40, 50 ou 60 questões.
- Feedback imediato agora exibido em modal ao clicar em próxima questão.
- Modo revisão apenas ao final.
- Cronômetro progressivo.
- Botão Salvar.
- Botão Sair com confirmação de perda de alterações não salvas.
- Retomada de simulado salvo.
- Histórico local de resultados.
- PWA básica com cache offline.

## Estrutura

```text
index.html
styles.css
app.js
questions.json
questions-data.js
manifest.json
sw.js
icons/
```

## Como rodar localmente

Opção simples:

1. Abra `index.html` no navegador.
2. O app usa `questions-data.js` para funcionar sem servidor local.

Opção recomendada para teste de PWA:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub.
2. Faça upload dos arquivos na raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Source**, selecione **Deploy from a branch**.
5. Em **Branch**, selecione `main` e `/root`.
6. Salve.

## Como atualizar no GitHub pelo celular

1. Extraia o ZIP.
2. No repositório, use **Add file > Upload files**.
3. Envie todos os arquivos, substituindo os existentes.
4. Commit sugerido:

```text
Release v1.2.0 UX and accessibility updates
```

5. Teste com:

```text
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=1.2.0
```

## Como adicionar questões

Edite `questions.json` seguindo o formato:

```json
{
  "id": "Q001",
  "topics": ["Scrum Guide 2020", "Empiricism"],
  "difficulty": "medium",
  "type": "single",
  "question": "Question text in English",
  "options": [
    { "id": "A", "text": "Option A" },
    { "id": "B", "text": "Option B" }
  ],
  "correctAnswers": ["A"],
  "explanation": "Explanation in English."
}
```

Para questões de múltipla resposta, use:

```json
"type": "multiple",
"correctAnswers": ["A", "C"]
```

## Aviso

Este app é independente. Não é produto oficial, afiliado, validado nem endossado pela Scrum.org.
