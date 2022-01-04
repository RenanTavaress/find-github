import { makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import api from '../../api/api'
import Spinner from '../../components/Spinner'
import { NotFound } from '../../components/NotFound';

const useStyles = makeStyles({
   root: {
      paddingTop: '15px',
   }
})

const Repositorys = () => {
   const [user, setUser] = useState([])
   const [ loading, setLoading ] = useState(false)

   const { params } = useRouteMatch()
   const history = useHistory()
   const classes = useStyles()

   useEffect(() => {
      api.get(`/users/${params.user}/repos`).then(response => {
         setUser(response.data)
         setLoading(true)
      }).catch(() => {
         history.push('/404')
      })
      
   },[params.user, history])

   return (
      <div>
       
         { !loading && <Spinner/>}
         
         {loading && !user.length && 
            <NotFound>No Results Found</NotFound>
         } 

         {loading && user.length > 0 && (
            <>
               {
                  user.map(repository => (
                     <Typography 
                        key={repository.id}
                        classes={{root: classes.root}} 
                        align="center" 
                        color="textPrimary">
                        <a
                           target="_blank"
                           href={`https://github.com/${params.user}/${repository.name}`}
                           rel="noreferrer">
                              {repository.name}
                        </a>
                     </Typography>
                  ))
               }
            </>
         )}
      </div>
   )
}

export default Repositorys;