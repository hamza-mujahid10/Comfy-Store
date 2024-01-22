import { createBrowserRouter,RouterProvider } from "react-router-dom"
import {HomeLayout, About, Checkout, Error, Cart, Landing, Login, Order, Products, Register, SingleProduct} from './pages'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement : <Error />,
    children : [
      {
        index :true,
        path: <Landing />,
        errorElement: <Error />
      },
      {
        path: 'products',
        element : <Products />,
        errorElement : <Error />
      },
      {
        path : 'products/:id',
        element : <SingleProduct />,
        errorElement: <Error />
      }
    ]
  }
])
function App() {

  return (
 <>

 <RouterProvider router={router}/>
 </>
 
  )
}

export default App
