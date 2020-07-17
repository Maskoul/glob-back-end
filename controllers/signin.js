

const handleSignin = (req, res, db, bcrypt) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json('incorrect form submission');
    }else {
        
        db.select('*').from('users').where('email','=',email)
            .then(user => {
                try {
                    const isCorrect = bcrypt.compareSync(password, user[0].hash_password);
                    if(isCorrect) {
                        res.json(user[0])
                    }else{
                        res.json('Email or Password are incorrect')
                    }
                 }catch{(err) =>  res.status(400).res.json('Error somthing, wrong credentials')}
            }).catch(err => res.status(400).res.json("unable to get use"))

    }

}


    module.exports = {
        handleSignin: handleSignin
    }