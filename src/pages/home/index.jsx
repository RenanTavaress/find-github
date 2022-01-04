import { Button, TextField, } from '@material-ui/core';
import { useState } from 'react';
<<<<<<< Updated upstream:src/pages/home/Home.jsx
import { useHistory } from 'react-router-dom'
import {DivInicial,TituloInicial} from './style'

const Home = () => {
   const history = useHistory()
   const [name, setName] = useState('')

   function handleOnSubmit(e){
      e.preventDefault()
      history.push(`/users/${name}`)
   }


=======
import { Link } from 'react-router-dom'
import { DivInicial, TituloInicial } from './styles'

const Home = () => {
   const [ name, setName ] = useState('')
>>>>>>> Stashed changes:src/pages/home/index.jsx
   return (
   
      <DivInicial>
         <form onSubmit={handleOnSubmit}>
            <TituloInicial>FindGithub</TituloInicial>

            <TextField 
               value={name} 
               onChange={event => setName(event.target.value)} 
               label="Digite um nome de usuario" 
               margin="normal" 
               fullWidth
            /> 
            <Button
               type="submit"
               variant="contained" 
               color="primary"
               fullWidth >
               Pesquisar 
            </Button>
         </form>
      </DivInicial>
   )
}

export default Home;