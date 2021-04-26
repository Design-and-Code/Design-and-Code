export default function style(theme) {
    return {
     
      infoHolder: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: "0% 10%",
        background:'#202630',
        marginTop:'4rem',
        borderRadius:'8px'
      },
      infoHolder2: {
        display:'flex',
        alignItems:'center',
        width:'100%',
        background:'#202630',
        marginTop:'4rem',
        borderRadius:'8px',
        padding:'1rem 3rem'
      },
      role:{
        ...theme.palette.text.gradient ,
        fontWeight:'600'
      },
      image: {
        width: "150px",
        height: '150px',
        margin:'0rem 4.5rem',
        border:'3px solid grey',
        objectFit:'contain',
        borderRadius:'50%',
        marginTop:'-4rem'        
      },
      image2: {
        width: "150px",
        height: '150px',
        border:'3px solid grey',
        objectFit:'contain',
        borderRadius:'50%',           
      },
      imageWrapper:{
        width:'80%',
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
        margin:'1rem'
        
      },
      infoBox:{
        width:'100%',
        paddingTop:'1rem',
        
      }
    };
  }
  