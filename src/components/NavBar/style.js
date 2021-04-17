export default function style(theme) {
  return {
    appBar: {
      boxShadow: "none",
      transition: "0.7s"
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
      fontWeight: 600
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
      ...theme.palette.text.gradient
    },
    listItem: {
      padding: "12px 16px",
      color: theme.palette.text.primary,
      cursor: "default",
      "& *": {
        color: theme.palette.text.primary,
      },
      background: "transparent",
      borderLeft: `2px solid transparent`,
    },
    listItemHighlighted: {
      padding: "12px 16px",
      color: theme.palette.text.primary,
      cursor: "default",
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
