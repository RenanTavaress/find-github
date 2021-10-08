import React, { useState } from 'react'


import Headers from '../../components/headers/index'
import Repositorys from '../repositorys/Repository';
import Starred from '../starred/Starred';

const Initial = () => {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      event.preventDefault()
      console.log(`teste`)
      setValue(newValue);
   };

   return (
      <div>
         
         <Headers onChange={handleChange} value2={value} />
         <div>
            {value === 0 && <Repositorys/>}
            {value === 1 && <Starred/>}
         </div>
         
      </div>
      
   )

}

export default Initial