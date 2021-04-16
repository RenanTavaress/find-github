import { Avatar, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../../api/api';

const Headers = ({onChange, value2}) => {
   const {user} = useParams()
   const [id, setId] = useState('')
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      api.get(`/users/${user}`).then(response => {
         setId(response.data.avatar_url)
      })
      setLoading(true)
   },[user, loading])

   return(
      <>
         <Typography variant="h4" component="h2" align="center" >Bem vindo ao github de {user}</Typography>
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
      </>
   )
}

export default Headers