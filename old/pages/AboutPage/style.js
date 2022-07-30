import { Repeat } from "@mui/icons";

export default function styles(theme) {
  return {
    section: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 120,
    },
    title: {
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    subtitle: {
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    description: {
      margin: "auto",
      maxWidth: "60%",
      textAlign: "center",
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },

    community_grid: {
      alignItems: "center",
      color: theme.palette.text.secondary,
    },
    community_grid1: {
      color: theme.palette.text.secondary,
      paddingTop: "2rem",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    community_grid2: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      paddingTop: "2rem",
    },
    cgimage: {
      objectFit: "contain",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "100%",
      },
    },
    heroSection: {
      height: "20vh",
    },
    heroSectionContent: {
      width: "100%",
    },
    divider: {
      backgroundColor: "transparent",
    },
    visitTeamsBtn: {
      display: "flex",
      justifyContent: "center",
    },
    sponsors: {
      textAlign: "center",
      margin: "0",
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '30px',
      [theme.breakpoints.down("xs")]: {
        gap: '15px',
      },
    },
  };
}
