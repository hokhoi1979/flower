// import { ThemeProvider } from "./components/Theme/ThemeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Page/Home/Home";
import Detail from "./Page/Detail/Detail";

import Contact from "./Page/Contact/Contact";
import Origin from "./Page/Origin/Origin";
import News from "./Page/News/News";
import Manager from "./Page/Manager/Manager";

import { ThemeProvider } from "./Components/Theme/ThemeContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Detail/:id",
      element: <Detail />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Origin",
      element: <Origin />,
    },
    {
      path: "/News",
      element: <News />,
    },
    {
      path: "/Manager",
      element: <Manager />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
