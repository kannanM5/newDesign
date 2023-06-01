import DashBoard from "./LayOuts/DashBoardLayOut/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
