const bodyParser = require('body-parser');
let express = require('express');

let app = express();
//정적파일제공하는 폴더
app.use(express.static('public'));
app.use(bodyParser.json);

app.get('/', (request, response)=>{
    let output = '';
    output+='<form method = "post">';
    output += '<input type = "text" name = "id" />'
    output += '<input type = "text" name = "passwd" />'
    output += '<input type = "submit"    />'
    output+='</form>'
    response.send(output);
});
app.post('/', (request, response) =>{
    console.log(request.body);
    console.send(request.body);
});

app.listen(3000, ()=>{
    console.log('setver starting 3000 port');
});