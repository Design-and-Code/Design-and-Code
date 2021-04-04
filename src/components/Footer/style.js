export default function style(theme) {
  return {
    footerBackground: {
      padding: "60px 0",
      backgroundColor: theme.palette.secondary.main,
    },
    footerContent: {
      marginBottom: 20,
    },
    branding: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
    },
    brandingTitle: {
      fontSize: 24,
      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 600,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    brandingDesc: {
      color: theme.palette.text.secondary,
    },
    getInTouchTitle: {
      color: theme.palette.text.primary,
      fontWeight: 500,
      fontSize: 18,
    },
    getInTouchEmailLink: {
      textDecoration: "none",
      fontSize: 18,
      color: theme.palette.text.secondary,
    },
    footerSectionTitle: {
      color: theme.palette.text.primary,
      fontWeight: 600,
      fontSize: 20,
    },
    footerLinks: {
      textDecoration: "none",
      margin: "auto 0",
      color: theme.palette.text.secondary,
      "& ul": {
        padding: 0,
      },
      "& li": {
        listStyle: "none",
        fontSize: 18,
        margin: "10px 0",
      },
    },
    socialLinks: {
      marginTop: 20,
      "& img": {
        height: 60,
        marginRight: 10,
      },
    },
    divider: {
      backgroundColor: theme.palette.secondary.darkGrey,
    },
    footerEnd: {
      padding: "30px 0 0 0",
    },
    joinUsBtn: {
      height: "fit-content",
      width: "fit-content",
      marginLeft: "auto",
    },
  };
}
