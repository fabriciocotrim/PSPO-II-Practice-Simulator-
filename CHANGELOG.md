# Changelog

## v2.3.0 — Pivot PSPO I + Android readiness

- Pivot do app para PSPO I.
- `examId` alterado para `pspo-i`.
- Estrutura ativa alterada para `/exams/pspo-i/`.
- Banco PSPO I incluído com 367 questões.
- Interface mantida em português brasileiro.
- Questões, alternativas e referências de estudo em inglês.
- Modo prova configurado para 80 questões e 60 minutos.
- Seleção por 12 temas finais do PSPO I.
- Suporte bilíngue visual desativado nesta versão.
- Label de "Comentário" alterada para "Referência de estudo".
- Histórico preservado por `examId`, sem migração de dados PSPO II.
- Manifest PWA atualizado.
- Service worker atualizado com `CACHE_NAME = pspo-i-practice-v2.3.0`.
- README atualizado.
- Disclaimer independente incluído.

## v2.2.0 — Histórico analítico e revisão de tentativas

- Base aceita usada como origem técnica desta versão.


## v2.3.2 — Identidade visual e diagnóstico de erros

- Aplica paleta editorial inspirada nos materiais premium do Estúdio da Agilidade.
- Oculta o toggle de idioma, mantendo interface em português e questões em inglês.
- Reestrutura o histórico para exibir a última tentativa, erros totais e origem dos erros por tópico.
- Adiciona cálculo de impacto dos erros em pontos percentuais da prova e participação no total de erros.
- Mantém compatibilidade desktop, com prioridade visual mobile/tablet.
- Atualiza APP_VERSION, manifest.json, sw.js e documentação de release.
