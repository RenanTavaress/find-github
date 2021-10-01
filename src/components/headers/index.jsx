import { Avatar, Paper, Tab, Tabs } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../../api/api';
import styled from 'styled-components'

const Header = styled.header`
   position: relative;
   width: auto;
   height: auto;


   /* position: relative;
   width: 500px;
   line-height: 50px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   top: 80px; */
   
`


const TituloHome = styled.h1`
   text-align: center;
   font-size: 3rem;
   font-weight: lighter;
`

const Headers = ({onChange, value2}) => {
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
               onChange={onChange}
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