import React from 'react'
// import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import reportWebVitals from './reportWebVitals'

// Hash Ruters
import { HashRouter } from "react-router-dom"

// 背景泡泡
import App from './App'
import './assets/css/all.css'

// theme
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: [
      "Noto Serif TC",
    ].join(','),
  },
  palette: {
    'main-color': {
      main: "#5f6d89"
    },
    primary: {
      main: "#d1dddb"
    },
    'main-lighter': {
      main: "#d1dddb"
    },
    'main-darker': {
      main: "#374157"
    },
    'second-color': {
      main: "#7f8fb0"
    },
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    {/* <StrictMode> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </StrictMode> */}
  </ThemeProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
