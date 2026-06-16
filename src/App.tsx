import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { ThemedToastContainer } from './components/Core/ThemedToastContainer'

import routes from '@/routes'

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={routes} />
      <ThemedToastContainer />
    </Suspense>
  )
}

export default App
