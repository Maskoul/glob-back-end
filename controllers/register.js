

const handelRegister = (req , res, db, bcrypt) => {
    const {firstName, lastName, email, password, birthDay, gender} = req.body;
    if(!firstName || !lastName || !email || !password|| !birthDay){
        return res.status(400).json('incorrect form submission');
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db('users').insert({
            first_name : firstName,
            last_name: lastName,
            email: email,
            hash_password: hash,
            birth_day: birthDay,
            gender: gender,
            joined: new Date()
        })    
            .returning(['first_name', 'last_name', 'email', 'birth_day', 'gender', 'joined'])
            .then(user => res.json(user[0]))
            .catch(err => {
                console.log(err);
                res.status(400).json("Error, unable to register!: ")
            
            })
    })
    
}

module.exports = {
    handelRegister: handelRegister
}


