import axios from 'axios';
import React, { useState } from 'react'

const Add = ({setData}) => {
    const [info, setInfo] = useState({name:'', phone:''})
    let changeData = (e) => {
        let property = e.target.name;
        let value = e.target.value;
        setInfo({...info, [property]:value})
    }
    let addData = (e) => {
        let id = Date.now()
        // let date = new Date(id)
        // let year = date.getFullYear();
        // let month = date.getMonth() + 1;
        let datas = {id, ...info};

        axios.post("http://localhost:3030/info", datas);
        setInfo({name:'', phone:''})   // 여긴 뭐지? 수업 놓쳤나봐
        setData(d=>[...d, datas])

        // 인풋 초기화
        const input = document.querySelectorAll(".input-wrap input")
        for(let i=0;i<input.length;i++){
            input[i].value='';
            input[0].focus();
        }
    }
  return (
    <div className='wrap add'>
        <h2>새로운 친구를 등록해주세요!</h2>
        <div className='input-wrap'>
            <input type='text' placeholder='이름' name="name" onChange={(e)=>{changeData(e)}}/>
            <input type='text' placeholder='010-0000-0000' name="phone" onChange={(e)=>{changeData(e)}}/>
            <button type='submit' onClick={addData}>저장</button>
        </div>
    </div>
  )
}

export default Add