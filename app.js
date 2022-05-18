const express = require('express');
const router = express.Router();
const res = require('express/lib/response');

const path = require('path');
const { nextTick } = require('process');
const app = express();
const for1c = require('./module/for1c')




//const text = require('./module/web_injection')




//const start1c =require('./start1c');

let a = app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/public/index.html`) ;

});

app.use('/kill1c', (req,res) => {
    //spawn("taskkill", ["/IM", '1c*', '/F', '/t']);
    console.log(req.url, req.headers, req.method)
        let answer = for1c.kill1c();
         
        return res.json([{
            statusOfkill: answer,
        //statusOfkill: "Program is close",  
      
        
    }])
});

   
app.get('/start1c', (req,res) => {
   
    return res.json([{
        id: 1,
        author: "lenin",
        title: 'TITLBLE'


    }])
    
    //res.redirect('back');
});


//app.get('/start1c', (req,res) => {
  //  spawn("C:\\Program Files\\1cv8\\8.3.20.1674\\bin\\1cv8.exe", [ "enterprise" ,"/SUD-S2\\cn_uraldon8.2" , '/Nadmin' , "/Pescape" ]);

//});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});