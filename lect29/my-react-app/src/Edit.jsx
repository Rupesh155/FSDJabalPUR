import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    // id=1
    let {id}=    useParams()
   
    console.log(id,"heheh");
    
    let arr=['hello','hellloo']
  return (
    <div>
        <fieldset> 
            <legend>edit</legend>
         <form> 

        <input type='text' placeholder='Enter your name'/>
        <button>save</button>

        </form>
        </fieldset>
    </div>
  )
}

export default Edit