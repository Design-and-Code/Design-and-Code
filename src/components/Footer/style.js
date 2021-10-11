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
      ...theme.palette.text.gradient,
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
      padding: "0 10px",
      color: theme.palette.text.primary,
      maxHeight: "fit-content",
    },
    footerSectionBorder: {
      borderRight: "1px solid white",
    },
    footerLinks: {
      lineHeight: "60px",
      textDecoration: "none",
      width: "fit-content",
      margin: "auto",
      color: theme.palette.text.secondary,
      "& ul": {
        padding: 0,
      },
      "& li": {
        listStyle: "none",
        margin: "10px 0",
      },
    },
    footerSectionGrid: {
      textAlign: "right",
    },
    footerSectionContainer: {
      verticalAlign: "center",
      width: "100%",
      justifyContent: "right",
      paddingTop: "2.5%",
    },
    footerSectionItem: {
      textAlign: "right",
      width: "50%",
    },
    socialLinks: {
      "& img": {
        height: 60,
        marginRight: 10,
      },
    },
    divider: {
      backgroundColor: theme.palette.primary.gradient2,
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
