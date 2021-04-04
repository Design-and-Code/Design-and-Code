import heroIllustration from "../../assets/illustrations/hero-section.svg";
export default function styles(theme) {
  return {
    section: {
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "center",
      fontSize: 58,

      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 600,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    subtitle: {
      display: "block",
      marginBottom: 24,
      width: "100%",
      textAlign: "center",
      fontSize: 42,

      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 600,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    description: {
      margin: "auto",
      marginBottom: 48,
      display: "block",
      width: "80%",
      textAlign: "center",
      fontSize: 22,

      color: theme.palette.text.primary,
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      fontSize: 16,
    },
    textAlignLeft: { margin: 0, marginBottom: 24, textAlign: "left" },
    heroSection: {
      height: "65vh",
      background: `url(${heroIllustration}) no-repeat center`,
      backgroundSize: "contain",
      marginBottom: 48,
    },
    heroSectionContent: {
      width: "100%",
    },
    heroBtns: {
      display: "block",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: 40,
    },
    featuresSection: {
      marginBottom: 24,
    },
  };
}
