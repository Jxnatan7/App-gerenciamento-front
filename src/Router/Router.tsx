import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home/Home.tsx"
import Create from "../pages/Create/Create.tsx"

const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/create",
    element: <Create/>
  }
])

export default Router