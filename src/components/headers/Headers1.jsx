import { Avatar, Paper, Tab,Tabs } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../../api/api';
import {Header, TituloHome} from './styles'



const Headers = ({mudanca, value2}) => {
   const {user} = useParams()
   const [id, setId] = useState('')

   useEffect(() => {
      api.get(`/users/${user}`).then(response => {
         setId(response.data.avatar_url)
      })
   },[user])

   return(
      <Header>
         <TituloHome >Bem vindo ao github do {user}</TituloHome>
         <div align="center" >
            <Avatar alt="Logo" src={id} style={{top: '5px', margin: '20px', height: '70px', width: '70px' }} />
         </div>
         
         <Paper className={`flexGrow: 1`} >
            <Tabs
               value={value2}
               onChange={mudanca}
               indicatorColor="primary"
               textColor="primary"
               centered
            >
               
               <Tab label="Repositorios" />
               <Tab label="Starred" />
            
            </Tabs>
         </Paper>
         
      </Header>
   )
}

export default Headers