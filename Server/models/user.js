 let mongoose=  require('mongoose')
    let userSchema=    mongoose.Schema({
        name:String,
        lastName:String,
        email:String,
        passWord:String

 })

    let User=    mongoose.model('user',userSchema)
    module.exports=User
