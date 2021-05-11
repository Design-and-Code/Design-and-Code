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
        background: theme.palette.primary.backgroundBlurColor,
        padding:'1.5rem',
        borderRadius:'10px',
        color: theme.palette.text.secondary
      },
      icon: {
        color: theme.palette.primary.gradient1
      }
    };
  }
  