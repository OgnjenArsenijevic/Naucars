const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options){
    const SALT_FACTOR = 8
    if(!user.changed('password')){
        return
    }
    const salt = bcrypt.genSaltSync(SALT_FACTOR)
    const hash = bcrypt.hashSync(user.password, salt)
    user.setDataValue('password', hash)
    return hash
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    }, 
    {
            hooks:
            {
                beforeCreate: hashPassword,
                beforeUpdate: hashPassword
            }

    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }

    return User
}