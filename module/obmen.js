const { exec, spawn, spawnSync } = require('child_process');


let file1c = "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "
let arg_disstames="/DisableStartupMessages "
let arg_type="enterprise "
let path_script ="d:\\Scripts\\exchange\\1s8\\buhsh\\"



let holding = {
    upload:  {
        
        login1c:"Exchange_UD_OUT ",
        db:"D:\\DB1S8\\Holding\\BuhSh\\ ",
        pathExchange:"D:\\DB1S8\\Holding\\BuhSh\\exchange\\ ",
        password_1s:"Fag90TMng ",
        arg_log : path_script+ "ud\\log\\ ",
        epf_exit :"D:\\Scripts\\Exchange\\1S8\\BuhSh\\ud\\bin\\exit.epf ",
        ftp_password:"Hsg45^weR ",
        ftp_user : 'Exchange1S8BuhSh_ud '

    },

    download: {
        login1c : "Exchange_UD_IN ",
        db:"D:\\DB1S8\\Holding\\BuhSh\\ ",
        pathExchange:"D:\\DB1S8\\Holding\\BuhSh\\exchange\\ ",
        password_1s:"Fag90TMng ",
        arg_log : path_script+ "ud\\log\\ ",
        epf_exit :"D:\\Scripts\\Exchange\\1S8\\BuhSh\\ud\\bin\\exit.epf ",
        ftp_password:"Hsg45^weR ",
        ftp_user : 'Exchange1S8BuhSh_ud '



    }
    
    

}



//= "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "
// = "/DisableStartupMessages"
//="enterprise"
class Exchange {
    constructor(file1c,arg_disstames,arg_type, db, login1c, password_1s, epf_exit, arg_log  ){
        this.file1c = file1c;
        this.arg_disstames=arg_disstames;
        this.arg_type=arg_type;
        this.db=db;
        this.login1c=login1c;
        this.password_1s=password_1s;
        this.epf_exit=epf_exit;
        this.arg_log=arg_log;






    }
    upload(){
        let zapros = this.file1c+this.arg_disstames+this.arg_type+this.db+this.login1c+this.password_1s+this.epf_exit+this.arg_log
        console.log(zapros)


        //spawnSync(prog1c, [ "enterprise" ,"/SUD-S2\\cn_uraldon8.2" , '/Nadmin' , "/Pescape" ]);

    }
    download(){

        
    }














}

let azm = new Exchange(file1c,arg_disstames,arg_type,holding.upload.db,holding.upload.login1c,holding.upload.password_1s,holding.upload.epf_exit,holding.upload.arg_log);
azm.upload()