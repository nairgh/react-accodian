import React,{useState} from 'react'
import AccodianItem from './AccodianItem'
const Accodian = ({data}) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div>
      <div className="accodian">
        {data.map((el, i) => (
          <AccodianItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            text={el.text}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccodianItem>
        ))}
        <AccodianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title= "Testing..."
          num={33}
          key="test content"
         >
         <p>Use of Children props</p>
         <ul className='list'>
           <li>Item 1</li>
           <li>Item 2</li>
           <li>Item 3</li>
         </ul>
        </AccodianItem>
      </div>
    </div>
  );
}

export default Accodian