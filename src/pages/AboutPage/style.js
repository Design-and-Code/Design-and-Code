

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
    heroSection: {
      height: "80vh",
    
    },
    heroSectionContent: {
      width: "100%",
    },
   
  };
}
