const { exec, spawn, spawnSync } = require('child_process');


let file1c = "C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "
let arg_disstames="/DisableStartupMessages "
let arg_type="enterprise "
let path_script ="d:\\Scripts\\exchange\\1s8\\buhsh\\"
let prefixForSQLDB ="/S"
let prefixForFileDb = "/F"
let prefixForLogin = "/N"
let prefixForPass = "/P"
let prefixForEpf = "/Execute"
let prefixForLog = "/OUT"

console.log(choseBase("ud", "up"))

function choseBase(base, upOrDown){
    if (upOrDown == "upload" & base ==) {
        
    }
}
    



let cn = {
    upload:  {
        
        login1c:prefixForLogin+"Exchange_UD_OUT ",
        key:"cn_ud",
        db:prefixForFileDb+"D:\\DB1S8\\Holding\\BuhSh\\ ",
        pathExchange:"D:\\DB1S8\\Holding\\BuhSh\\exchange\\ ",
        password_1s:prefixForPass+"Fag90TMng ",
        arg_log :prefixForLog+path_script+ "ud\\log\\ ",
        epf_exit :prefixForEpf+"D:\\Scripts\\Exchange\\1S8\\BuhSh\\ud\\bin\\exit.epf ",
        ftp_password:"Hsg45^weR ",
        ftp_user : 'Exchange1S8BuhSh_ud '

    },

    download: {
        login1c :prefixForLogin+ "Exchange_UD_IN ",
        key:"ud_cn"
        db:prefixForFileDb+"D:\\DB1S8\\Holding\\BuhSh\\ ",
        pathExchange:"D:\\DB1S8\\Holding\\BuhSh\\exchange\\ ",
        password_1s:prefixForPass+"Fag90TMng ",
        arg_log :prefixForLog+path_script+ "ud\\log\\ ",
        epf_exit :prefixForEpf+"D:\\Scripts\\Exchange\\1S8\\BuhSh\\ud\\bin\\exit.epf ",
        ftp_password:"Hsg45^weR ",
        ftp_user : 'Exchange1S8BuhSh_ud '
    }     

}




let holding = {
    upload:  {
        
        login1c:prefixForLogin+"Exchange_UD_OUT ",
        key:"cn_ud",
        db:prefixForFileDb+"D:\\DB1S8\\Holding\\BuhSh\\ ",
        pathExchange:"D:\\DB1S8\\Holding\\BuhSh\\exchange\\ ",
        password_1s:prefixForPass+"Fag90TMng ",
        arg_log :prefixForLog+path_script+ "ud\\log\\ ",
        epf_exit :prefixForEpf+"D:\\Scripts\\Exchange\\1S8\\BuhSh\\ud\\bin\\exit.epf ",
        ftp_password:"Hsg45^weR ",
        ftp_user : 'Exchange1S8BuhSh_ud '

    },

    download: {
        login1c :prefixForLogin+ "Exchange_UD_IN ",
        key:"ud_cn"
        db:prefixForFileDb+"D:\\DB1S8\\Holding\\BuhSh\\ ",
        pathExchange:"D:\\DB1S8\\Holding\\BuhSh\\exchange\\ ",
        password_1s:prefixForPass+"Fag90TMng ",
        arg_log :prefixForLog+path_script+ "ud\\log\\ ",
        epf_exit :prefixForEpf+"D:\\Scripts\\Exchange\\1S8\\BuhSh\\ud\\bin\\exit.epf ",
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
        let zapros = this.file1c+this.arg_disstames+this.arg_type+this.db+this.login1c+this.password_1s+this.epf_exit+this.arg_log
        console.log(zapros)
    }

}

let holdingUpload = new Exchange(file1c,arg_disstames,arg_type,holding.upload.db,holding.upload.login1c,holding.upload.password_1s,holding.upload.epf_exit,holding.upload.arg_log);
let holdingDownload = new Exchange(file1c,arg_disstames,arg_type,holding.upload.db,holding.download.login1c,holding.upload.password_1s,holding.upload.epf_exit,holding.upload.arg_log);

holdingDownload.download()
holdingUpload.upload()