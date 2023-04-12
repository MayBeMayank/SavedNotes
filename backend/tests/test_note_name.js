// console.log(new Date().toLocaleTimeString());

const date = new Date();

const str = date.toLocaleDateString();
const str3 = date.toLocaleTimeString();

const str2 = date.toLocaleDateString().replace(/\//g,'') +'_'+ date.toLocaleTimeString().replace(/[':',' ']/g,'');
console.log(str2)

