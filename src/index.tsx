import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import StyledEngineProvider from '@mui/material/StyledEngineProvider'

import App from './App'
import { AppTheme } from './theme'
import { store, persister } from './store'
import './index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <AppTheme>
            <App />
          </AppTheme>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </StrictMode>
)
