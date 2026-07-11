# 🔐 ToSecureInLogin

[![CI](https://github.com/DeMENIGECO/ToSecureInLogin/actions/workflows/ci.yml/badge.svg)](https://github.com/DeMENIGECO/ToSecureInLogin/actions/workflows/ci.yml)
[![Sigla](https://img.shields.io/badge/Sigla-TSIL-14d928)](https://github.com/DeMENIGECO/ToSecureInLogin)
[![Ultima versione](https://img.shields.io/github/v/release/DeMENIGECO/ToSecureInLogin?label=Ultima%20versione)](https://github.com/DeMENIGECO/ToSecureInLogin/releases)



---

## 🎯 Scopo

**ToSecureInLogin (TSIL)** è un sistema di autenticazione realizzato in **HTML**, **JavaScript** e **JSON** che introduce alcune misure di sicurezza per applicazioni semplici e prototipi.

### Funzionalità

- 🔑 Token monouso
- 👤 Accesso tramite codice utente
- 🛡️ Controlli di affidabilità

---

## ⚖️ Pro e Contro

### ✅ Pro

- ✏️ Facile da modificare
- ⚡ Semplice e leggero
- 📁 Richiede pochi file (3 o più)
- 🔐 Supporto ai token monouso

### ❌ Contro

- 🗂️ Nessun database (solo JSON)
- ⚠️ I token possono essere modificati lato client

---

## 🏫 Esempio pratico

### 📌 Caso: Firmatore per la scuola

Ogni docente dispone delle proprie credenziali salvate nel file `users.json` e può accedere al registro per firmare le lezioni.

> 💡 Questo esempio è incluso nella cartella `example`.

---

# ⚠️ Nota importante

> [!WARNING]
> TSIL **non è sicuro al 100%** perché:
>
> - Tutta la logica viene eseguita lato client.
> - I token possono essere modificati.
> - Il file `users.json` è accessibile dal browser.
>
> TSIL è consigliato per **progetti didattici, dimostrazioni e prototipi**.

---

## 🌍 Browser supportati

| Chrome | Firefox | Safari | Opera | Edge |
| :---: | :---: | :---: | :---: | :---: |
| ![Chrome browser logo](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox browser logo](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari browser logo](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera browser logo](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge browser logo](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

---

## 📦 Download

| Versione | Download |
| -------- | -------- |
| **1.1** | [Scarica TSIL 1.1](https://github.com/DeMENIGECO/ToSecureInLogin/releases/download/1.1/tsil11.zip) |
| **1.0** | [Scarica TSIL 1.0](https://github.com/DeMENIGECO/ToSecureInLogin/releases/download/1.0/TSIL10.zip) |

---

## 📚 Documentazione

La documentazione completa è disponibile nella cartella `docs`.

---

## 💻 Codice sorgente

Il codice sorgente di TSIL è disponibile nella cartella `src/tsil`.

Gli strumenti aggiuntivi, come **`aarg`**, sono disponibili nella cartella `src`.
