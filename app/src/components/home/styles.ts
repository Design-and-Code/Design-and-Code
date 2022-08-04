import { Grid, styled } from '@mui/material';

export const SectionWrapper = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 120,
  '.title': {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    ...theme.palette.text.gradient,
  },
  '.subtitle': {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    ...theme.palette.text.gradient,
  },
  '.description': {
    margin: '1rem auto',
    display: 'block',
    width: '80%',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  '.secondaryDesc': {
    color: theme.palette.text.secondary,
    width: '100%',
  },
}));

export const HeroSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
  height: '65vh',
  position: 'relative',
  '.background-icons': {
    position: 'absolute',
    objectFit: 'contain',
    objectPosition: 'center',
    margin: '0 auto 50px auto',
    width: '90%',
    zIndex: -1,
  },
  '.heroBtns': {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginTop: 54,
    [theme.breakpoints.down('sm')]: {
      gap: 18,
      flexDirection: 'column',
    },
    flexWrap: 'wrap',
  },
  '.discord': {
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      height: '650px',
    },
  },
}));

export const FeatureWrapper = styled('div')(({ theme }) => ({
  margin: "40px 0",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0",
  },
  '.image': {
    width: "100%",
    padding: "20%",
    pointerEvents: "none",
  },    
  '.imageHolder': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: 100,
    width: 100,
    borderRadius: 9999,
    background:
      "linear-gradient(165.45deg, #2A2D31 7.13%, #2A2D31 7.13%, #282B2F 55.5%, #1F2224 91.72%)",
    boxShadow:
      "inset 0px -10px 20px 2px rgba(0, 0, 0, 0.3), inset 0px 10px 20px 2px rgba(255, 255, 255, 0.1)",
    [theme.breakpoints.down("sm")]: {
      height: 100,
      width: 100,
    },
  },
  '.infoHolder': {
    display: "flex",
    padding: "20px 0 20px 20px",
    flexDirection: "column",
    justifyContent: "center",
  },    
  '.title': {
    color: theme.palette.text.primary,
    textAlign: 'left',
  },
  '.description': {
    color: theme.palette.text.secondary,
    margin: 0,
    textAlign: 'left',
  },
}))

export const ChannelsWrapper = styled(SectionWrapper)(({ theme }) => ({
  '.title': {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    ...theme.palette.text.gradient,
    marginBottom: "10px",
  },
  '.description': {
    margin: 0,
    padding: 0,
    width: "100%",
    display: 'block',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  '.channelIllustration': {
    marginLeft: "auto",
    width: "100%",
  }
}))

export const FAQWrapper = styled(SectionWrapper)(({ theme }) => ({

}))