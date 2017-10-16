const bodyParser = require('body-parser'),
        cors = require('cors'),
        massive = require('massive'),
        express = require('express');


const app = express();





app.get('*', (req, res) => {
        console.log("None Met");
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    })
    
const port = 3005
app.listen(port, console.log(`Listening on ${port}`))

