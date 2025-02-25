// console.log('hello');

//  let fs=  require('fs')
//  fs.writeFileSync('index.html','helllo')
//  fs.unlinkSync('index.html')
 let express=   require('express')

 let mongoose=   require('mongoose')

const User = require('./models/user')
let bcrypt=   require('bcrypt')
 let app=     express()

 app.use(express.json())  

 mongoose.connect('mongodb://127.0.0.1:27017/nirmalbaba').then(()=>{
    console.log('db....');   
 }).catch((err)=>{
    console.log(err); 
 })

//  mongosh
//    app.use((req,res,next)=>{
//     // console.log('mai hu don ');
//     next()
//     // res.send('mai hu don mai aage nhi jane dunga....hehe')

//    })
//    app.use((req,res,next)=>{
//     // console.log('mai hu don ');

//     res.send('mere se kaise bnachoge')
//    })

 app.get('/',(req,res)=>{
    res.send('helloooo')
 })  

  
   app.post('/create'  , async(req,res)=>{
    let user= req.body
      let data=     await  User.findOne({email:user.email})
      if(data){
        res.send('user jinda hai !!!')
      }
      else{
             let updatedPssword=       await bcrypt.hash(user.passWord,10)
             console.log(updatedPssword,"heheh");
             

       let dbUser=     new User({
            name:user.name,
            lastName:user.lastName,
            email:user.email,
            passWord:updatedPssword,

        })
         await  dbUser.save()
         res.send('user created')
      }

    }) 
    
    
    app.post('/login', async(req,res)=>{
        let loginData=req.body
         
        console.log(loginData,"heheh");
        
          let data=   await User.findOne({email:loginData.email})
          console.log(data,"datatta");
          
          if(!data){
            return res.send('user not found')
          }
          else{ 
                
           let validPass=    await bcrypt.compare(loginData.passWord,data.passWord)
           if(validPass){
            return res.send('login done')
           }
           else{
            return res.send('Invalid password')
           }



          }
        
    })


 app.get('/home',(req,res)=>{
    res.send('home')
 })

 
 app.listen(4000,()=>{
    console.log('server running....');
    
 })

// //  Db.users.find()

// let arr=[1,3,5,10,4,6,3,7,100]
   
//        let data=  arr.filter((a)=>{
//         return a>2

//       })
//       console.log(data,"data");
      


                   


       









 




