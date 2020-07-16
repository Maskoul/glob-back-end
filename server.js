const express = require('express');
const knex = require('knex');

const app = express();

const port = 3000;


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
        db.select('*').from('users')
            .then(data => res.json(data));
})

app.post('/signin', (req, res) => {
    
})
    

app.listen(port, () => console.log(`Server is running on port ${port}`))