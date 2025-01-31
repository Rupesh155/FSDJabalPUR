// let h1=  document.querySelector('h1')
// // let h2=  document.querySelectorAll('h1')
// h1.innerText='byeeee!!!'
// console.log(h1,"kyayayay");



//  let a=   document.querySelector('a')
//  a.setAttribute('href','http://youtube.com')

//  console.log(a.getAttribute('href') );


const arr = [
    'https://images.unsplash.com/photo-1662330287683-6032da28889c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
    'https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
    'https://images.unsplash.com/photo-1660899599007-771f97039eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1662324580989-591a589c5e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
  ]
  
  const imageEl = document.querySelector('img');
  
  let num = 0;
  
  setInterval(function() {
    imageEl.setAttribute('src', arr[num]);
    num = (num + 1) % arr.length;
  }, 2000);
 




           

//  let div=  document.querySelector('div')
//  let h1=  document.createElement('h1')
//  h1.innerText='helllooo'
//  div.appendChild(h1)

//  let a=  document.querySelector('a')
// a.setAttribute('href','http://flipkart.com')
//  console.log(a.getAttribute('href'));
 

 

     




   







