import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/Home'
import Create from '../pages/Create/Create';

const AppRouter = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/create",
    element: <Create/>
  }
])

export default AppRouter;