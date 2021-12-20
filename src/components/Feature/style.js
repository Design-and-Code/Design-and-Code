export default function style(theme) {
  return {
    feature: {
      margin: "40px 0",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      [theme.breakpoints.down("sm")]: {
        margin: "10px 0",
      },
    },
    infoHolder: {
      display: "flex",
      padding: "20px 0 20px 20px",
      flexDirection: "column",
      justifyContent: "center",
    },
    imageHolder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      height: 150,
      width: 150,
      borderRadius: 9999,
      background:
        "linear-gradient(165.45deg, #2A2D31 7.13%, #2A2D31 7.13%, #282B2F 55.5%, #1F2224 91.72%)",
      boxShadow:
        "inset 0px -10px 20px 2px rgba(0, 0, 0, 0.3), inset 0px 10px 20px 2px rgba(255, 255, 255, 0.1)",
      [theme.breakpoints.down("sm")]: {
        height: 100,
        width: 100,
      },
    },
    image: {
      width: "100%",
      padding: "20%",
      pointerEvents: "none",
    },
    title: {
      color: theme.palette.text.primary,
      marginBottom: 8,
    },
    description: {
      color: theme.palette.text.secondary,
    },
  };
}
