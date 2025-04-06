import './output.css'
import './input.css'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './router/Router'

function App() {
  return (
    <RouterProvider router={myRoutes}>
       
    </RouterProvider>
  )

}

export default App
