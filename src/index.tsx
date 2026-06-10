import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import StyledEngineProvider from '@mui/material/StyledEngineProvider'

import App from './App'
import { AppTheme } from './theme'

import './index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppTheme>
        <App />
      </AppTheme>
    </StyledEngineProvider>
  </StrictMode>
)
