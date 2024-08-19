import * as React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './navbar/NavBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css'

function App() {
  return (
    <>
      <div>
        <ResponsiveAppBar/>
        <Typography variant="h4" gutterBottom>Minha pagina em React</Typography>
        <Button variant="contained">Hello world</Button>
      </div>
    </>
  )
}

export default App
