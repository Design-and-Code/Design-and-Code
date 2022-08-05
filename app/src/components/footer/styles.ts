import { styled } from "@mui/material";

export const FooterWrapper = styled('div')(({ theme }) => ({
  padding: "60px 0",
  backgroundColor: theme.palette.secondary.main,
  '.footerContent': {
    marginBottom: 20,
    gap: 20,
    justifyContent: "space-between",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      alignItems: "center",
    }
  },
  '.branding': {
    display: "flex",
    gap: 20,
    "@media screen and (max-width: 400px)": {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }
  },
  '.brandingInfo' : {
    display:"flex",
    flexDirection: "column"
  },
  '.brandingLogo': {
    filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))",
  },
  '.brandingTitle': {
    ...theme.palette.text.gradient,
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  '.brandingDesc': {
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
  },
  '.getInTouchTitle': {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  '.getInTouchEmailLink': {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
  '.footerSectionTitle': {
    padding: "0 10px",
    color: theme.palette.text.secondary,
    maxHeight: "fit-content",
    lineHeight: "100%",
    "&:hover": {
      color: theme.palette.text.primary,
    }
  },
  '.footerSectionBorder': {
    borderRight: `2px solid ${theme.palette.text.secondary}`,
    "@media screen and (max-width: 400px)": {
      border: "none",
    }
  },
  '.footerLinks': {
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
  '.footerSectionGrid': {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  '.footerSectionContainer': {
    "@media screen and (max-width: 400px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      textAlign: "center",
      "& div": {
        padding: 10,
      }
    }
  },
  '.footerSectionItem': {
    textAlign: "right",
    width: "50%",
  },
  '.socialLinks': {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    lineHeight: "100%",
    gap: 10,
    "& img": {
      height: 50,
    },
    "@media screen and (max-width: 400px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      justifyContent: "center",
    }
  },
  '.divider': {
    backgroundColor: theme.palette.primary.gradient2,
  },
  '.footerEnd': {
    padding: "30px 0 0 0",
    alignItems: "center",
    "@media screen and (max-width: 950px)": {
      flexDirection: "column",
    }
  },
  '.joinUsBtn': {
    height: "fit-content",
    width: "fit-content",
    marginLeft: "auto",
  },

}))