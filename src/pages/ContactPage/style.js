

export default function styles(theme) {
    
    return {
      link:{
        ...theme.palette.text.gradient,
        textDecoration:'underline'
      },
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
      
      faq_grid:{
         
          color:theme.palette.text.secondary
          
      },
      faq_grid1:{
        color:theme.palette.text.secondary,
          margin:'0rem 2rem 0rem 2rem',
          paddingTop:'2rem'
      },
      faq_grid2:{
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
        padding:'5rem 0rem 5rem 0rem'
      
      },
      heroSectionContent: {
        width: "100%",
      },
      contactForm:{
        width: '100%',
        background: '#191d23',
     
        
        padding:'3rem',
        marginBottom:'2rem',
        borderRadius:'20px'
      },
      textInput:{
        border:'1px solid white',
        margin:'1rem 2rem 1rem 2rem',
      },
      submitBtn:{
        margin:'1rem 2rem 1rem 2rem',
      },
      textLabel:{
        color:'white !important',
        background:'#191d23',
        margin:'1rem 2rem 1rem 2rem'
      },
      contact:{
        padding:'1rem',
        marginTop:'2rem'
      },
      optionBlock:{
        background: '#191d23',
        padding:'2rem',
        width:'100%',
        borderRadius:'20px',
        marginBottom:'2rem'
      },
      optionTitle:{
        color:theme.palette.text.primary
      },
      optionInfo:{
        color:theme.palette.text.secondary,
        padding:'0.5rem 0rem'
      }
    };
  }
  