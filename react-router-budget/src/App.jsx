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
import { createUserAction } from "./actions/createUser";
import { budgetAction } from "./actions/budgetAction";
import BudgetsPage from "./pages/BudgetPage";

function About() {
  return (
    <button onClick={() => toast.error("SPERMA")}>
      Pokaż toast
    </button>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    children:[
      {
        index: true, 
        element: <Dashboard/>,
        loader: dashboardLoader,
        action: budgetAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      },
      {
        path: "log",
        element: <Log/>,
        action: createUserAction,
        errorElement: <Error />
      },
      {
        path: "budgets",          // czyli /budgets
        element: <BudgetsPage/>,
        errorElement: <Error />
      },
      {
        path: "about",
        element: <About />
      },
      { path: "*", element: <Error /> }
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