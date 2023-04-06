const fs = require('fs');
// créer un fichier text dans le dossier mon Dossier écrit à partir du node js " ce fichier a été écrit en node js"
fs.writeFile('./monDossier/newfile.txt', 'Learn Node FS module', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });