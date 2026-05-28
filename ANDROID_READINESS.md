# Android readiness — v2.3.1

## Estado

A v2.3.1 está pronta para teste como PWA no GitHub Pages e preparada para uma próxima etapa de empacotamento Android.

## Caminho recomendado

1. Testar v2.3.1 no GitHub Pages.
2. Corrigir bugs visuais/funcionais do PWA.
3. Definir domínio/repositório comercial sem `PSPO-II` na URL.
4. Gerar APK local de teste via TWA/Bubblewrap.
5. Gerar AAB para Play Console.
6. Rodar teste fechado no Google Play.

## Observação

APK serve para teste local. Para Play Store, o artefato esperado para novo app é Android App Bundle (`.aab`).

## Pré-requisitos para TWA/Bubblewrap

- Manifest válido.
- Ícones 192 e 512.
- PWA hospedado em HTTPS.
- Service worker funcionando.
- Domínio validado por Digital Asset Links.
- Package name Android definido.
- Política de privacidade publicada.
- Screenshots e metadados da Play Store.
