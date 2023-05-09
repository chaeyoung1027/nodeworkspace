const express = require('express');  
const bodyParser = require('body-parser');  // Import bodyParser middleware
let app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON data from request body
app.use(bodyParser.json());

// Parse URL-encoded form data from request body
app.use(express.urlencoded({extended:false}));

// Route handler for all GET requests
app.get('*', (request, response)=>{
    let output = '';
    output+='<form method="post">';
    output += '<input type="text" name="id" />'
    output += '<input type="text" name="passwd" />'
    output += '<input type="submit" />'
    output+='</form>'
    response.send(output);
});

// Route handler for POST request to root URL
app.post('/', (request, response) =>{
    console.log(request.body);
    response.send(request.body);
});

app.listen(3000, ()=>{
    console.log('Server starting on port 3000');
});