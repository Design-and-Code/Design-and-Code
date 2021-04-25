export default function style(theme) {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            color: theme.palette.text.primary
          },
          tabs: {
            // borderLeft: `2px solid ${theme.palette.text.secondary}`,
          },
          tab:{
            maxWidth: "100%",
            padding: "6px 16px",
            fontSize: theme.typography.h5.fontSize,
            fontWeight: '100',
            textAlign:'left',
            textTransform: "unset !important",
            color: theme.palette.text.primary,
            margin: "6px 0",
            "&.Mui-selected": {
              ...theme.palette.text.gradient,
            }
          },
          tabIndicator: {
            width: "100%",
            background: theme.palette.secondary.darkGrey,
            borderLeft: `2px solid ${theme.palette.primary.gradient1}`,
            right: 'unset',
            left: 0,
            zIndex: -9,
          },
          inactiveBorder:{
            position: 'absolute',
            height: "100%",
            width: 2,
            left: 0,
            backgroundColor: theme.palette.secondary.darkGrey,
            zIndex: -10,
          },
          tabpanel: {
            padding: "0 16px",
            "& h5": {
              color: theme.palette.text.primary,
            },
            "& h6": {
              color: theme.palette.text.secondary,
            }
          },
          main:{
            textAlign:'start',
            color:'white',
            display:'flex',
            background:'#23272a',
            borderRadius:'10px 10px 0px 0px',
          },
          subject:{
            color: theme.palette.text.secondary,
            padding: 16
          }

    };
  }
  