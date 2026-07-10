# 👤 Configurazione degli utenti

TSIL utilizza il file `users.json` per gestire gli utenti autorizzati ad accedere al sistema.

Ogni utente è rappresentato da un oggetto JSON contenente alcune informazioni fondamentali.

---

## 📋 Campi disponibili

Ogni utente deve contenere i seguenti campi:

- `usercode` — Codice univoco dell'utente.
- `userpassword` — Password dell'utente.
- `username` — Nome visualizzato dopo l'accesso.

---

## ➕ Aggiungere un utente

Per aggiungere un nuovo utente, crea un nuovo oggetto all'interno dell'array presente in `users.json`, seguendo la stessa struttura degli utenti esistenti.

Ogni `usercode` dovrebbe essere univoco per evitare conflitti.

---

## ✏️ Modificare un utente

Puoi modificare il nome, la password o il codice utente aggiornando i relativi valori nel file `users.json`.

Dopo aver salvato il file, le modifiche saranno utilizzabili al successivo accesso.

---

## 🗑️ Eliminare un utente

Per rimuovere un utente, elimina il relativo oggetto dal file `users.json`.

Assicurati che il file rimanga un JSON valido dopo la modifica.

---

## ⚠️ Importante

Poiché `users.json` è un file accessibile dal client, evita di utilizzare password reali o dati sensibili.

TSIL è pensato principalmente per progetti didattici, dimostrazioni e prototipi.
