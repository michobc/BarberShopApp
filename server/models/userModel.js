const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // to hash the password
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },

    lastName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:false
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    isBarber:{
        type: String,
        required: true
    },
    shop_ID:{
        type:String,
        required: false
    }
},{timestamps:true});

//static signup method

UserSchema.statics.signup = async function(body){
    const {firstName,lastName,email,password,address,phoneNumber,isBarber,shop_ID} = body;
    const exists =await this.findOne({email})
    if (exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)// the bigger the number the more secure it is
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({firstName,lastName,email,password:hash,address,phoneNumber,isBarber,shop_ID})

    return user
}


UserSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error ('All fields must be filled')
    }
    const user = await this.findOne({email})
    if (!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Incorrect password')
    }
    return user
}
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel