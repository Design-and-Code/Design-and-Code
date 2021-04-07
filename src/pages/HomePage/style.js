import heroIllustration from "../../assets/illustrations/hero-section.svg";
export default function styles(theme) {
  return {
    section: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 120,
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "center",
      fontSize: 85,

      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 600,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      [theme.breakpoints.down("sm")]: {
        fontSize: 60,
      },
    },
    subtitle: {
      display: "block",
      marginBottom: 24,
      width: "100%",
      textAlign: "center",
      fontSize: 48,

      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 600,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      [theme.breakpoints.down("sm")]: {
        fontSize: 32,
      },
    },
    description: {
      margin: "auto",
      marginBottom: 48,
      display: "block",
      width: "80%",
      textAlign: "center",
      fontSize: 18,

      color: theme.palette.text.primary,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      fontSize: 16,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    heroSection: {
      height: "65vh",
      background: `url(${heroIllustration}) no-repeat center`,
      backgroundSize: "contain",
    },
    heroSectionContent: {
      width: "100%",
    },
    heroBtns: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      gap: 40,
    },
    categoriesSection: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "flex",
      // },
    },
    categoriesIllustration: {
      marginLeft: "auto",
      width: "100%",
    },
    video: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        // display: "flex",
      },
    },
    videoDesc: {
      marginTop: 40,
    },
  };
}
