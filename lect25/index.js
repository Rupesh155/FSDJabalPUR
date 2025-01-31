//  let inp=  document.querySelector('input')

//  inp.addEventListener('input',(event)=>{
//     console.log(event.target.value);
    
//  })


//    let form=   document.querySelector('form')
//    form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(form[0].value,"heheh");
//     console.log(form[1].value,"heheh");
//     let data={
//         name:form[0].value,
//         email:form[1].value,
//         passWord:form[2].value
//     }

//     localStorage.setItem('user',JSON.stringify(data))
//    let userData=  localStorage.getItem('user')

//    console.log(userData,"usese");
//    console.log(JSON.parse(userData),"usese");

   


    
//    })



//   let LoginForm=    document.querySelector('#one')

//   LoginForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//       let userData=  localStorage.getItem('user')
//       let parsData=JSON.parse(userData)
//       console.log(LoginForm[0].value,);
      
//        if(LoginForm[0].value==parsData.email && LoginForm[1].value==parsData.passWord){
//         alert('sab kuch theek hai ')
//        }
//        else{
//         alert('kuch bhi????')
//        }

//   })






// localStorage.setItem('user','gm good edm')



let btn=  document.querySelector('button')
let inp= document.querySelector('input')
 let ul=   document.querySelector('ul')
 btn.addEventListener('click',()=>{
   let li=   document.createElement('li')
   li.innerText=inp.value
   ul.appendChild(li)
   inp.value=''


 })





