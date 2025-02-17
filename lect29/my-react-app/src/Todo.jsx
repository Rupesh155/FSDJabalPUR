// import React, { useState } from 'react'
// const Todo = () => {
//     let [val,SetVal]=useState()
//     let [data,SetData]=useState([])
//     console.log(val,"hehe");
//     let a=[]
//     function d(){
//         for(let i =1;i<=val;i++){
//             a.push(i)   
//         }
//         // console.log(a,"kyaaa");
//         SetData(a)    
//     }
//   return (
//     <div>
//         {
//             data.map((d)=>{  
//                 return(<>
//                 <p>{d}</p>
//                 </>)
//             })
//         }
//         <input type='text' onChange={(e)=>SetVal(e.target.value)} placeholder='Enter your todo'/>
//         <button onClick={d}>click</button>
//     </div>
//   )
// }

// export default Todo
// let updatedTodos = [...todo];
// updatedTodos[todoIndex] = input; 
// SetTodo(updatedTodos);
// navigate('/'); 


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Todo = ({todo,SetTodo,newTodo}) => {  

    let navigate=    useNavigate()   
  let [input,SetInput]=useState('')    


  console.log(newTodo,"kya tum sahi ho ");
  


  function edit(id){                                 
                console.log(id,"mujhee dekhooo");     
              navigate(`/edit/${id}`)                 
  }
  return (

         <div>
            <input type='text' onChange={(e)=>SetInput(e.target.value)} placeholder='Enter your todo'/>
            <button onClick={()=>SetTodo([...todo,input])}>click</button>
          {                        
        todo.map((a,index)=>{
          return(<>
          <li>{a}</li>
          <button>delet</button>
          <button onClick={()=>edit(index)}>Edit</button>
          </>)
        })
      }
    </div>
  )
}

export default Todo


