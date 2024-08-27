import React from 'react'

const List = ({data}) => {

    let dataItem = data.map((item)=>{
        return (
            <li key={item.id}>
                <p className='name'>
                    <span>{item.name[0]}</span>
                    {item.name}
                </p>
                <a className='tel-btn' href={`tel:${item.phone}`}>전화</a>
            </li>
        )
    })
  return (
    <div className='wrap list'>
        <h2>전화번호가 저장된 연락처 <span>{data.length}</span>개</h2>
        <ul className='phone-list'>
            {dataItem}
        </ul>
    </div>
  )
}

export default List