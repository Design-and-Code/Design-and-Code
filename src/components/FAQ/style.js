export default function style(theme) {
    return {
      section: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 120,
      },
      title: {
        display: "block",
        width: "100%",
        textAlign: "center",
        fontWeight:'600',  
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
        textAlign: "center",
        color: theme.palette.text.secondary,
        maxWidth: "40pc"
      },
    };
  }
  