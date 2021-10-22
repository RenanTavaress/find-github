import React, { useState } from 'react'
import { ButtonTab } from '../../components/ButtonTab/ButtonTab';


import Headers from '../../components/Headers/Headers'
import Repositorys from '../repositorys/Repository';
import Starred from '../starred/Starred';

const Initial = () => {

   const [activeTab, setActiveTab] = useState(0)

   const handleTab1 = () => {
      setActiveTab(0);
   };
   
   const handleTab2 = () => {
      setActiveTab(1);
   };
   
   return (
      <div>
         <Headers />
               
         <ButtonTab onChange={handleTab1} nameButton="Tab1" />
         <ButtonTab onChange={handleTab2} nameButton="Tab2" />

         {activeTab === 0 ? <Repositorys /> : <Starred />}
               
      </div>
         
   )

}

export default Initial