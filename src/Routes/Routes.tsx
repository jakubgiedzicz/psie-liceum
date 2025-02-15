import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import Prices from "../Pages/Prices";
import Behavioral from "../Pages/Behavioral";
import Diet from "../Pages/Diet";
import Psieprzedszkole from "../Pages/Psieprzedszkole";
import Psiapodstawowka from "../Pages/Psiapodstawowka";
import Group from "../Pages/Group";
import Consult from "../Pages/Consult";

export const Router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home />},
      { path: 'o-mnie', element: <AboutMe />},
      { path: 'konsultacje', element: <Consult />},
      { path: 'konsultacje-behawioralne', element: <Behavioral />},
      { path: 'konsultacje-dietetyczne', element: <Diet />},
      { path: 'zajecia-grupowe', element: <Group />},
      { path: 'psieprzedszkole', element: <Psieprzedszkole />},
      { path: 'psiapodstawowka', element: <Psiapodstawowka />},
      { path: 'cennik', element: <Prices />},
      { path: 'kontakt', element: <Contact />},
    ]
  }
])