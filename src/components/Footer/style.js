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
      display: "flex",
      gap: 20,
    },
    brandingInfo : {
      display:"flex",
      flexDirection: "column"
    },
    brandingLogo: {
      filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))",
    },
    brandingTitle: {
      ...theme.palette.text.gradient,
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      fontWeight: 600,
    },
    brandingDesc: {
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
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
      color: theme.palette.text.secondary,
      maxHeight: "fit-content",
      lineHeight: "100%",
      "&:hover": {
        color: theme.palette.text.primary,
      }
    },
    footerSectionBorder: {
      borderRight: `2px solid ${theme.palette.text.secondary}`,
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
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    footerSectionContainer: {
      verticalAlign: "center",
      width: "auto",
      justifyContent: "right",
      paddingTop: "2.5%",
    },
    footerSectionItem: {
      textAlign: "right",
      width: "50%",
    },
    socialLinks: {
      "& img": {
        height: 50,
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
