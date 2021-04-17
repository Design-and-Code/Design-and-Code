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
      ...theme.palette.text.gradient
    },
    brandingDesc: {
      color: theme.palette.text.secondary,
    },
    getInTouchTitle: {
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
    getInTouchEmailLink: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
    footerSectionTitle: {
      color: theme.palette.text.primary,
      fontWeight: 600,
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
