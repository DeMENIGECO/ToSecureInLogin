# 🔐 aarg

**Automatic Account Registration Generator**

`aarg` è uno strumento CLI per la gestione degli utenti di **ToSecureInLogin (TSIL)**.

Permette di aggiungere rapidamente nuovi utenti al file `users.json` senza dover modificare manualmente il file.

---

## 🎯 Scopo

`aarg` nasce per semplificare la gestione degli account nei progetti TSIL.

Con `aarg` puoi:

- 👤 Creare nuovi utenti
- 📄 Aggiornare automaticamente `users.json`
- ⚡ Velocizzare la configurazione di TSIL

---

## 📦 Requisiti

Prima di utilizzare `aarg` assicurati di avere:

- 🟢 Node.js installato
- 📁 Un progetto TSIL con un file `users.json`

---

## 🚀 Utilizzo

Avvia `aarg` con:

```bash
node aarg.js
```

Successivamente inserisci:

- Il percorso del file users.json
 Il nome dell'utente
- Il codice utente
- La password

Al termine, il nuovo utente verrà aggiunto automaticamente.
