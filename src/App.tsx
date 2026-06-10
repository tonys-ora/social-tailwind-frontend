
import { RouterProvider } from 'react-router'
import { ThemedToastContainer } from './components/core/ThemedToastContainer'

import routes from '@/routes'

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ThemedToastContainer />
    </>
  )
}

export default App
