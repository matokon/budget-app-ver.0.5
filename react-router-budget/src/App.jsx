import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/logout";
import { Log } from "./pages/Log";

function About() {
  return (
    <button onClick={() => toast.success("SPERMA")}>
      Pokaż toast
    </button>
  );
}

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
        action: logoutAction,
        element: <p>Wylogowano</p>
      },
      {
        path: "log",
        element: <Log/>
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  )
}

export default App