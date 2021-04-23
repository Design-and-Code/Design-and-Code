export default function style(theme) {
    return {
        guideline: {
        margin: "40px 4rem",
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
        height: 100,
        width: 100,
        color:'white',
        borderRadius: 9999,
        background:
          "#64B1F330",
        [theme.breakpoints.down("sm")]: {
          height: 80,
          width: 80,
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
  