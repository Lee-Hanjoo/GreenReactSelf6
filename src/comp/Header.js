import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h3>Contact Application</h3>
        <nav>
            <Link to="/">홈</Link>
            <Link to="/list">리스트</Link>
            <Link to="/insert">신규등록</Link>
        </nav>

    </div>
  )
}

export default Header