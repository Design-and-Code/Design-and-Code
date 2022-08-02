import { 
  HomeRounded,
  InfoRounded,
  CodeRounded,
  EventRounded,
  GroupsRounded,
  ContactSupportRounded
} from "@mui/icons-material"

export const NAV_LINKS = [
  {
    label: 'Home',
    url: '/',
    icon: HomeRounded,
  },
  {
    label: 'About',
    url: '/about',
    icon: InfoRounded,
  },
  {
    label: 'Events',
    url: '/events',
    icon: EventRounded,
  },
  {
    label: 'Team',
    url: '/team',
    icon: GroupsRounded,
  },
  {
    label: 'Contact',
    url: '/contact',
    icon: ContactSupportRounded,
  },
  // {
  //   label: 'How to use',
  //   url: '/howToUse',
  //   icon: CodeRounded,
  // }
];

export const FEATURES = [{
  image: '/static/illustrations/mentoring.png',
  title: 'Mentoring Students',
  description: 'Get connected with a mentor that will help you pave your career path'
}, {
  image: '/static/illustrations/freeResources.png',
  title: 'Free Resources',
  description: 'Get Free resources related to Designing and Development from the community.'
}, {
  image: '/static/illustrations/opportunities.png',
  title: 'Opportunities',
  description: 'Get Internships and Job opportunities and gain experience while you learn.'
}, {
  image: '/static/illustrations/portfolioAndReviews.png',
  title: 'Portfolio & Reviews',
  description: 'Get your portfolio and projects reviewed by Industry experts and mentors.'
}]