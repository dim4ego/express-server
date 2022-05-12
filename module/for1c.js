
const { exec, spawn, spawnSync } = require('child_process');
let prog1c = "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe";
let prog1cAnother = "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8s.exe";

module.exports.kill1c = function() {
    try {
        spawn("taskkill", ["/IM", '1c*', '/F', '/t'])
    } catch (error) {
        console.error(error);
    };
}


module.exports.startOrNot1c = function() {
    

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

    module.exports.start1c = function()  {
        spawnSync(prog1c, [ "enterprise" ,"/SUD-S2\\cn_uraldon8.2" , '/Nadmin' , "/Pescape" ]);
        
    }