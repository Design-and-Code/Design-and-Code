export default function style(theme) {
    return {
     
      infoHolder: {
        width: '100%',
        background: theme.palette.primary.backgroundBlurColor,
        borderRadius:'8px'
      },
      role:{
        ...theme.palette.text.gradient ,
        fontWeight:'600'
      },
      image: {
        transform: 'translateY(-50%)',
        margin: "auto",
        width: "150px",
        height: '150px',
        border:`5px solid ${theme.palette.secondary.darkGrey}`,
        objectFit:'contain',
        borderRadius:'50%',
      },
      imageWrapper:{
        height: 80,
        display:'flex',
        justifyContent:'center'
      },
      title: {
        color: theme.palette.text.primary,
        
      },
      description: {
        color: theme.palette.text.secondary,
      },
      member:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height: '24pc'
      },
      infoBox:{
        width:'100%',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
      }
    };
  }
  