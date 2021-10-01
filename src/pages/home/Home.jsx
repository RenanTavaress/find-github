import { Button, TextField, } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const DivInicial = styled.div`
   position: relative;
   width: 500px;
   line-height: 50px;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   top: 80px;
   
`

const TituloInicial = styled.h1`
   text-align: center;
   font-size: 3rem;
   font-weight: lighter;
`



const Home = () => {
   const [name, setName] = useState('')
   return (
   
      <DivInicial>
         <form>
            <TituloInicial> FindGithub</TituloInicial>

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