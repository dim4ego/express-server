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


startExchange("upload","ba")
function startExchange(upOrDown, base){
    if (upOrDown == "upload" & base =="ud") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_BA_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_ud.txt");
         //spawnSync(prog1c, [ "enterprise" ,"/SUD-S2\\cn_uraldon8.2" , '/Nadmin' , "/Pescape" ]);
    }
    if (upOrDown == "upload" & base =="ba") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_UD_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_ba.txt");
        
    }
    if (upOrDown == "upload" & base =="be") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_BE_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_be.txt");
        
    }
    if (upOrDown == "upload" & base =="ka") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_KA_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_ka.txt");
    }
    if (upOrDown == "upload" & base =="el") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_EL_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_el.txt");
        
    }
    if (upOrDown == "upload" & base =="li") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_LI_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_li.txt");

        
    }
    if (upOrDown == "upload" & base =="me") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_ME_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_me.txt");

    }
    if (upOrDown == "upload" & base =="st") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_ST_OUT "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\cn_st.txt");
        
    }
    if (upOrDown == "download" & base =="ud") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_UD_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\ud_cn.txt");

        
    }
    if (upOrDown == "download" & base =="ba") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_BA_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\ba_cn.txt");
        
    }
    if (upOrDown == "download" & base =="be") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_BE_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\be_cn.txt");
        
    }
    if (upOrDown == "download" & base =="ka") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_KA_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\ka_cn.txt");
    }
    if (upOrDown == "download" & base =="el") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_EL_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\el_cn.txt");
    }
    if (upOrDown == "download" & base =="li") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_LI_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\li_cn.txt");
    }
    if (upOrDown == "download" & base =="me") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_ME_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\me_cn.txt");
    }
    if (upOrDown == "download" & base =="st") {
        console.log("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe "+"enterprise "+"/SUD-S2\\cn_uraldon8.2 "+"/NExchange_ST_IN "+"/PFag90TMng "+"/Execute "+"/OUTd:\\Scripts\\exchange\\1s8\\buhsh\\log\\st_cn.txt");
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
        key:"ud_cn",
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