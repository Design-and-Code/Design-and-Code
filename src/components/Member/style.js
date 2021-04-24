export default function style(theme) {
    return {
     
      infoHolder: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      role:{
        ...theme.palette.text.gradient ,
        fontWeight:'600'
      },
      image: {
        width: "100%",
        objectFit:'contain',
        marginBottom: 16
      },
      title: {
        color: theme.palette.text.primary,
        
      },
      description: {
        color: theme.palette.text.secondary,
      },
    };
  }
  