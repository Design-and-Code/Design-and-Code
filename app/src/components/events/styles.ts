import { styled } from "@mui/material";

export const HeaderSectionWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 40,
  marginBottom: 120,
  gap: 15,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
  '.image': {
    width: 220,
    height: 220,
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      height: 120,
      width: 120,
    },
  },
  '.title': {
    display: "block",
    width: "100%",
    fontWeight: "600",
    ...theme.palette.text.gradient,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  '.description': {
    display: "block",
    maxWidth: "40pc",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      maxWidth: "100vw"
    },
  },
  '.button':{
      marginTop: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        margin:'auto'
        
      },
  },

}));

export const UpcomingEventsWrapper = styled('div')(({ theme }) => ({
  '.subtitle': {
    display: "block",
    width: "100%",
    fontWeight:'600',
    ...theme.palette.text.gradient,
    marginBottom: "2rem",
  },
}))

export const PastEventsWrapper = styled('div')(({ theme }) => ({
  '.subtitle': {
    display: "block",
    width: "100%",
    fontWeight:'600',
    ...theme.palette.text.gradient,
  },
  '.pastEventBox': {
    marginBottom: '2rem',
  },  
}))