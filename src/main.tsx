import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import ThemeConfig from './config/ThemeConfig.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={ThemeConfig}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
