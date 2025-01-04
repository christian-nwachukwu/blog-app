//import './App.css'
import { createBrowserRouter, RouterProvider, Route, Outlet, } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Post from './pages/Post'
import Single from './pages/Single'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

// For pages/routes that requires inside the html body, Navbar, Footer, Sections, Hero etc
const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children:[
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/post",
        element: <Post/>
      },

      {
        path: "/single",
        element: <Single/>
      },
  ]
},

// For the pages/routes not requiring the Navbar, Footer etc e.g the Login and Register pages
{
  path: "/register",
  element: <Register/>,
},

{
  path: "/login",
  element: <Login/>,
},
])


function App() {

  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}

export default App
