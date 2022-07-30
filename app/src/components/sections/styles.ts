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
    gap: 40,
    marginTop: 54,
    [theme.breakpoints.down('sm')]: {
      gap: 18,
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
