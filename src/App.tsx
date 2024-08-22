import './App.css'
import Header from './components/header/Header'
import Main from './pages/Main'
import Footer from './components/footer/Footer'
import React from 'react'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
