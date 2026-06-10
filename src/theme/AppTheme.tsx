import { ReactNode, useMemo } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { customizations } from './customizations'
import { colorSchemes, shadows, shape, typography } from './themePrimitives'

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme = (props: AppThemeProps) => {
  const { children } = props
  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: 'data-mui-color-scheme',
          cssVarPrefix: 'template'
        },
        colorSchemes,
        defaultColorScheme: 'dark',
        typography,
        shadows,
        shape,
        components: customizations
      }),
    []
  )

  return (
    <ThemeProvider defaultMode='dark' theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
