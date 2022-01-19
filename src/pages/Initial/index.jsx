import React from 'react'
import { ButtonTab } from '../../components/ButtonTab';
import { Nav } from './Styles'
import { useContext } from 'react';
import { TabContext } from '../../common/context/Tab'
import Headers from '../../components/Headers'
import Repositorys from '../repositorys';
import Starred from '../starred';



const Initial = () => {
   const { activeTab, handleTab1, handleTab2 } = useContext(TabContext)

   return (
      <div>
         <Headers />

         <Nav>
            <ButtonTab onChange={ handleTab1 } nameButton="Repositorios"/>
            <ButtonTab onChange={ handleTab2 } nameButton="Starred" />
         </Nav>
         <hr/>

			{activeTab === 0 ? <Repositorys /> : <Starred />}
			
      </div>
         
   )

}

export default Initial
