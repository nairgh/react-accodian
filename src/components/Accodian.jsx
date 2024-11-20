import React from 'react'
import AccodianItem from './AccodianItem'
const Accodian = ({data}) => {
  return (
    <div>
      <div className='accodian'>
         {data.map((el,i)=>(
            <AccodianItem title={el.title} text={el.text} num={i} key={el.title}/>
         ))}
      </div>
    </div>
  )
}

export default Accodian