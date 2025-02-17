 // functional based   
// class based               






// const App = () => {

//   return (
//     <div>
//     <h1> hello</h1>
//     <h3> hiii</h3>
//     </div> 

//   )
// }

// export default App



// import './App.css'
// import  P from './Home'
// import  {Diff} from './Home'
// const App = () => {
//   let user='avni'
//   return (
//     <div>
//       {/* <h1>{user}</h1> */}
//    <P/>
//    <Diff/>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   let arr=[1,2,3,4,5,6]
// // function add(){
// //   console.log('helloo'); 
// // }
//   return (
//     <div >
//       {/* <button onClick={add}>add</button> */}
//       {
//         arr.map((a)=>{
//           return(<div>
//              <h2>{a}</h2>
//           </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App





// functional => static vs  class=>dynamic

// import { useState } from "react"
// const App = () => {
//         let [color,SetColor]=  useState(false)
//   function fun1(){
//     // SetColor('blue')
//     if(color){
//       SetColor(false)
//     }
//     else{
//       SetColor(true)
//     }
//   }
//   return (
//     <div style={{backgroundColor:color?'black':'blue',height:'100vh'}}>
//       <button onClick={fun1}>click: {color}</button>
//     </div>
//   )
// }
// export default App




// import React, { useState } from 'react'

// const App = () => {
//          let [input,SetInput]=    useState()
//          let [data,SetData]=    useState([])

//   function fun1(e){
//     console.log('heheheh');
//     SetInput(e.target.value)
    
//   }
//   function done(){
//     SetData([...data,input])
//     SetInput('')

//   }

//   function d(id){
//     console.log(id,"kyayay");
//      let newA=  data.filter((val,index)=>{
//       return index!==id

//     })
//     SetData(newA)
    
//   }

//   return (
//     <div>
//       {/* <h3> {data}</h3> */}
//       {
//         data.map((a,i)=>{
//           return(<div>
//             <li>{a}</li>
//             <button  onClick={()=>d(i)}>delet</button>
//           </div>)
//         })
//       }
//       <input type='text' onChange={fun1} placeholder='Enter your name'    />
//       <button onClick={done}>add</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// const App = () => {
//   let [input,SetInput]=useState({
//     name:'',
//     email:'',
//     passWord:''
//   })

//   function fun1(e){
//     // console.log(e.target,"heheh");
//     let {name,value}=e.target
//     // console.log(name,value,"he");
//     SetInput({...input,[name]:value})
//     console.log(input,"hellooo");
//     // SetInput(e.target.value)
//   }

//   return (
//     <div>
//       {/* <h2>{input}</h2> */}
//       <input type='text' name='name' value={input.name}   onChange={fun1} placeholder='Enter your name'/>
//       <br/>
//       <br/>        
//       <input type='text'  name='email'  value={input.email} onChange={fun1} placeholder='Enter your email'/>
//       <br/>   
//       <br/>    
//       <input type='text' name='passWord'  value={input.passWord}  onChange={fun1} placeholder='Enter your password'/>
//       <br/>
//       <br/>
//       <button> submit</button>

//     </div>
//   )
// }
// export default App
// let obj={
//   id:1,
//   name:"hhew"
// }
// let {id}=obj



// import React, { useEffect, useState } from 'react'
// import './App.css'
// const App = () => {
//     // let [count,SetCount]=   useState(0)
//     // let [city,SetCity]=   useState('delhi')
//     let [apiData,SetApi]=useState([])
//     // console.log('hello');
//     useEffect(()=>{
//       fetch('https://dummyjson.com/recipes').then((res)=>{
//         return res.json()
    
//       }).then((data)=>{
//         console.log(data.recipes);
//         SetApi(data.recipes)
//       })

//     },[])
  
//   function d(id){
//     let newApiData=   apiData.filter((val,index)=>{
//       return index!=id

//     })
//     SetApi(newApiData)

//   }
  
//     return (
//       <div id='card'>  
//         {apiData.map((val, index) => {
//           return (
//             <div className='card-item' onClick={()=>d(index)}> 
//               <img src={val.image}  />
//               <p>{val.name}</p>
//             </div>
//           )
//         })}
//       </div>
//     );
// }

// export default App


// import React from 'react'
// import Home from './Home'

 

// const App = ({main}) => {
//   let user='hellllo'
//   return (
//     <div>
//       <Home data={user}  main={main}/>
//     </div>
//   )
// }

// export default App

// main=> app=> home=>A=>B=>C=>D

// useState=>useReducer

// import React, { act, useReducer, useState } from 'react'
// // useState              
// const App = () => {
//   function reducer(count,action){
//     if(action.type==='incre'){
//       return count+1

//     }
//     else if(action.type='d'){
//       return count-1
//     }
//     else if(action.type==='r'){
//       return 0
//     }
//   }
//    let [count,dispatch]=    useReducer(reducer,0)
//    function fun1(){
//     dispatch({
//       type:'incre'
//     })
//    }
//   return (
//     <div>
//      <h2>{count}</h2>
//       <button onClick={fun1}>Incre:</button>
//       <button onClick={()=>dispatch({type:'d'})}>D:</button>
//       <button onClick={()=>dispatch({type:'r'})}>reset:</button>
//     </div>
//   )
// }

// export default App  

// import React from 'react'
// import Home from './Home'
// import { Route, Routes } from 'react-router-dom'
// import About from './About'
// import SignUp from './SignUp'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//       <Routes>
//         <Route  path='/'  element={<About/>} />
//         <Route  path='/signup'  element={<SignUp/>} />

//       </Routes>
//     </div>
//   )
// }

// export default App

// // // http://google.com/insta/userID
// // http://localhost:5371/
// // npm i react-router-dom



// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";
// import Board from "./Board";
// import Dice from "./Dice";
// import Token from "./Token";

// const App = () => {
//   const [positions, setPositions] = useState({
//     red: 0,
//     blue: 0,
//     green: 0,
//     yellow: 0,
//   });

//   const moveToken = (color, diceValue) => {
//     setPositions((prev) => ({
//       ...prev,
//       [color]: prev[color] + diceValue * 50, // Adjust based on board layout
//     }));
//   };

//   return (
//     <div>
//       <h1>Ludo Game</h1>
//       <Board />
//       <Dice onRoll={(value) => moveToken("red", value)} />
//       <Token color="red" position={positions.red} moveToken={moveToken} />
//     </div>
//   );
// };
// export default App;
import React,{useState} from 'react'
import Todo from './Todo'
import { Route, Routes } from 'react-router-dom'
import Edit from './Edit'
const App = () => {
  let [todo,SetTodo]=useState([])  
  
  return (
    <div>
    <Routes>
         <Route path='/'   element={<Todo todo={todo}  SetTodo={SetTodo} />}/>
         <Route path='/edit/:id'   element={  <Edit todo={todo} SetTodo={SetTodo}/>}/>
    </Routes>
    </div>
  )
}

export default App
// locahost:5733/edit/1

// crud

// main=> app=> todo=>
        