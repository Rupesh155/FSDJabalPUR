fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()

}
).then((data)=>{
 
    call(data.recipes)
    

})
 let div=   document.querySelector('div')
function call(data){
    console.log(data,"hahah");
    let h1=  document.querySelector('img')

    for(let i of data){
    
     h1.setAttribute('src',i.image)
    //  h1.innerText=i.name
    //  div.append(h1)

    }
    
}