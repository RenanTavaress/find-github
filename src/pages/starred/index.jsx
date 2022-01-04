import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect,  useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import Spinner from '../../components/Spinner';
import { NotFound } from '../../components/NotFound';


const Starred = () => {
   const [starred, setStarred] = useState([])
   const [ loading, setLoading ] = useState(false)
   const { user } = useParams()

   useEffect(() => {
      async function starred (){
         const response = await api.get(`/users/${user}/starred`)
         setStarred(response.data)
         setLoading(true)
      }
      starred()
      
   }, [user])

   return (
      <div>

         {!loading && <Spinner/>}

         {loading && !starred.length && 
            <NotFound>No Results Found</NotFound>
         } 

         {loading && starred.length > 0 && (
            <>
               {  
                  <Card align="center">
                     {starred.map(stars => ( 
                        <CardContent key={stars.id} >
                           <Typography 
                           	variant="h5" 
                           	component="h2">
                              	{stars.name}
                                 
                           </Typography>

                           <Typography 
                           	color="textSecondary">
                              	{stars.description}
                           </Typography >
                           
                        </CardContent>  
                     ))}
                  </Card>
               }
            </>
         )}
      </div>
   )
}

export default Starred