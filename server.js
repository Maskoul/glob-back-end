const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');
const cors = require('cors')


const register = require('./controllers/register');
const signin = require('./controllers/signin');
const newPost = require('./controllers/newPost');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'database'
    }
  });


const app = express();

const port = 3000;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
        db.select('*').from('users')
            .then(data => res.json(data));
})

app.post('/register', (req, res ) => register.handelRegister(req, res,db, bcrypt))


app.post('/signin', (req, res) => {
    signin.handleSignin(req, res, db, bcrypt);
})

app.post('/newpost', (req, res) => {
    newPost.handleNewPost(req, res, db, bcrypt);
})

app.listen(port, () => console.log(`Server is running on port ${port}`))