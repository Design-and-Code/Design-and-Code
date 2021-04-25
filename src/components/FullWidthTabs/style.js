export default function style(theme) {
    return {
      root: {
        width: "100%",
      },
      appBar: {
        width: "100%",
      },
      tabpanel: {
        color: "white",
        padding: 16,
        "& h5": {
          color: theme.palette.text.primary,
        },
        "& h6": {
          color: theme.palette.text.secondary,
        }
      },
      tab:{
        maxWidth: "100%",
        padding: "6px 16px",
        fontSize: theme.typography.subtitle1.fontSize,
        textAlign:'left',
        textTransform: "unset !important",
        margin: "6px 0",
        "&.MuiTab-textColorInherit": {
          opacity: 1
        },
        "&.Mui-selected": {
          ...theme.palette.text.gradient,
        },
      },
      tabIndicator: {
        width: "100%",
        background: theme.palette.primary.gradient1,
        right: 'unset',
        left: 0,
        zIndex: -9,
      },
      inactiveBorder:{
        position: 'absolute',
        height: 2,
        width: "100%",
        left: 0,
        bottom: 0,
        backgroundColor: theme.palette.secondary.darkGrey,
        zIndex: -10,
      },
    };
  }
  