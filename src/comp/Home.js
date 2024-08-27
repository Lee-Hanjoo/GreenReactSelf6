import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h2>Contact Application</h2>
        <Link to="/insert">신규등록</Link>
        <Link to="/list">리스트</Link>

        <Commp1>
          <p>내용 들어가는 곳. props</p>
        </Commp1>
        <Commp2>
          <p>내용 들어가는 곳. children</p>
        </Commp2>
    </div>
  )
}

let Commp1 = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

let Commp2 = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Home