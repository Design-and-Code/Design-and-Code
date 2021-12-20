export default function style(theme) {
  return {
    infoHolder: {
      width: "100%",
      background: theme.palette.primary.backgroundBlurColor,
      borderRadius: "8px",
      position: "relative",
      marginTop: 75,
      flexGrow: 100,
      display: "flex",
      flexDirection: "column"
    },
    role: {
      ...theme.palette.text.gradient,
      fontWeight: "600",
      textTransform: "uppercase"
    },
    image: {
      display: "block",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      pointerEvents: "none"
    },
    imageWrapper: {
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
    title: {
      paddingTop: "75px",
      color: theme.palette.text.primary,
    },
    description: {
      color: theme.palette.text.secondary,
      flexGrow: 100
    },
    member: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      userSelect: "none"
    },
    infoBox: {
      width: "100%",
      height: "100%",
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      display: "flex",
      flexDirection: "column",
      flexGrow: 100
    },
  };
}
