const bcrypt = require('bcryptjs')

const cryptoTest = async () => {
    try {
    //test password
    const password = 'hello'
    //specify the salt rounds
    const salt = 12 // 12 is industry standard
    //hash the password
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword)

    // const match = await bcrypt.compare('asdf', hashedPassword)
    // console.log('match:', match)
    } catch (err) {
        console.log(errer)
    }
}

cryptoTest()