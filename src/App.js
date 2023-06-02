import DashBoard from "./LayOuts/DashBoardLayOut/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./LayOuts/AuthLayout/SignIn";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "signIn",
    element: <SignIn />,
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
