import { Grid, styled } from "@mui/material";

export const SectionWrapper = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  marginBottom: 120,
  '.title': {
    width: "100%",
    textAlign: "center",
    ...theme.palette.text.gradient,
  },
  '.subtitle': {
    width: "100%",
    textAlign: "center",
    ...theme.palette.text.gradient,
  },
  '.description': {
    margin: "auto",
    maxWidth: "60%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  '.secondaryDesc': {
    color: theme.palette.text.secondary,
    width: "100%",
  },
  '.heroSection': {
  },
}))

export const HeroSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
  height: "20vh",
  '.heroSectionContent': {
    width: "100%",
  }
}))

export const CommunitySectionWrapper = styled(SectionWrapper)(({ theme }) => ({
  '.cgimage': {
    objectFit: "contain",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  '.communityGrid': {
    alignItems: "center",
    color: theme.palette.text.secondary,
  },
  '.communityGrid1': {
    color: theme.palette.text.secondary,
    paddingTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  '.communityGrid2': {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "2rem",
  },
}))

export const PartnersSectionsWrapper = styled(SectionWrapper)(({ theme }) => ({
    '.partners': {
      textAlign: "center",
      margin: "0",
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '30px',
      [theme.breakpoints.down("xs")]: {
        gap: '15px',
      },
    },
    '.imageWrapper': {
      textAlign: "center",
      background: 'linear-gradient(0deg, rgba(32, 38, 48, 0.5), rgba(32, 38, 48, 0.5))',
      padding: '10px',
      // minWidth: '300px',
      [theme.breakpoints.down("sm")]: {
        padding: '5px',
      },
      borderRadius: '12px',
    },
    '.image': {
      width: "90%",
      margin: "auto",
      justify: "center",
    },
}))

export const SponsorsSectionsWrapper = styled(SectionWrapper)(({ theme }) => ({
    '.sponsors': {
      textAlign: "center",
      margin: "0",
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '30px',
      [theme.breakpoints.down("xs")]: {
        gap: '15px',
      },
    },
    '.imageWrapper': {
      textAlign: "center",
      background: 'linear-gradient(0deg, rgba(32, 38, 48, 0.5), rgba(32, 38, 48, 0.5))',
      padding: '10px',
      // minWidth: '300px',
      [theme.breakpoints.down("sm")]: {
        padding: '5px',
      },
      borderRadius: '12px',
    },
    '.image': {
      width: "90%",
      margin: "auto",
      justify: "center",
    },
}))