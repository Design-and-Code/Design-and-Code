export default function styles(theme) {
  return {
    eventsCard: {
      width: 392,
      height: 480,
      backgroundColor: theme.palette.primary.background2,
      borderRadius: 10,
      marginBottom: "4rem",
    },
    eventName: {
      color: theme.palette.text.primary,
      padding: "1rem 0 0 1rem",
    },
    banner: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    time: {
        fontSize: "0.8rem"
    }
  };
}
