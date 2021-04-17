import { makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import api from '../../api/api'
import Spinner from '../../components/Spinner/Index'

const useStyles = makeStyles({
   root: {
      paddingTop: '15px',
   }
})

const Repositorys = () => {
   const [user, setUser] = useState([])
   const {params} = useRouteMatch()
   const [ loading, setLoading ] = useState(false)
   const classes = useStyles()

   useEffect(() => {
      async function teste() {
         const response = await api.get(`/users/${params.user}/repos`)
         setUser(response.data)
         setLoading(true)
      }
      teste()
      
   },[params.user])

   return (
      <>
         <div>
         {  
            loading ?
            user.map(userr => (
               
               <Typography 
                  classes={{root: classes.root}} 
                  align="center" 
                  color="textPrimary">
                     <a key={userr.id}
                        target="_blank"
                        href={`https://github.com/${params.user}/${userr.name}`}
                        rel="noreferrer">
                        {userr.name}
                     </a>
                  </Typography>
            ))
            :  <Spinner />
         }
         </div>
         
      </>
   )
}

export default Repositorys;