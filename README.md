# PSPO II Practice Simulator

Simulador independente para prática da certificação PSPO II.

## Versão

**1.5.0** — 2026-05-15 — 23:50 BRT

## Características

- Interface em português brasileiro ou inglês.
- Questões, alternativas, comentários e temas em inglês para simular melhor o ambiente real da certificação.
- Alternância de idioma e tema por switch visual com controle deslizante.
- Banco de questões em `questions.json`.
- Seleção por grupos de temas, com refinamento em modal.
- Simulados com 10, 20, 30, 40, 50 ou 60 questões.
- Feedback imediato agora exibido em modal ao clicar em próxima questão.
- Modo revisão apenas ao final.
- Cronômetro progressivo.
- Botão Salvar.
- Botão Sair com confirmação de perda de alterações não salvas.
- Retomada de simulado salvo.
- Histórico local de resultados.
- PWA básica com cache offline.
- Switches visuais no padrão botão deslizante para idioma e tema.

## Versão 1.5.0

Alterações principais:

- Tela inicial redesenhada em desktop e mobile.
- Seleção de tópicos agrupada e movida para modal.
- Remoção da lista longa de checkboxes da tela principal.
- Abas de configuração, simulado interrompido e histórico representadas por ícones com tooltips.
- Quantidade de questões controlada por slider de 10 a 60, em passos de 10.
- Botão de iniciar simulado integrado ao card de formato.
- Simulado interrompido em painel próprio.
- Histórico exibido em cards, não mais em tabela poluída.
- Light mode minimalista com cinza quente.
- Dark mode grafite com verde-sálvia discreto.
- Cache PWA atualizado para evitar uso de versão antiga.

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
Release v1.5.0 home screen redesign
```

5. Teste com:

```text
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=1.5.0
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

## Versão 1.4.2

Alterações principais:

- foco na versão desktop da tela de simulado;
- cabeçalho externo oculto durante a prova;
- labels Idioma/Tema removidas da área de prova;
- label Tempo removido e mantido como tooltip/acessibilidade;
- switches neutralizados, sem ícones coloridos;
- botão Salvar substituído por ícone SVG monocromático;
- botão Sair substituído por ícone SVG monocromático;
- filtro de questões removido da tela de prova;
- seletor de questão reduzido e movido para a linha de navegação;
- opções do seletor ajustadas para `Questão X`, `Questão Y - não respondida` e `Questão Z - dúvida`;
- linha de navegação reorganizada com anterior, dúvida, seletor, próxima e finalizar;
- Finalizar simulado convertido em ícone de bandeira;
- cache PWA atualizado para `v1.4.2`.



## Versão 1.4.4

Alterações principais:

- modo escuro redesenhado em grafite, com detalhes discretos em verde;
- modo claro minimalista, com fundo branco levemente acinzentado e highlights em verde-sálvia;
- remoção do tamanho do banco do footer;
- comunicação explícita para questões de múltiplas respostas;
- chip “Múltiplas respostas / Multiple answers”;
- aviso curto para seleção de todas as alternativas corretas;
- alternativas múltiplas com checkbox visual mais evidente;
- switches e ícones sem cores chamativas;
- preservação das questões, alternativas, comentários e temas em inglês;
- cache PWA atualizado para `v1.4.4`.
