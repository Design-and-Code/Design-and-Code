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
        "linear-gradient(180deg, rgba(35, 39, 42, 0.05) 0%, #1C1E1F 100%), #2C2F33",
      [theme.breakpoints.down("sm")]: {
        height: 100,
        width: 100,
      },
    },
    image: {
      width: "100%",
      padding: "20%"
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
