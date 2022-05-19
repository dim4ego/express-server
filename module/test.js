const { exec, spawn, spawnSync } = require('child_process');






function yogurt(){ exec(`tasklist /FO CSV`, (err, stdout, stderr) => {
    // var ret;
     if (err || stderr)
     return console.error(err || stderr);
    // ret = stdout;
     
     if (stdout.indexOf('1cv8' || '1cv8s') == -1) {
         //console.log("1с не запущенна")
         
         test();
         
         
     } else {
         //console.log("1с запущенна ")
         myTrue(true);
     }
    
     
     
   });
}

   function test() {
       console.log('djkdjfjf')
       return true
   }


   console.log(yogurt())