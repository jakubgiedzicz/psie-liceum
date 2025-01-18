import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Prices from "../Pages/Prices";
import Individual from "../Pages/Individual";
import Diet from "../Pages/Diet";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home />},
      { path: 'o-mnie', element: <AboutMe />},
      { path: 'konsultacje-indywidualne', element: <Individual />},
      { path: 'konsultacje-dietetyczne', element: <Diet />},
      { path: 'cennik', element: <Prices />},
      { path: 'kontakt', element: <Contact />},
      { path: 'blog', element: <Blog />},
    ]
  }
])