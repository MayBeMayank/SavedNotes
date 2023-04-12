const fs = require('fs');
const date = new Date();

const note = {
    "date" : date.toLocaleDateString(),
    "time" : date.toLocaleTimeString(),
    "data" : fs.readFileSync('./test_note_name.js',"utf-8")
}
try {

    fs.writeFile('note.sn',JSON.stringify(note),(err)=>{
        if(err) throw err;
    })
} catch (error) {
    console.log('file not found.')
}