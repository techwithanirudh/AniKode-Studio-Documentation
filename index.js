const { exec } = require("child_process");

console.log('Note: "THIS IS A WRAPPER FOR THE RUNNER"')
console.log('Running Docusaurus for AniKode Studio')

// npm run serve -- --build --port 8080 --host 0.0.0.0
exec("npm run serve -- --port 8080 --host 0.0.0.0", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});