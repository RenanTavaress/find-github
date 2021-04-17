import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import Spinner from '../../components/Spinner/Index';

const Starred = () => {
   const [starred, setStarred] = useState([])
   const [ loading, setLoading ] = useState(false)
   const {user} = useParams()

   useEffect(() => {
      async function starred (){
         const response = await api.get(`/users/${user}/starred`)
         setStarred(response.data)
         setLoading(true)
      }
      starred()
   }, [user])

   return (
      <>
         {  
            loading ?
            <Card align="center">
               {starred.map(stars => ( 
                  <CardContent key={stars.id} >
                     <Typography variant="h5" component="h2" >{stars.name}</Typography>
                     <Typography color="textSecondary" >{stars.description}</Typography >
                  </CardContent>  
               ))}
            </Card>
            :  <Spinner/> 
         }
      </>
   )
}

export default Starred