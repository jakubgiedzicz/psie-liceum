import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home />},
      { path: 'o-mnie', element: <AboutMe />},
      { path: 'oferta', element: <Services />},
      { path: 'kontakt', element: <Contact />},
      { path: 'blog', element: <Blog />},
    ]
  }
])