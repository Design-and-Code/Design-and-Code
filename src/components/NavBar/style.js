export default function style(theme) {
  return {
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      // background: theme.palette.primary.blurColor,
      backdropFilter: "blur(100px)",
    },
    navBar: {
      padding: "15px 0",
    },
    brandingLogo: {
      width: 75,
    },
    navLinks: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 50,
    },
    navLink: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
    navLinkHighlighted: {
      background: theme.palette.primary.mainGradient,
      color: theme.palette.text.primary,
      textDecoration: "none",
      fontWeight: 700,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    joinDiscordBtn: {
      margin: "auto",
    },
  };
}
