// this model DB will store the information for the login and profile 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        // min: 6,
        // max: 20
    },
    password: {
        type: String,
        required: true
    },
   
    name: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    }
    
});

UserSchema.pre('save', function(next){
    if (!this.isModified('password')) 
        return next();
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err)
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err);
        else {
            if (!isMatch)
                return cb(null, isMatch);
            return cb(null, this)
        }
    });
}

const User = mongoose.model('User',UserSchema);

module.exports = User;