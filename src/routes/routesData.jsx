import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HowToUsePage from "../pages/HowToUsePage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import EventsPage from "../pages/EventsPage";
import React from 'react';

import {
  HomeRounded,
  InfoRounded,
  CodeRounded,
  EventRounded,
  GroupsRounded,
  ContactSupportRounded
} from "@material-ui/icons";

const routesData = [
  {
    pageName: "How to use",
    pageURL: "/how-to-use",
    showOnHeader: false,
    component: <HowToUsePage />,
    icon: <CodeRounded />,
  },
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
    pageName: "Events",
    pageURL: "/events",
    showOnHeader: true,
    component: <EventsPage />,
    icon: <EventRounded />,
  },
  {
    pageName: "Team",
    pageURL: "/team",
    showOnHeader: true,
    component: <TeamPage />,
    icon: <GroupsRounded />,
  },
  {
    pageName: "Contact",
    pageURL: "/contact",
    showOnHeader: true,
    component: <ContactPage />,
    icon: <ContactSupportRounded />,
  },
];

export default routesData;
