process.stdout.write("\nprompt > ");
process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    const pwdVar = require('./pwd.js');
    pwdVar();
  } 
  else process.stdout.write(`You typed ${cmd}`);
  process.stdout.write("\nprompt > ");
});
