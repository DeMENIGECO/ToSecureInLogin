# 🔑 Sistema dei token

TSIL utilizza un sistema di **token monouso** per controllare la navigazione tra le pagine protette.

Ogni accesso genera un nuovo token, che viene verificato prima di consentire l'accesso all'area utente.

---

## ⚙️ Come funziona

Il funzionamento del sistema è il seguente:

1. L'utente effettua il login.
2. TSIL genera un nuovo token.
3. Il token viene passato alla pagina successiva.
4. La pagina verifica che il token sia valido.
5. Se il controllo ha esito positivo, l'utente può continuare a utilizzare il sistema.

---

## 🔄 Token monouso

Ogni token può essere utilizzato una sola volta.

Quando viene verificato con successo, TSIL lo considera utilizzato e non ne permette un secondo utilizzo.

Per ogni nuova navigazione viene generato un nuovo token.

---

## ⚠️ Limitazioni

Il sistema dei token di TSIL funziona interamente lato client.

Di conseguenza:

- I token non vengono verificati da un server.
- Un utente può modificare il codice della pagina.
- Il sistema non sostituisce un'autenticazione server-side.

---

## 💡 Suggerimenti

Per applicazioni reali è consigliato utilizzare:

- Un backend dedicato.
- Un database.
- Token generati e verificati dal server.

TSIL rimane una soluzione ideale per progetti didattici, dimostrazioni e piccoli progetti.
