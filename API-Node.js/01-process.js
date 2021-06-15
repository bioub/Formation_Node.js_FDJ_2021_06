// process.exit(0); // kill le process de Node en cours (sans erreur)
// process.exit(1); // kill le process de Node en cours (avec le code d'erreur 1)

// Entrées et sorties standard
// process.stdin
// process.stdout
// process.stderr

console.log(process.version); // v12.21.0
console.log(process.uptime()); // 0.051868965
console.log(process.memoryUsage());
console.log(process.cpuUsage());

console.log(process.platform); // darwin

console.log(process.argv.slice(2)); // [ '--debug', '--env', 'prod' ] si  node 01-process.js --debug --env prod

// Current Working Dir
console.log(process.cwd()); // /Users/romain/Desktop (si le terminal est sur bureau)

process.chdir(__dirname);
console.log(process.cwd()); // /Users/romain/Desktop/Formation_Node.js_FDJ/API-Node.js

// Variables d'environnements
console.log(process.env.PATH.split(':'));

