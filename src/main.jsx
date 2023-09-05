import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouteProvider} from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProduto from './routes/editarProdutos/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <error/>,
    children:[
{
  path: "/",
  element: <Home/>
},
{
  path: "/produtos",
  element: <Produtos/>
},
{
  path:"/produto/editar/:id",
  element: <EditarProduto/>
}
    ]
  }
])

