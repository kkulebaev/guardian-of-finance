import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { queryClient } from './api/query-instance'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
