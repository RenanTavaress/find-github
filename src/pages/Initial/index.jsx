import React from 'react'
import { ButtonTab } from '../../components/ButtonTab/ButtonTab';
import { Nav } from './Styles'
import { TabContext } from '../../common/context/Tab'


import Headers from '../../components/Headers/Headers'
import Repositorys from '../repositorys/Repository';
import Starred from '../starred/Starred';
import { useContext } from 'react';

const Initial = () => {
   const { activeTab, handleTab1, handleTab2 } = useContext(TabContext)

   return (
      <div>
         <Headers />

         <Nav>
            <ButtonTab onChange={ handleTab1 } nameButton="Repositorios"/>
            <ButtonTab onChange={ handleTab2 } nameButton="Starred" />
         </Nav>
         

         {activeTab === 0 ? <Repositorys /> : <Starred />}
               
      </div>
         
   )

}

export default Initial
