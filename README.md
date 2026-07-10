# 🔐 ToSecureInLogin

**Ultima versione:** `1.1`  
**Sigla:** _TSIL_

---

## 🎯 Scopo

ToSecureInLogin permette di creare sistemi di login in **HTML/JS con JSON**, introducendo alcune misure di sicurezza:

- 🔑 Token monouso
- 👤 Codici utente
- 🛡️ Controlli di affidabilità

---

## ⚖️ Pro e Contro

### ✅ Pro

- ✏️ Facile da modificare
- ⚡ Semplice e leggero
- 📁 Richiede pochi file (3 o più)
- 🔐 Supporto token monouso

---

### ❌ Contro

- 🗂️ Nessun database (solo JSON)
- ⚠️ I token possono essere modificati lato client

---

## 🏫 Esempio pratico

### 📌 Caso: Firmatore per la scuola

Ogni docente ha le proprie credenziali salvate in `users.json` e può accedere al registro per firmare.

**💡 Questo esempio è incluso nei file esempio di TSIL (`/example`)**

---

# ⚠️ Nota importante

> [!WARNING]
> Questo sistema **NON è sicuro al 100%** perché:
> - Tutto gira lato client
> - I token sono modificabili
> - Il JSON è accessibile

---

## 📦 Download

| Versione | Links |
|----------|-------|
| 1.x | [1.0](https://github.com/DeMENIGECO/ToSecureInLogin/releases/download/1.0/TSIL10.zip) |
---

## 💻 Codice sorgente

Il codice sorgente di TSIL è disponibile in `src/tsil`.

Altri strumenti sono disponibili nella cartella `src`.
