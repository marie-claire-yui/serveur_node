const fs = require('fs');
// if (fs.existsSync('./monDossier')){
//     fs.rmdir('./monDossier', (Error) => {
//         if(Error){
//             console.error(Error);
//         } else {
//             console.log('dossier supprimé')
//         }
//     })
// } else {
//     fs.mkdir('./monDossier', (Error)=>{
//         if(Error){
//             console.error(Error);
//         } else {
//             console.log('dossier créé');
//         }
//     })
// }



// création d'un fichier txt  à l'intérieur de monDossier
// fs.writeFile('./monDossier/monfichier.txt','Ce fichier a été écrit avec node',
// (Error)=>{
//     if(Error){
//         console.log(Error);
//     }else {
//         console.log("le fichier a été créé");
//     }
// }
// )

//lecture de monfichier.txt à l'intérieur de monDossier
// fs.readFile('./monDossier/monfichier.txt',
// (Error,Data)=>{
//     if(Error){
//         console.log(Error);
//     }else {
//         console.log(Data.toString());
//     }
// }
// )


    if(fs.existsSync('./monDossier/monFichier')){
        fs.unlink('./monDossier/monFichier', (error)=>{
            if(error){
                console.error(error);
           }else{
            console.log('fichier supprimé');
           }
        })
    }else{
        fs.writeFile('./monDossier/monFichier','Ce fichier a été créé avec Node', (error)=>{
            if(error){
                console.error(error);
            }else{
            console.log('fichier créé');
            }
        })
    }