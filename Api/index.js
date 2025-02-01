// fetch('https://dummyjson.com/recipes').then((res)=>{
//     return res.json()

// }
// ).then((data)=>{
 
//     call(data.recipes)
    

// })
//  let div=   document.querySelector('div')
// function call(data){
//     console.log(data,"hahah");
 

//     for(let i of data){
//         let h1=  document.querySelector('img')
//      h1.setAttribute('src',i.image)
//     //  h1.innerText=i.name
//     //  div.append(h1)

//     }
    
// }

// fetch('https://dummyjson.com/recipes')
//   .then((res) => res.json())
//   .then((data) => {
//     call(data.recipes);
//   });

// let div = document.querySelector('div');

// function call(data) {
//   console.log(data, "hahah");

//   for (let i of data) {
//     let img = document.createElement('img'); 
//     img.setAttribute('src', i.image);
//     img.style.width = "200px"; 
//     img.style.margin = "10px"; 

//     div.append(img); 
//   }
// }
//app.js


let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');


btn.addEventListener('click' , function(){
    let searchText = input.value;
     fetchData(searchText);
    input.value = '';
})

function fetchData(searchText){
    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    // .then(function(response){
    //     console.log(response.data);
    //     manipulateDom(response.data);
    // })
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).
    then((res)=>{
        return res.json()

    }).then((response)=>{
        console.log(response,"kyayayay");
        
        manipulateDom(response)

    })
}


function manipulateDom(datas){
    // while(list.firstChild){
    //     list.firstChild.remove();
    // }

    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = `
            <img src=${data.show.image.original} alt='photo'/>
            <br/>
            <h2> Genre: ${data.show.genres[0]} </h2>
            `
            list.appendChild(figure)
        }
    }
}