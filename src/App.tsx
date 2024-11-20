import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import QuizComponent from "./pages/QuizComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: (
      <>
        <h1>An error occurred!</h1>
        <p>Could not find this page</p>
      </>
    ),
  },
  {
    path: "/quiz/:id",
    element: <QuizComponent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
