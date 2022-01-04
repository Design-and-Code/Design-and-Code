export default function style(theme) {
  return {
    appBar: {
      boxShadow: "none",
      transition: "0.3s",
    },
    closeIcon: {
      cursor: "pointer"
    },
    navBar: {
      padding: "15px 0",
    },
    brandingLogo: {
      width: 75,
    },
    brandingLogoSidebar: {
      width: 150,
      height: 150,
      margin: "auto",
      borderRadius: "100%",
      background:
        "linear-gradient(165.45deg, #2A2D31 7.13%, #2A2D31 7.13%, #282B2F 55.5%, #1F2224 91.72%)",
      boxShadow:
        "inset 0px -10px 20px 2px rgba(0, 0, 0, 0.3), inset 0px 10px 20px 2px rgba(255, 255, 255, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    navLinks: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 70,
    },
    navLink: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
    navLinkHighlighted: {
      ...theme.palette.text.gradient,
      color: theme.palette.text.primary,
      textDecoration: "none",
      fontWeight: 600,
    },
    joinDiscordBtn: {
      margin: "auto 0 auto auto",
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
      color: theme.palette.text.primary,
      ...theme.palette.text.gradient,
    },
    listItem: {
      padding: "12px 16px",
      color: theme.palette.text.primary,
      cursor: "pointer",
      "& *": {
        color: theme.palette.text.primary,
      },
      background: "transparent",
      borderLeft: `2px solid transparent`,
    },
    listItemHighlighted: {
      padding: "12px 16px",
      color: theme.palette.text.primary,
      cursor: "pointer",
      "& *": {
        color: theme.palette.text.primary,
      },
      background: `${theme.palette.secondary.darkGrey} !important`,
      borderLeft: `2px solid ${theme.palette.primary.gradient1}`,
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
      marginRight: 10,
    },
  };
}
