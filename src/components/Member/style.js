export default function style(theme) {
    return {
      feature: {
       
      },
      infoHolder: {
        display: "flex",
        padding: "0% 10%",
        flexDirection: "column",
        justifyContent: "center",
      },
      role:{
        ...theme.palette.text.gradient ,
        fontWeight:'600'
      },
      image: {
        width: "100%",
        padding: "5rem 2.5rem 2% 2.5rem",
        objectFit:'contain'
      },
      title: {
        color: theme.palette.text.primary,
        
      },
      description: {
        color: theme.palette.text.secondary,
      },
    };
  }
  