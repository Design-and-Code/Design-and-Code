import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HowToUsePage from "../pages/HowToUsePage";
import SupportPage from "../pages/SupportPage";

const routesData = [
  {
    pageName: "Home",
    pageURL: "/home",
    showOnHeader: true,
    component: <HomePage />,
  },
  {
    pageName: "About",
    pageURL: "/about",
    showOnHeader: true,
    component: <AboutPage />,
  },
  {
    pageName: "How to use",
    pageURL: "/how-to-use",
    showOnHeader: true,
    component: <HowToUsePage />,
  },
  {
    pageName: "Support",
    pageURL: "/support",
    showOnHeader: true,
    component: <SupportPage />,
  },
];

export default routesData;
