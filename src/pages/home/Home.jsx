import { Button, Container, TextField, Typography } from '@material-ui/core';
import {useState } from 'react';
import {Link} from 'react-router-dom'
//import api from '../../api/api';

const Home = () => {
   const [name, setName] = useState('')
   //const [dataUser, setDataUser] = useState([])

   // async function handleSubmit() {
     
   //    try{
   //       const response = await api.get(`/users/${name}/repos`)
   //       setDataUser([...dataUser, response.data ])
   //       console.log(response.data)
         
   //    } catch(e){
   //       console.log(e)
   //    }
      
   // }

   return (
      <Container component="article" maxWidth="sm">
         <form>
            <Typography variant="h3" 
               component="h1" 
               align="center">
                  FindGithub
            </Typography>

            <TextField 
               value={name} 
               onChange={event => setName(event.target.value)} 
               label="Digite um nome de usuario" 
               margin="normal" 
               fullWidth
               
            />
             <Link to={`/users/${name}`} 
               style={{ textDecoration: 'none' }}> 
               <Button
                  type="submit"
                  variant="contained" 
                  color="primary"
                  fullWidth >
                  Pesquisar 
               </Button>
            </Link>
         </form>
      </Container>
   )
}

export default Home;