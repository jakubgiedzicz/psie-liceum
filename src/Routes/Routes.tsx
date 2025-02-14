import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Prices from "../Pages/Prices";
import Behavioral from "../Pages/Behavioral";
import Diet from "../Pages/Diet";
import Psieprzedszkole from "../Pages/Psieprzedszkole";
import Psiapodstawowka from "../Pages/Psiapodstawowka";
import Group from "../Pages/Group";
import Consult from "../Pages/Consult";

export const Router = createBrowserRouter([
  {
    path: '/psie-liceum/',
    element: <App />,
    children: [
      { path: '/psie-liceum/', element: <Home />},
      { path: '/psie-liceum/o-mnie', element: <AboutMe />},
      { path: '/psie-liceum/konsultacje', element: <Consult />},
      { path: '/psie-liceum/konsultacje-behawioralne', element: <Behavioral />},
      { path: '/psie-liceum/konsultacje-dietetyczne', element: <Diet />},
      { path: '/psie-liceum/zajecia-grupowe', element: <Group />},
      { path: '/psie-liceum/psieprzedszkole', element: <Psieprzedszkole />},
      { path: '/psie-liceum/psiapodstawowka', element: <Psiapodstawowka />},
      { path: '/psie-liceum/cennik', element: <Prices />},
      { path: '/psie-liceum/kontakt', element: <Contact />},
      { path: '/psie-liceum/blog', element: <Blog />},
    ]
  }
])