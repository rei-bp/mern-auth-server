require('dotenv').config()
const db = require('./models')
db.connect() //test the db connection

const dbTest = async () => {
    try {
        //CREATE
        // const newUser = new db.User({
        //     name: 'Spongebob Squarepants',
        //     email: 'cook@krustykrab.com',
        //     password: 'ilovesandy'
        // })

        // await newUser.save()
        // console.log('new user:', newUser)
       
        //READ
        const foundUser = await db.User.findOne({
            name: 'Spongebob Squarepants'
        })

        console.log('found user:', foundUser)
    } catch (err) {
        console.log(err)
    }
}

dbTest()