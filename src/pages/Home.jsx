import logo from '../assets/images/home-logo.png'
import '../assets/css/home.css'

// typewriter-effect
import Typewriter from "typewriter-effect"

//字體
import Typography from '@mui/material/Typography'

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
})


function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <header className="App-header">
        <div className="home_wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <Typography variant="h4">
        <div style={{ position: 'absolute', top: '80%', left: '43%' , color:'#d1dddb'}}>
          <Typewriter
            options={{
              strings: [
                "Hi !    I am Ian",
                "Hi !    I am EN",
                "Hi !    I am GD"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
      </Typography>
    </div>
  )
}

export default App
