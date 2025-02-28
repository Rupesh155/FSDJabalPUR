 let mongoose=  require('mongoose')
const { type } = require('os')
const { emit } = require('process')
const { types } = require('util')
    let userSchema=    mongoose.Schema({
      //   name:String,
      //   lastName:String,
      //   email:String,
      //   passWord:String
      name:{
         type:String,
         require:true
      },
      lastName:{
         type:String,
         require:true

      },
      email:{
         type:String,
         require:true

      },
      passWord:{
         type:String,
         require:true

      },
      role:{
         type:String,
         enum:['admin','faculty','user'],
         default:'user'
      }


 })

    let User=    mongoose.model('user',userSchema)
    module.exports=User
