export default function styles(theme) {
  return {
    "@global": {
      "*": {
        margin: 0,
        fontFamily: "Poppins, sans-serif",
        textDecoration: "none",
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: theme.palette.primary.main,
        overflowX: "hidden",
      },
      //   "*::-webkit-scrollbar": {
      //     appearance: "none",
      //     width: 10,
      // backgroundColor: theme.palette.primary.main,
      //     [theme.breakpoints.down("sm")]: {
      //       display: "none",
      //     },
      //   },
      //   "*::-webkit-scrollbar-thumb": {
      //     backgroundColor: theme.palette.secondary.main,
      //   },
    },
  };
}
