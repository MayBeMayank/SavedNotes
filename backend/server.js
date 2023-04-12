const express = require ('express');
const fs  = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json());

const noteFilePath = './notes/note.sn';
const PORT = 5000;

app.get('/',(req,res)=>{
    res.render()
})

app.get('/notes',(req,res)=>{
    fs.opendir('/notes',(err)=>{
        if(err)
        console.log(err);
    })
});

app.post('/notes/save',(req,res)=>{
    const date = new Date();
    const _suffix = date.toLocaleDateString().replace(/\//g,'');
    try{
        fs.appendFile(`notes/saved_${_suffix}.sn`,'\n'+JSON.stringify(req.body),(err)=>{
        if(err) throw err;
        else res.sendStatus(200);
    })}
    catch(error){
        res.send('error occured.')
        console.log(err);
    };
})


app.listen(PORT,()=>console.log("server is running..."));
