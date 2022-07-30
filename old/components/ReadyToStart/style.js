export default function style(theme) {
  return {
    section: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 120,
    },
    subtitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
      marginBottom: "15px"
    },
    journeySection: {
      backgroundColor: "hsla(218, 20%, 16%, 0.5)",
      borderRadius: "20px",
      padding: "50px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        padding: "30px 20px 30px 20px",
      },
    },
    journeyTextSection: {
      position: "absolute",
      width: "60%",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        width: "100%",
      },
    },
    textCenter: {
      textAlign: "center",
    },
    greenText: {
      color: "#2DFFD9",
    },
    journeyImageSection: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    imgSmall: {
      height: "80px",
      width: "80px",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "9999px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    imgMedium: {
      height: "100px",
      width: "100px",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "9999px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    imgBig: {
      height: "130px",
      width: "130px",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "9999px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    imgContainer: {
      width: "30%",
      display: "grid",
      gridTemplateRows: "repeat(3, minmax(0, 1fr))",
    },
    imgLeft: {
      display: "flex",
      justifyContent: "flex-start",
    },
    imgRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    imgCenter: {
      display: "flex",
      justifyContent: "center",
    },
  };
}
