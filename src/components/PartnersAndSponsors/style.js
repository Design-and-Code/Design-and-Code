export default function style(theme) {
  return {
    imageWrapper: {
      textAlign: 'center',
      borderRadius: '99999999px',
      maxWidth: '120px',
      height: '120px',
      border: `5px solid ${theme.palette.secondary.darkGrey}`,
    },
    image: {
      width: '100%',
      transition: "transform 250ms ease",
      "&:hover": {
        transform: "scale(1.2)",
      },
      height: '100%',
      margin: 'auto',
      objectFit: 'cover',
      objectPosition: 'center',
      justify: 'center',
    },
  };
}
