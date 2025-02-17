import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = ({todo,SetTodo}) => {
      let navi=   useNavigate()
    let {id}=    useParams()
    let newId=Number(id)
    let newData=   todo.filter((a,index)=>{
        return index==id
    
      })
    let [input,SetInput]=useState(newData)

    console.log(todo,"hehehehe");

    //   useEffect(()=>{
    //           SetNewTodo(newData)

    //   },[])

function fun1(){
    // SetNewTodo(input)
    let arr=[...todo]
    // let arr=['hello','hiiii']
    // arr[1]='gn'
    arr[newId]=input

    SetTodo(arr)
    navi('/')
}


  return (
    <div>
        <fieldset> 
            <legend>edit</legend>
   

        <input type='text'  name='input' onChange={(e)=>SetInput(e.target.value)}  value={input}  placeholder='Enter your name'/>
        <button onClick={fun1}>save</button>

   
        </fieldset>
    </div>
  )
}

export default Edit
