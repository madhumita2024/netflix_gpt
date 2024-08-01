import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import Login from './components/Login';
import Browse from './components/Browse';
function App() {
  
const netflix_router = createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/browse', element:<Browse/>}
])

  return (
    <div>
       <RouterProvider router={netflix_router} />
    </div>
  );
}

export default App;
