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

      ...theme.palette.text.gradient
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
      width: "80%",
      textAlign: "center",

      color: theme.palette.text.primary,
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "left",
      // [theme.breakpoints.down("sm")]: {
      //   textAlign: "center",
      // },
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
      marginTop: 54,
      [theme.breakpoints.down("sm")]: {
         gap: 18,
      },
      flexWrap:"wrap"
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
