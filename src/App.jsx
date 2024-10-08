
import './App.css'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider , Link} from 'react-router-dom'
import Signup from './components/Signup';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
        </div>
      ),
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "signup",
      element: <Signup/>
    },
  ]);
  
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
