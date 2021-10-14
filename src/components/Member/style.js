export default function style(theme) {
  return {
    infoHolder: {
      width: "100%",
      background: theme.palette.primary.backgroundBlurColor,
      borderRadius: "8px",
      position: "relative",
    },
    role: {
      ...theme.palette.text.gradient,
      fontWeight: "600",
    },
    image: {
      display: "block",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    imageWrapper: {
      height: "150px",
      width: "150px",
      borderRadius: "50%",
      border: `5px solid ${theme.palette.secondary.darkGrey}`,
      overflow: "hidden",
      margin: "auto",
      position: "absolute",
      top: "-84px",
      left: "111px",
    },
    title: {
      paddingTop: "75px",
      color: theme.palette.text.primary,
    },
    description: {
      color: theme.palette.text.secondary,
    },
    member: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "24pc",
    },
    infoBox: {
      width: "100%",
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    },
  };
}
