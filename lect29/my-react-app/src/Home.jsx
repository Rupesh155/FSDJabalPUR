

// const Home = () => {
//   return (
//     <div>Home fileeee</div>
//   )
// }
// const Diff = () => {
//     return (
//       <div>mai alg hu</div>
//     )
//   }

//   export {Diff}



// export default Home
// props
// main=> app=>home
// import React from 'react'

// const Home = ({data,main}) => {
//   let a='5'
//   // console.log(a);

//   return (
//     <div>{data} {main}</div>
//   )
// }
// export default Home





import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <nav>
        <Link>
          <li>
            Home
          </li>
        </Link>
        <Link to={'/'}  >
          <li>
            About
          </li>
        </Link>
        <li>Contact</li>
        <Link to={'/signup'}>
          <li >
            SignUp
          </li></Link>
      </nav>
    </div>
  )
}
export default Home






