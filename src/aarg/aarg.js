const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log("🔐 AARG - Automatic Account Registration Generator");
  console.log("-----------------------------------------------\n");

  const filePath = await ask("Percorso users.json: ");

  if (!fs.existsSync(filePath)) {
    console.log("❌ File non trovato!");
    rl.close();
    return;
  }

  let users;

  try {
    users = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    console.log("❌ Errore: users.json non valido!");
    rl.close();
    return;
  }

  const username = await ask("Nome utente: ");
  const usercode = await ask("Codice utente: ");
  const password = await ask("Password: ");

  const newUser = {
    usercode: Number(usercode),
    userpassword: password,
    username: username
  };

  users.push(newUser);

  fs.writeFileSync(
    filePath,
    JSON.stringify(users, null, 2)
  );

  console.log("\n✅ Utente aggiunto con successo!");

  rl.close();
}

main();