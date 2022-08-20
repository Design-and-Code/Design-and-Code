import { Grid, styled } from "@mui/material";

export const SectionWrapper = styled(Grid)(({ theme }) => ({
  marginBottom: 120,
  '.title': {
    display: "block",
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
    paddingTop: "5rem",
    ...theme.palette.text.gradient,
  },    
  '.description': {
    margin: "auto",
    display: "block",
    maxWidth: "40pc",
    textAlign: "center",
    marginBottom: "4rem",
    color: theme.palette.text.secondary,
  },
  '.title__color': {
    color: theme.palette.text.primary,
  },
  '.description__color': {
    color: theme.palette.text.secondary,
  },
  '.link':{
    objectFit:'contain',
    cursor: "pointer",
    width:'2rem',
    margin:'1rem 1.5rem 1rem 0rem'
  },
  '.role': {
    ...theme.palette.text.gradient,
    fontWeight: "600",
  },

}))

export const HeroSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
  padding: `${theme.spacing(3)}px ${theme.spacing(8)}px`,
  width: "100%",
  '.heroSectionContent': {
    width: "100%",
  },
  '.infoHolder': {
    display: "flex",
    alignItems: "center",
    background: theme.palette.primary.backgroundBlurColor,
    borderRadius: "8px",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  '.imageWrapper': {
    display: "flex",
    justifyContent: "center",
    marginRight: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  '.image': {
    width: 250,
    height: 250,
    objectFit: "conver",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },
  '.infoBox': {
    width: "100%",
    paddingTop: "1rem",
  },
  '.foundDesc': {
    marginTop: theme.spacing(2),
  },
}))

export const TeamSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
  '.member': {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    userSelect: "none",
  },
  '.infoHolder': {
    width: "100%",
    background: theme.palette.primary.backgroundBlurColor,
    borderRadius: "8px",
    position: "relative",
    marginTop: 75,
    flexGrow: 100,
    display: "flex",
    flexDirection: "column",
    padding: '16px 24px',
  },
  '.imageWrapper': {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    // border: `5px solid ${theme.palette.secondary.darkGrey}`,
    overflow: "hidden",
    margin: "auto",
    position: "absolute",
    top: "-75px",
    left: "calc(50% - 75px)",
  },
  '.image': {
    display: "block",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    pointerEvents: "none"
  },
  '.infoBox': {
    width: "100%",
    height: "100%",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    display: "flex",
    flexDirection: "column",
    flexGrow: 100
  },    
  '.titlee': {
      paddingTop: "75px",
      color: theme.palette.text.primary,
    },
  '.descriptionn': {
      color: theme.palette.text.secondary,
      flexGrow: 100
    },
}))

export const WebsiteTeamWrapper = styled(SectionWrapper)(({ theme }) => ({
  backgroundColor: "hsla(218, 20%, 16%, 0.5)",
  borderRadius: "20px",
  padding: "50px",
  marginLeft: '0px',
  width: '100%',
  [theme.breakpoints.down("sm")]: {
    padding: "30px"
  },
  '.contributorImage': {
    width: '100%',
    height: 'auto'
  },
  '.contributor': {
    padding: '0px',
    width: "75px",
    height: "75px", 
    border: '2px solid hsla(222, 100%, 64%, 1)',
    borderRadius: "50%",
    overflow: 'hidden',
  },
  '.subtitle': {
    display: "block",
    width: "100%",
    textAlign: "center",
    ...theme.palette.text.gradient,
  }
}))