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
    menuBtn: {
      color: theme.palette.primary.gradient1,
    },
    mobileNav: {
      background: theme.palette.primary.main,
      height: "100%",
    },
    // branding: {
    //   display: "grid",
    //   gridTemplateColumns: "auto 1fr",
    // },
    brandingTitle: {
      fontSize: 24,
      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 600,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    brandingDesc: {
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
    listItem: {
      color: theme.palette.text.primary,
      cursor: "default",
      "& *": {
        color: theme.palette.text.primary,
      },
    },
    mobileJoinDiscordBtn: {
      width: "100%",
    },
    divider: {
      // background: theme.palette.primary.mainGradient,
      height: 10,
    },
    listItemIcon: {
      display: "flex",
      margin: "auto",
      marginRight: 10,
    },
  };
}
