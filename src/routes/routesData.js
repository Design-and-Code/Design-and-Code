import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HowToUsePage from "../pages/HowToUsePage";
import ContactPage from "../pages/ContactPage"
import TeamPage from "../pages/TeamPage"

import {
  HomeRounded,
  InfoRounded,
  CodeRounded,
  HelpRounded,
} from "@material-ui/icons";

const routesData = [
  {
    pageName: "Home",
    pageURL: "/home",
    showOnHeader: true,
    component: <HomePage />,
    icon: <HomeRounded />,
  },
  {
    pageName: "About",
    pageURL: "/about",
    showOnHeader: true,
    component: <AboutPage />,
    icon: <InfoRounded />,
  },
  {
    pageName: "How to use",
    pageURL: "/how-to-use",
    showOnHeader: true,
    component: <HowToUsePage />,
    icon: <CodeRounded />,
  },
  {
    pageName: "Contact",
    pageURL: "/contact",
    showOnHeader: true,
    component: <ContactPage />,
    icon: <HelpRounded/>,
  },
  {
    pageName: "Team",
    pageURL: "/team",
    showOnHeader: true,
    component: <TeamPage />,
    icon: <HelpRounded/>,
  },
];

export default routesData;
