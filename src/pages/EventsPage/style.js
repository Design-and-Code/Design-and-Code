export default function styles(theme) {
  return {
    section: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: 40,
      marginBottom: 120,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        textAlign: "center",
      },
    },
    journeySection: {
      textAlign:'center',
      
    },
    title: {
      display: "block",
      width: "100%",
      fontWeight: "600",
      ...theme.palette.text.gradient,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    subtitle: {
      display: "block",
      width: "100%",
      fontWeight:'600',
      ...theme.palette.text.gradient,
      marginBottom: "2rem",
      
    },
    description: {
      display: "block",
      maxWidth: "40pc",
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        maxWidth: "100vw"
      },
    },
    button:{
        marginTop: "1.5rem",
        [theme.breakpoints.down("sm")]: {
          margin:'auto'
          
        },
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
      width: 220,
      height: 220,
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
        height: 120,
        width: 120,
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
