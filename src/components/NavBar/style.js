export default function style(theme) {
  return {
    navBar: {
      position: "sticky",
      padding: "30px 0",
    },
    brandingLogo: {
      margin: "auto",
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
