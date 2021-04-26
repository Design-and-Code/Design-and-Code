export default function style(theme) {
    return {
        root: {
            width: '100%',
            background:'transparent',
            boxShadow:'none'
          },
          heading: {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: theme.typography.fontWeightRegular,
            background:'transparent'
          },
          description:{
              background:'#202630',
              padding:'1.5rem',
              borderRadius:'10px'
          }
    };
  }
  