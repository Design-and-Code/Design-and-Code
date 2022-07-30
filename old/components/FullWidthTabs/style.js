export default function style(theme) {
    return {
      root: {
        width: "100%",
      },
      appBar: {
        width: "100%",
        position: "relative",
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
        padding: "12px 18px",
        maxWidth: "100%",
        color: "white",
        fontSize: theme.typography.subtitle1.fontSize,
        textTransform: "unset !important",
        "& span": {
          display: "unset",
          textAlign:'center',
        },
        "&.MuiTab-textColorInherit": {
          opacity: 1
        },
        "&.Mui-selected": {
          ...theme.palette.text.gradient,
        },
      },
      tabIndicator: {
        width: "100%",
        height: "100%",
        background: theme.palette.secondary.darkGrey,
        borderBottom: `2px solid ${theme.palette.primary.gradient1}`,
        right: 'unset',
        left: 0,
        zIndex: -9,
      },
      inactiveBorder:{
        position: 'absolute',
        height: 2,
        width: "100%",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.secondary.darkGrey,
        zIndex: -10,
      },
    };
  }
  