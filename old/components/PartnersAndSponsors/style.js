export default function style(theme) {
  return {
    imageWrapper: {
      textAlign: "center",
      background: 'linear-gradient(0deg, rgba(32, 38, 48, 0.5), rgba(32, 38, 48, 0.5))',
      padding: '10px',
      // minWidth: '300px',
      [theme.breakpoints.down("sm")]: {
        padding: '5px',
      },
      borderRadius: '12px',
    },
    image: {
      width: "90%",
      margin: "auto",
      justify: "center",
    },
  };
}
