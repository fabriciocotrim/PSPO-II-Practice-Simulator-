# Cenários de teste — v2.3.0

## Smoke test

1. Abrir `/?v=2.3.0`.
2. Confirmar título `PSPO I Practice Simulator`.
3. Confirmar ausência do toggle de idioma.
4. Confirmar tema claro/escuro.
5. Confirmar banco com 367 questões no rodapé se exibido.

## Simulado

1. Selecionar 80 questões.
2. Selecionar todos os temas.
3. Iniciar simulado.
4. Confirmar timer regressivo de 60 minutos.
5. Responder questão única.
6. Responder múltipla resposta.
7. Marcar dúvida.
8. Navegar pelo seletor de questões.
9. Salvar progresso.
10. Sair e retomar simulado interrompido.
11. Encerrar simulado.

## Resultado

1. Confirmar percentual.
2. Confirmar aprovado/reprovado com corte de 85%.
3. Confirmar cards de corretas, erros, não respondidas e dúvidas.
4. Confirmar revisão filtrada.
5. Confirmar referência de estudo em vez de explicação longa.
6. Confirmar desempenho por tópico.

## Histórico

1. Confirmar tentativa salva no histórico.
2. Revisar tentativa histórica.
3. Voltar ao histórico.
4. Excluir tentativa.
5. Confirmar recálculo dos indicadores.

## Mobile

1. Testar largura 360px.
2. Testar largura 390px.
3. Testar rolagem da tela de resultado.
4. Confirmar que cards e botões não estouram lateralmente.

## Cache

1. Após deploy, abrir com `?v=2.3.0`.
2. Fazer hard refresh.
3. Confirmar que `CACHE_NAME` novo carregou.
4. Em caso de comportamento antigo, limpar dados do site.
