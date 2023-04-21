import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { router } from './router/router'
import { queryClient } from './api/query-instance'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
