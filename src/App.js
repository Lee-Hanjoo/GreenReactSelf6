import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comp/Home';
import List from './comp/List';
import Insert from './comp/Insert';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

  function reducer(state,action){
    switch(action.type){
      case 'get' : return action.data;
      case 'post' : return [...state, action.data];
    }
  }

function App() {

  const [data,dispatch] = useReducer(reducer,[]);

  useEffect(()=>{
    axios.get("http://localhost:3030/list")
    .then(res=>{
      dispatch({type:'get', data:res.data})
    })
  },[])


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<List data={data}/>}/>
        <Route path='/insert' element={<Insert dispatch={dispatch} />}/>
      </Routes> 
    </Router>
  );
}

export default App;
