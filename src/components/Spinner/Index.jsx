import React from 'react'
import {CircularProgress, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
   root: {
      display: 'flex',
      justifyContent: 'center'
   }
})

const Spinner = () => {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <CircularProgress />
      </div>
   )
} 

export default Spinner;