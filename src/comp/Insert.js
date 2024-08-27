import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Insert = ({dispatch}) => {
  
  let navigate = useNavigate();
  let [tel, setTel] = useState();

  let changeTel = (e) => {
    let v = e.target.value
    // 하이픈 넣기
    let formV = v.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    setTel(formV)

    // 3자리마다 콤마
    // let comma = v.replaceAll(',','')
    // setTel(comma.replace(/\B(?=(\d{3})+(?!\d))/g,','))
  }

  function info(e){
    e.preventDefault();

    let formdata = new FormData(e.target);
        formdata.append('date',Date.now());

    let add = Object.fromEntries(formdata);

    axios.post("http://localhost:3030/list",add)
    dispatch({type:'post', data:add})
    navigate('/list')

  }


  return (
    <div className='insert'>
        <Header/>
        <h2>새로운 친구를 등록해 주세요!</h2>
        <div>
          <form onSubmit={info}>
            <input type="text" name="name" />
            <input type="text" name="tel" value={tel} onChange={(e)=>{changeTel(e)}} />
            <input type="submit" value="저장"/>
          </form>
        </div>
    </div>
  )
}

export default Insert