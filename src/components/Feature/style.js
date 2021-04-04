export default function style(theme) {
  return {
    feature: {
      margin: "40px 0",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
    },
    infoHolder: {
      display: "flex",
      padding: 20,
      flexDirection: "column",
      justifyContent: "center",
    },
    imageHolder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 160,
      width: 160,
      borderRadius: 9999,
      background:
        "linear-gradient(180deg, rgba(35, 39, 42, 0.05) 0%, #1C1E1F 100%), #2C2F33",
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: 24,
      fontWeight: 600,
      marginBottom: 8,
    },
    description: {
      color: theme.palette.text.secondary,
      fontSize: 16,
    },
  };
}
