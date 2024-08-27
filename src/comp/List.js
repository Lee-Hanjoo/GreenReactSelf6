import React from 'react'
import Header from './Header'
import axios from 'axios';


const List = ({data}) => {

  let listItem = data.map((item)=>(
    <li>{item.name} <a href={`tel:${item.tel}`}>전화기</a></li>
  )) 
  
  return (
    <div>
        <Header/>
        <h2>전화번호가 저장된 연락처 {data.length}개</h2>
        <ul>
          {listItem}
        </ul>
    </div>
  )
}

export default List