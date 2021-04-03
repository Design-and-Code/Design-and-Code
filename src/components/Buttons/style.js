export default function style(theme) {
  return {
    containedBtn: {
      background: theme.palette.primary.mainGradient,
      color: theme.palette.text.primary,
      borderRadius: 80,
      height: "fit-content",
      margin: "auto",
      textTransform: "unset !important",
    },
    outlinedBtn: {
      borderRadius: 80,
      height: "fit-content",
      margin: "auto",
      textTransform: "unset !important",
      border: `2px solid ${theme.palette.primary.gradient1}`,

      color: theme.palette.text.primary,
      background: theme.palette.primary.mainGradient,
      fontWeight: 500,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  };
}
