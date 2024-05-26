import './App.css'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'yellow',
    color: 'black',
  }
}))

function App() {

  const classes = useStyles();

  return (
    <>
      {/* <Button variant="contained" color="primary">Click me!</Button> */}
      <br />
      <Button className={classes.button}>Click me!</Button>
      <button className={classes.button}>Hello</button>
    </>
  )
}

export default App
