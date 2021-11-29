export default function style(theme) {
  return {
    imageWrapper: {
      textAlign: "center",
      background: 'linear-gradient(0deg, rgba(32, 38, 48, 0.5), rgba(32, 38, 48, 0.5))',
      padding: '20px',
      minWidth: '300px',
      [theme.breakpoints.down("sm")]: {
        minWidth: '250px'
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
