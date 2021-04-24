export default function style(theme) {
    return {
        guideline: {
       width:'100%',
       margin:'2rem 4rem'
      },
      infoHolder: {
        display: "flex",
        padding: "20px 0 20px 20px",
        flexDirection: "column",
        justifyContent: "center",
      },
      imageHolder: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: 100,
        width: 100,
        color:'white',
        borderRadius: 9999,
        background:
          "#64B1F330",
        [theme.breakpoints.down("sm")]: {
          height: 80,
          width: 80,
        },
      },
      image: {
        width: "100%",
        padding: "20%"
      },
      title: {
        color: theme.palette.text.primary,
        marginBottom: 8,
      },
      description: {
        color: theme.palette.text.secondary,
      },
      botImage:{
        borderRadius:'50%',
        background:'#99AAB5',
        width:'3.5rem',
        height:'3.5rem'
      },
      botName:{
        fontWeight:'600',
        ...theme.palette.text.gradient,
        paddingLeft:'1rem'
      },
      botDesc:{
        fontWeight:'500',
        color:theme.palette.text.secondary
      },
      prefix:{
        fontWeight:'600',
        color:'white',
        margin:'1rem 0rem'
      },
      command:{
        fontWeight:'600',
        color:'white'
      },
      commandInfo:{
        fontWeight:'600',
        color:theme.palette.text.secondary
      }
    };
  }
  