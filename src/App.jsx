import { createBrowserRouter,RouterProvider } from "react-router-dom"
import {HomeLayout, About, Checkout, Error, Cart, Landing, Login, Order, Products, Register, SingleProduct} from './pages'
import { ErrorElement } from "./components"
//loader
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'
//actions

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement : <Error />,
    children : [
      {
        index :true,
        element: <Landing />,
        errorElement: <Error />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element : <Products />,
        errorElement : <ErrorElement />,
        loader : productsLoader,
      },
      {
        path : 'products/:id',
        element : <SingleProduct />,
        loader : singleProductLoader,
      },
      {
        path : 'login',
        element : <Login />,
        
      },
      {
        path : 'register',
        element : <Register />,
        
      },
      {
        path : 'about',
        element : <About />,
        
      },
      {
        path : 'cart',
        element : <Cart />,
        },
      {
        path : 'checkout',
        element : <Checkout />,
      },
      {
        path : 'orders',
        element : <Order />,
      },
    ]
  }
])
function App() {

  return (
 

 <RouterProvider router={router} />
 
 
  )
}

export default App
