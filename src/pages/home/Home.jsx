import { Button, TextField, } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {DivInicial,TituloInicial} from './style'

const Home = () => {
   const [name, setName] = useState('')
   return (
   
      <DivInicial>
         <form>
            <TituloInicial>FindGithub</TituloInicial>

            <TextField 
               value={name} 
               onChange={event => setName(event.target.value)} 
               label="Digite um nome de usuario" 
               margin="normal" 
               fullWidth
            />

            <Link  
               to={`/users/${name}`}
               style={{ textDecoration: 'none' }}> 
               
               <Button
                  type="button"
                  variant="contained" 
                  color="primary"
                  fullWidth >
                  Pesquisar 
               </Button>
               
            </Link>
         </form>
      </DivInicial>
   )
}

export default Home;