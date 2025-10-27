import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>,
    children:[
      {
        index: true, 
        element: <Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Error/>
      },
      {
        path: "logout",
        element: <p>Wylogowano</p>
      },
      {
        path: "about",
        element: <h1>sda</h1>
      }
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App