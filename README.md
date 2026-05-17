# PSPO II Practice Simulator

Simulador independente para prática da certificação PSPO II.

## Versão

**1.7.1** — 2026-05-16 — 20:59 BRT

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


## Versão 1.7.1

Alterações principais:

- Ajuste visual da tela de revisão para manter consistência com o layout das demais telas.
- Restauração do container geral da tela de resultado/revisão.
- Reposicionamento dos switches de idioma/tema e botão início para o lado direito do cabeçalho.
- Cards de resultado, tempo, corretas, erradas, sem resposta e dúvidas alinhados na mesma área superior.
- Cards de corretas, erradas, sem resposta e dúvidas mantidos como filtros múltiplos do mapa de questões.
- Remoção do filtro textual “Todas / Corretas / Erradas / Sem resposta / Marcadas”.
- Troca do rótulo “Marcadas” por “Dúvidas” na revisão.
- Remoção dos contadores redundantes do mapa e do cabeçalho da questão.
- Remoção do texto instrucional “Selecione uma questão para revisar”.
- Compactação dos cards superiores e do mapa de questões.
- Correção do corte visual nas caixas do mapa de questões.
- Ajuste do dark mode da revisão para a paleta já usada nas demais telas.
- Cache PWA atualizado para v1.7.1.
- `APP_VERSION`, `CACHE_NAME`, `manifest.json` e `README.md` atualizados.

Teste sugerido:

```text
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=1.7.1
```

## Versão 1.7.0

Alterações principais:

- Nova revisão focada das respostas, substituindo a lista longa de questões expandidas.
- Desktop com resumo fixo, filtros abaixo dos cards, mapa lateral de questões e uma questão ativa por vez.
- Mobile com resultado e tempo no topo, cards de status usados como filtros múltiplos e navegação fixa inferior.
- Mapa de questões em bottom sheet no mobile, respeitando os filtros ativos.
- Filtros por corretas, erradas, sem resposta e marcadas, com união dos resultados e sem duplicidade.
- Indicador visual de seleção nos cards de filtro.
- Paridade de light mode e dark mode na revisão.
- Cache PWA atualizado para v1.7.0.
- `APP_VERSION`, `CACHE_NAME`, `manifest.json` e `README.md` atualizados.

Teste sugerido:

```text
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=1.7.0
```

## Versão 1.6.2

Alterações principais:

- Nova tela de resultado final em light mode e dark mode.
- Filtros múltiplos de revisão com checkbox visual: todas, corretas, erros, não respondidas e dúvidas.
- Botão principal de revisão integrado à mesma linha dos filtros, reduzindo carga cognitiva.
- Remoção dos botões redundantes “Novo simulado” e “Início” da área central do resultado.
- Navegação para início mantida apenas no botão de casa do topo.
- Contagem da revisão corrigida: dúvidas não são somadas em duplicidade, pois podem estar dentro de corretas, erros ou não respondidas.
- Desempenho por tópico mostra erros no formato `X erros de Y`.
- Tooltips e rótulos de acessibilidade revisados para português e inglês.
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
Release v1.7.0 focused answer review
```

5. Teste com:

```text
https://fabriciocotrim.github.io/PSPO-II-Practice-Simulator-/?v=1.7.0
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



## v1.6.2

- Resultado final mobile alinhado ao layout aprovado no Canvas.
- Filtros do resultado mantidos em grade 2x3 no mobile.
- Botão de revisão posicionado ao lado de “Dúvidas”.
- Botão “Todas / Desmarcar” preservado.
- Contagem de revisão mantém união de questões, sem duplicar questões marcadas como dúvida.
- Desempenho por tópico mantém “X erros de Y questões”.
- Light mode e dark mode preservados.
- Cache PWA atualizado para v1.6.2.

## v1.6.0

- Redesenho da tela de resultado final em light e dark mode.
- Filtros múltiplos de revisão por corretas, erros, não respondidas e dúvidas, com contagem por união de questões.
- Botão Todas/Desmarcar.
- Desempenho por tópico com erros no total de questões do tópico.
- Cache PWA atualizado para v1.6.2.
