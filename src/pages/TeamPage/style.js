

export default function styles(theme) {
    
    return {
      
      section: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 120,
      },
      title: {
        display: "block",
        width: "100%",
        textAlign: "center",
        fontWeight:'600',  
        paddingTop:'5rem',
        ...theme.palette.text.gradient
      },
      subtitle: {
        display: "block",
        width: "100%",
        textAlign: "center",
        ...theme.palette.text.gradient,
      },
      description: {
        margin: "auto",
        display: "block",
        width: "60%",
        textAlign: "center",
        fontSize:'1.1rem',
        color: theme.palette.text.secondary,
      },
      description2: {
        margin: "auto",
        display: "block",
        width: "100%",
        textAlign: "center",
        fontSize:'1.1rem',
        color: theme.palette.text.secondary,
      },
      member_grid:{
          justifyContent:'center'
      },
      secondaryDesc: {
        color: theme.palette.text.secondary,
        width: "100%",
      },
      
      community_grid:{
          alignItems:'center',
          color:theme.palette.text.secondary
          
      },
      community_grid1:{
        color:theme.palette.text.secondary,
          margin:'0rem 2rem 0rem 2rem',
          paddingTop:'2rem'
      },
      community_grid2:{
          display:'flex',
          justifyContent:'center',
          width:'100%',
          paddingTop:'2rem'
      },
      cgimage:{
          objectFit:'contain',
          width:'50%'
      },
      
      heroSectionContent: {
        width: "100%",
      },
      infoHolder: {
        display:'flex',
        alignItems:'center',
        width:'90%',
        background:'#202630',
        marginTop:'4rem',
        borderRadius:'8px',
        padding:'1rem 3rem'
      },
      imageWrapper:{
        width:'80%',
        display:'flex',
        justifyContent:'center'
      },
      infoHolder2: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: "0% 10%",
        background:'#202630',
        borderRadius:'8px',
        marginTop:'4rem',
        width:'100%',
      },
      role:{
        ...theme.palette.text.gradient ,
        fontWeight:'600'
      },
      image: {
        width: "220px",
        height: '220px',
        border:'3px solid grey',
        objectFit:'contain',
        borderRadius:'50%',      
      },
      image2: {
        width: "150px",
        height: '150px',
        margin:'0rem 4.5rem',
        border:'3px solid grey',
        objectFit:'contain',
        borderRadius:'50%',
        marginTop:'-4rem'        
      },
      title__color: {
        color: theme.palette.text.primary,
        
      },
      description__color: {
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
        
      },
      teamPage:{
        textAlign:'center',
        paddingBottom:'5rem'
      },
     
    };
  }
  