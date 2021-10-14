export default function styles(theme) {
  return {
    section: {
      marginBottom: 120,
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "center",
      fontWeight: "600",
      paddingTop: "5rem",
      ...theme.palette.text.gradient,
    },
    subtitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    description: {
      margin: "auto",
      display: "block",
      maxWidth: "40pc",
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    foundDesc: {
      marginTop: theme.spacing(2),
    },
    member_grid: {
      justifyContent: "center",
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },
    heroSectionContent: {
      width: "100%",
    },
    infoHolder: {
      display: "flex",
      alignItems: "center",
      background: theme.palette.primary.backgroundBlurColor,
      marginTop: "4rem",
      borderRadius: "8px",
      padding: `${theme.spacing(3)}px ${theme.spacing(8)}px`,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: theme.spacing(3),
      },
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
      marginRight: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
    },
    role: {
      ...theme.palette.text.gradient,
      fontWeight: "600",
    },
    image: {
      width: "100%",
      height: "100%",
      border: "3px solid grey",
      objectFit: "contain",
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        height: 150,
        width: 150,
      },
    },
    title__color: {
      color: theme.palette.text.primary,
    },
    description__color: {
      color: theme.palette.text.secondary,
    },
    infoBox: {
      width: "100%",
      paddingTop: "1rem",
    },
    linkToAbout: {
      margin: "auto",
    },
  };
}
