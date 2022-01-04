import React, { useState } from 'react'
import { ButtonTab } from '../../components/ButtonTab';
import { Nav } from './Styles'
import Headers from '../../components/Headers'
import Repositorys from '../repositorys';
import Starred from '../starred';


const Initial = () => {

   const [ activeTab, setActiveTab ] = useState(0)

   const handleTab1 = () => {
      setActiveTab(0);
   };
   
   const handleTab2 = () => {
      setActiveTab(1);
   };
   
   return (
      <div>
         <Headers />

         <Nav>
            <ButtonTab onChange={handleTab1} nameButton="Repositorios" />
            <ButtonTab onChange={handleTab2} nameButton="Starred" />
         </Nav>
         

         {activeTab === 0 ? <Repositorys /> : <Starred />}
               
      </div>
         
   )

}

export default Initial
