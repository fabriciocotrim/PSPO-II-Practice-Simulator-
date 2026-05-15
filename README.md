# PSPO II Practice Simulator

Simulador independente para prática da certificação PSPO II.

## Características

- Interface em português brasileiro.
- Questões, alternativas e comentários em inglês.
- Banco com 400 questões combinadas a partir dos dois arquivos fornecidos:
  - 240 questões da versão `PSPO_II_Practice_Questions_English_240`.
  - 160 questões da versão `PSPO_II_Practice_Questions_English_Validated`.
- Seleção por um ou mais temas.
- Simulados com 10, 20, 30, 40, 50 ou 60 questões.
- Sorteio aleatório das questões conforme os filtros.
- Modos de feedback:
  - Feedback imediato.
  - Revisão apenas ao final.
- Botão para marcar questão como dúvida.
- Filtro de navegação por questões respondidas, não respondidas, em dúvida ou todas.
- Histórico local das últimas tentativas.
- PWA básica com cache offline após o primeiro carregamento.

## Por que as questões ficam em inglês?

As questões permanecem em inglês para aproximar a experiência do ambiente real do exame PSPO II e reforçar o vocabulário técnico usado na certificação.

## Estrutura dos arquivos

```text
index.html
styles.css
app.js
questions.json
questions-data.js
manifest.json
sw.js
README.md
/icons/icon.svg
/icons/icon-192.png
/icons/icon-512.png
```

`questions.json` é o banco principal.

`questions-data.js` é um espelho do banco para permitir uso local abrindo `index.html` diretamente no navegador, caso o navegador bloqueie `fetch()` de arquivos locais.

## Como rodar localmente

Opção simples:

1. Baixe todos os arquivos.
2. Abra `index.html` no navegador.

Opção recomendada para testar PWA e service worker:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Faça commit de todos os arquivos.
3. Vá em `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve.

## Como adicionar novas questões

Adicione objetos ao arquivo `questions.json` usando este formato:

```json
{
  "id": "NEW-Q001",
  "topics": ["Empiricism", "Product Owner Accountability"],
  "difficulty": "medium",
  "type": "single",
  "question": "Question text in English.",
  "options": [
    { "id": "A", "text": "Option A." },
    { "id": "B", "text": "Option B." },
    { "id": "C", "text": "Option C." },
    { "id": "D", "text": "Option D." }
  ],
  "correctAnswers": ["A"],
  "explanation": "Explanation in English."
}
```

Para questões de múltipla resposta:

```json
"type": "multiple",
"correctAnswers": ["A", "C"]
```

A correção é rigorosa: só conta como correta se o usuário marcar exatamente todas as respostas corretas e nenhuma incorreta.

## Aviso

Este produto é independente. Não é oficial, não é endossado e não é afiliado à Scrum.org.
