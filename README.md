# 🔐 ToSecureInLogin

Ultima versione: 1.0
Sigla: TSIL

---

## 🎯 Scopo

ToSecureInLogin permette di creare sistemi di login in HTML/JS con JSON, introducendo alcune misure di sicurezza:

- 🔑 Token monouso
- 👤 Codici utente
- 🛡️ Controlli di affidabilità

---

## ⚖️ Pro e Contro

### ✅ Pro

- ✏️ Facile da modificare
-⚡ Semplice e leggero
- 📁 Richiede pochi file (3 o più)
- 🔐 Supporto token monouso


### ❌ Contro

- 🗂️ Nessun database (solo JSON)
- ⚠️ I token possono essere modificati lato client

---

## 🏫 Esempio pratico

### 📌 Caso: Firmatore per la scuola

Ogni docente ha le proprie credenziali salvate in users.json e può accedere al registro per firmare.

**💡 Questo esempio è incluso nei file esempio di TSIL (/example)**


---

#### 📄 users.json

```json
[
  {  
    "usercode": 1234,  
    "userpassword": "mariorossi1!Esempio",  
    "username": "Mario Rossi"
  }  
]
```

---

#### 🌐 login.html

```html
<!DOCTYPE html>    
<html lang="it">    
<head>    
<meta charset="UTF-8">    
<meta name="viewport" content="width=device-width, initial-scale=1.0">    
<title>Login</title>    
    
<style>    
body {    
  margin: 0;    
  font-family: Arial;    
  background: linear-gradient(135deg, #a8e063, #56ab2f);    
  display: flex;    
  justify-content: center;    
  align-items: center;    
  height: 100vh;    
}    
    
.box {    
  background: white;    
  padding: 25px;    
  border-radius: 15px;    
  width: 90%;    
  max-width: 300px;    
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);    
}    
    
input, button {    
  width: 100%;    
  padding: 10px;    
  margin-top: 10px;    
  border-radius: 8px;    
  border: 1px solid #ccc;    
}    
    
button {    
  background: #56ab2f;    
  color: white;    
  border: none;    
  cursor: pointer;    
}    
</style>    
</head>    
    
<body>    
    
<div class="box">    
  <h2>Login</h2>    
  <input type="number" id="usercode" placeholder="Codice utente">    
  <input type="password" id="password" placeholder="Password">    
  <button onclick="login()">Accedi</button>    
  <p>Powered by <b><a href="https://github.com/DeMENIGECO/ToSecureInLogin/tree/main/README.md">ToSecureInLogin</a></b></p>    
</div>    
    
<script>    
async function login() {    
  const code = document.getElementById("usercode").value;    
  const pass = document.getElementById("password").value;    
    
  const res = await fetch("users.json");    
  const users = await res.json();    
    
  const user = users.find(u =>     
    u.usercode == code && u.userpassword == pass    
  );    
    
  if(user) {    
    // genera token casuale    
    const token = Math.floor(Math.random() * 999999);    
    
    // salva token usato    
    localStorage.setItem("token_" + token, "used");    
    
    // redirect    
    window.location.href =     
      `reg.html?token=${token}&usercode=${code}&tab=home`;    
  } else {    
    alert("Credenziali errate!");    
  }    
}    
</script>    
    
</body>    
</html>
```


---

#### 🧭 reg.html

```html
<!DOCTYPE html>    
<html lang="it">    
<head>    
<meta charset="UTF-8">    
<meta name="viewport" content="width=device-width, initial-scale=1.0">    
<title>Area Utente</title>    
    
<style>    
body {    
  margin: 0;    
  font-family: Arial;    
  background: #e8f5e9;    
}    
    
header {    
  background: #2e7d32;    
  color: white;    
  padding: 15px;    
  text-align: center;    
}    
    
nav {    
  display: flex;    
  justify-content: space-around;    
  background: #66bb6a;    
  padding: 10px;    
}    
    
nav a {    
  color: white;    
  text-decoration: none;    
  font-weight: bold;    
}    
    
.container {    
  padding: 20px;    
}    
    
input, button {    
  width: 100%;    
  max-width: 300px;    
  padding: 10px;    
  margin-top: 10px;    
  border-radius: 8px;    
  border: 1px solid #ccc;    
}    
    
button {    
  background: #2e7d32;    
  color: white;    
  border: none;    
}    
</style>    
</head>    
    
<body>    
    
<header>Area Utente</header>    
    
<nav>    
  <a href="#" onclick="goTo('home')">Home</a>    
  <a href="#" onclick="goTo('firma')">Firma</a>    
  <a href="login.html">Esci</a>    
</nav>    
    
<div class="container" id="content"></div>    
    
<script>    
// 🔍 Legge query    
function getQuery() {    
  const params = new URLSearchParams(window.location.search);    
  return {    
    token: params.get("token"),    
    usercode: params.get("usercode"),    
    tab: params.get("tab") || "home"    
  };    
}    
    
// 🔐 Controllo token monouso    
function checkToken(token) {    
  if (!token) return false;    
    
  if (localStorage.getItem("used_" + token)) {    
    return false;    
  }    
    
  localStorage.setItem("used_" + token, "yes");    
  return true;    
}    
    
// 🎲 Genera nuovo token    
function generateToken() {    
  return Math.floor(Math.random() * 999999);    
}    
    
// 🔗 Navigazione sicura    
function goTo(tab) {    
  const usercode = localStorage.getItem("usercode");    
  const newToken = generateToken();    
    
  // ❌ NON segnare qui il token come usato    
    
  window.location.href =    
    `reg.html?token=${newToken}&usercode=${usercode}&tab=${tab}`;    
}    
      
// 🖥️ Render contenuto    
function render(tab) {    
  const content = document.getElementById("content");    
    
  if (tab === "home") {    
    content.innerHTML = `    
      <h2>Home</h2>    
      <p>Benvenuto nell'area utente 👋</p>    
    `;    
  }    
    
  else if (tab === "firma") {    
    content.innerHTML = `    
      <h2>Firma</h2>    
    
      <input placeholder="Numero lezione" id="num">    
      <input placeholder="Nome lezione" id="nome">    
      <input placeholder="Argomento" id="arg">    
    
      <button onclick="firma()">Firma</button>    
    
      <p id="msg"></p>    
    `;    
  }    
}    
    
// ✍️ Azione firma    
function firma() {    
  document.getElementById("msg").innerText =    
    "Firmato con successo ✅";    
}    
    
// 🚀 MAIN    
const { token, usercode, tab } = getQuery();    
    
if (token) {    
  if (!checkToken(token)) {    
    alert("Token non valido!");    
    window.location.href = "login.html";    
  } else {    
    localStorage.setItem("usercode", usercode);    
  }    
} else {    
  if (!localStorage.getItem("usercode")) {    
    window.location.href = "login.html";    
  }    
}    
    
render(tab);    
</script>    
    
</body>    
</html>
```


---

## ⚠️ Nota importante

> [!WARNING]
Questo sistema NON è sicuro al 100% perché:
- Tutto gira lato client
- I token sono modificabili
- Il JSON è accessibile

---

## 📦 Download

> [!NOTE]
Le versioni scaricabili .zip saranno disponibili a breve.
