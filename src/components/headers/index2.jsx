import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../../api/api';
import {Header ,TituloHome} from './styles'
import { Button } from '../../components/Button/Index';



const Headers = ({onChange, value2}) => {
   const {user} = useParams()
   const [id, setId] = useState('')

   useEffect(() => {
      api.get(`/users/${user}`).then(response => {
         setId(response.data.avatar_url)
      })
   },[user])

   function teste (){
      console.log('teste')
   }

   return(
      <Header>
         <TituloHome >Bem vindo ao github do {user}</TituloHome>
         <div align="center" >
            <Avatar alt="Logo" src={id} style={{top: '5px', margin: '20px', height: '70px', width: '70px' }} />
         </div>
         
         
            <div 
               value={value2}
               onChange={onChange}
            >
               <Button teste={value2} botao="Repositorys"/>
               <Button botao="Starred"/>
            </div>
             
           
      
         
      </Header>
   )
}

export default Headers