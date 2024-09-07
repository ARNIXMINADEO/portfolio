import './App.css'
import Header from './components/header/Header'
import Main from './pages/Main'
import Footer from './components/footer/Footer'
import React from 'react'
// import { Button } from '@chakra-ui/react'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div style={{
      width: '100%',
      height: 'auto',
    }}>
      {/* <Button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</Button> */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
