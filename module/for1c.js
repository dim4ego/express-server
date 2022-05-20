
//import { parse } from 'csv-parse';

const { exec, spawn, spawnSync } = require('child_process');
const { stderr, stdin } = require('process');



//let prog1c = "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe";
//let prog1cAnother = "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8s.exe";


//exec (`tasklist /FO CSV`,   (err, stdout, stderr)  =>{console.log(stdout.indexOf('1cv8' || '1cv8s'))} ) 
//var azaz = exec (`tasklist /FI "IMAGENAME eq notepad.exe"`,   (err, stdout, stderr)  =>{console.log(stdout)} )

 //console.log('Переменная азаз = ', azaz)   
 










module.exports.kill1c = function() {
    try {
        console.log('пытаемся закрыть 1ску');
        spawn("taskkill", ["/IM", '1c*', '/F', '/t']);
        console.log('1ска закрыта');
        return ('Программа 1с закрыта');
    } catch (error) {
        console.error(error);
        return error;
    };
}




        











 /* module.exports.startOrNot1c =  function() {
    

    exec(`tasklist /FO CSV`, (err, stdout, stderr) => {
        
        if (err || stderr)
        return console.error(err || stderr);
        
        if (stdout.indexOf('1cv8' || '1cv8s') == -1) {
            console.log("1с не запущенна")
            return false
            
        } else {
            console.log("1с запущенна ")
            return true
        }
      
        
        
      })
    }
 */


   /*  module.exports.start1c = function()  {
        spawnSync(prog1c, [ "enterprise" ,"/SUD-S2\\cn_uraldon8.2" , '/Nadmin' , "/Pescape" ]);
        
    }
 */

    