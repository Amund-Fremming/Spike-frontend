# Spike

- [Backend](https://github.com/Amund-Fremming/Spike-backend)

### Kort om appen

- Super enkel og liten spørsmål applikasjon.
- Her man man opprette og bli med i spill og legge til spørsmål
- Har brukt ASP.NET som backend som hostes hos Azure
- React native som frontend

### Fokus

- Få appen på Appstore
- Håndtere race conditions
- Oppdatere basert på brukeres tilbakemeldinger

### Hva har jeg lært

- Hvordan jeg setter opp utviklingsmiljlø med Azure og github actions
- Utvikle frontend med react native
- Bruk av SignalR for live oppdateringer
- Bruk av transactions for å håndtere race conditions
- Lage gjenbrukbare komponenter for å minimere kode
- Hvordan håndtere at api kall mister internett, og hjelpe bruker videre

### Hva skal jeg gjøre annerledes neste gang

- Bruke mer tid i planleggingen og få fastslått noen flere generiske komponenter
- Lære å burke Figma mer effektivt og riktig

## Next update
- Ny gamemode!
- Preload public games, createdGames, og likedGames
- Mulighet for å redigere spørsmål
- Fjern tastatured når man trykker enter
- Skjul tilbake på søk til etter man har søkt

## How to update

1. eas build --platform ios
2. eas submit -p ios --latest
3. Login to App Store Connect
4. Add new Version under Distrobution
5. Add Update information in the text box about the update
6. Add for Rereview and Submit

## Next up

**Frontend**

- logikk for å håndtrere spinner state
- Logikk for å håndtere spillflyt fra host sin side
- Endre fra Iconer til game modes
- Ny how to

**Backend**

- Endre Game modellen til å ha type spill
- Endre Game til å ha en liste med devices om folk skal joine
- Nytt api for getDevice som har en webcosket som sender ut melding til alle som er med i spillet, og returnerer en device som er valgt ut
- Kanskje ikke gjøre det 100% random, men større sans for å velge en som ikke har blitt valgt så mye
