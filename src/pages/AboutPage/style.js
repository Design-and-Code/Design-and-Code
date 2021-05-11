

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
      maxWidth: "60%",
      textAlign: "center",
      fontSize:'1.1rem',
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },
    description2: {
      display: "block",
      width: "100%",
      textAlign: "center",
      fontSize:'1.1rem',
      color: theme.palette.text.secondary,
      marginBottom: 16
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
        paddingTop:'2rem',
      [theme.breakpoints.down("sm")]: {
        textAlign: 'center',
      },
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
    heroSection: {
      height: "50vh",
    
    },
    heroSectionContent: {
      width: "100%",
    },
   
  };
}
