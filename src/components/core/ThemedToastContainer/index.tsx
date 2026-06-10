import { useColorScheme, useTheme } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ThemedToastContainer = () => {
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  return (
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={resolvedMode}
      style={
        {
          '--toastify-color-light': theme.palette.background.paper,
          '--toastify-color-dark': theme.palette.background.paper,
          '--toastify-text-color-light': theme.palette.text.primary,
          '--toastify-text-color-dark': theme.palette.text.primary,
          '--toastify-color-success': theme.palette.success.main,
          '--toastify-color-error': theme.palette.error.main,
          '--toastify-color-warning': theme.palette.warning.main,
          '--toastify-color-info': theme.palette.info.main
        } as React.CSSProperties
      }
    />
  )
}
