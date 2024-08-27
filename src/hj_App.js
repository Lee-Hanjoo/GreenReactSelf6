import { HashRouter as Router, Route, NavLink, Link, Routes } from 'react-router-dom'
import './App.css';
import Add from './pages/Add';
import List from './pages/List';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3030/info')
    .then((res)=> setData(res.data))
  },[])
  

  return (
    <Router>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add setData={setData} />}  />
          <Route path='/list' element={<List data={data} />} />
        </Routes>
        <nav>
          <Link to='/add' >신규등록</Link>
          <Link to='/list' >리스트</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
