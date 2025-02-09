// ... 
// let arr=[1,2,3,4,5]
// let num=[...arr,6,7,8,9]
// console.log(num)
// function sum(a,b,c,...rest){
//     console.log(rest,"hwhw");
// }
// sum(1,2,3,4,5,6,7,6)

// let obj={
//     id:1,
//     name:'hello'
// }
// // obj.name
// let {id,name}=obj
// // console.log(id);
// let arr=[1,2,3,4,5,6,67]

// // console.log(arr[3]);
// let [a,b]=arr
// console.log();
// Array.prototype.myfilter=function(calback){
//     let newArr=[]
//     for(let i=0;i<this.length;i++){
//         newArr.push(calback(this[i],i,this))    
//     }
//     return newArr
// }
// let num=[1,2,3,45]
//       let data=    num.myfilter((a,b)=>{
//         return a*2

//     })
//     console.log(data,"datat");

// let arr=[[1,2,3],[3,3,4,5]]
// let a=[...arr]
// console.log(a);

// let a=  arr.reduce((a,b)=>{
//     return a

// },[])


// let newData=new Set(a)
// console.log(newData,"aa");

// const promise = new Promise(function C(resolve, reject) {
//     console.log(1);
//     setTimeout(function D() {
//         console.log("timerStart");
//         resolve("success"); 
//         console.log("timerEnd");  
//     }, 0);
//     console.log(2);
// });

// promise.then(function f(res) {
//     console.log(res);
// });

// setTimeout(function E() {
//     console.log("Are!!");
// }, 0);

// console.log(4);

// let obj={
//     id:1,
//     name:"hello"
// }
// console.log(obj.__proto__.__proto__,"heheh");
// console.log(obj.map(),"heheh");



// console.log(obj.toString());
// console.log(obj.id);
// console.log(obj.fullname);

// let arr=[1,2,3,4,5 ]

// arr.map(()=>{
// })
// console.log(arr.__proto__.__proto__,"dekhoo");


// arrr=> obj => null



// console.log(this);

// function sum()
// {
//     console.log(this);
// }


// sum()



// Array.prototype.myMap=function(callback){
//         let newArr=[]
//         for(let i=0;i<this.length;i++){
//             newArr.push(callback(this[i],i,this))
//         }
//         return newArr   
// }        

// let arr=[1,2,3,4,5]                 
//    let data=   arr.myMap((a,b,c)=>{
//         return a*2

// })

// console.log(data,"datat");



// Array.prototype.myFilter=function(calback){
//     let newArr=[]
//     for(let i =0;i<this.length;i++){
//         if(calback(this[i],i,this)){
//             newArr.push(this[i])
//         }
//     }
//     return newArr

// }
// let arr=[1,2,3,45,6,67]
// let data=arr.myFilter((a,b,d)=>{
//     return a>2

// })
// console.log(data);



      


      

      


    //   arr.map((a,b,c)=>{

    //   })
// arr.myfunction=function(){
//     console.log(this);
    
// }

// arr.myfunction()


    







// console.log("1");

// const promise = new Promise((resolve) => {
//     console.log("2");
//     setTimeout(() => {
//         console.log("3");
//         resolve();
//         for(let i=0;i<5;i++){
//             console.log('hellooo');
//             setTimeout(()=>{
//                 console.log('gm');
                
//             },100)
            
//         }
//     }, 0);
// });

// promise.then(() => {
//     console.log("4");
// });

// console.log("5");


// function outer(){console.log('hehhe');

//     return function innner(){
//         console.log('hello');
        

//     }
// }
// outer()()
// function sum(a) {
//     return function (b) {
//         if (b) return sum(a + b); 
//         return a;  
//     };
// }

// console.log(sum(1)(2)(3)(4)()); 




// function a(a){
//     console.log('hello');
    
//     return function(b){
//         console.log('hii');
//         return function(c){
//             console.log('byeee');
//             console.log(a+b+c);           
//         }
        
//     }
// }
// //  let b= a()
// //  b()
// a(5)(10)(5)
function sum(a){
    return function(b){
        // console.log(a+b);
        if(b) return sum(a+b)
            return a
    }
    // if(b) return sum(a+b)
    //     return a
    
}

console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)());

                        
let arr=[1,2,3,4,5,65,7]












