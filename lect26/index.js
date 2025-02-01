//  let btn=  document.querySelector('button')
//  let inp=  document.querySelector('input')
//  let ul=  document.querySelector('ul')
//  btn.addEventListener('click',()=>{
//     let text= inp.value
//     let li=  document.createElement('li')
//     li.innerText=text
//     ul.append(li)
//     inp.value=''
//     li.addEventListener('click',()=>{
//         li.remove()
//     })
//  })

 
let inp=   document.querySelector('input')
let button = document.querySelectorAll('button')
for(let btn of button){
    btn.addEventListener('click',()=>{
        console.log('heheh');
           let text=  btn.innerText
           console.log(text,"kyaaa");
           if(text==='C'){
            inp.value=''
           }
           else if(text==='='){
            inp.value=eval(inp.value)
           }
           else{
            inp.value+=text
           }
    })

}


// eval(5+5-5)


