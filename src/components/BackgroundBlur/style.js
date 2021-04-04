export default function style(theme) {
  return {
    backgroundBlur: {
      zIndex: -1,
      position: "absolute",
      width: "100%",
      top: 0,
      left: 0,
      overflow: "hidden",
    },
    blurredCircle: {
      borderRadius: 9999,
      backgroundColor: theme.palette.primary.blurColor,
      position: "absolute",
      filter: "blur(190px)",
    },
  };
}
