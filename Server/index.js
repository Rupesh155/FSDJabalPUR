// console.log('hello');
// console.log(document);
//  let fs=  require('fs')
//  fs.writeFileSync('index.html','helllo')
//  fs.unlinkSync('index.html')

 let express=   require('express')
 let mongoose=   require('mongoose')

 let app=     express()
 mongoose.connect('mongodb://127.0.0.1:27017/nirmalbaba').then(()=>{
    console.log('db....');
    
 }).catch((err)=>{
    console.log(err);
    
 })


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

 app.get('/home',(req,res)=>{
    res.send('home')
 })

 
 app.listen(4000,()=>{
    console.log('server running....');
    
 })







 




