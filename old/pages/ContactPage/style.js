export default function styles(theme) {
    
    return {
      link:{
        ...theme.palette.text.gradient,
        textDecoration:'underline'
      },
      section: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
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
        textAlign: "center",
        color: theme.palette.text.secondary,
        maxWidth: "40pc"
      },
      contactGrid: {
        maxHeight: 1060,
        display: "grid",
        gridGap: 20,
        gridTemplateColumns: "1fr 1fr",
        marginTop: theme.spacing(4),
        [theme.breakpoints.down("sm")]: { 
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "unset",
          
        }
      },
      contactForm:{
        width: '100%',
        background: theme.palette.primary.backgroundBlurColor,
        display: 'grid',
        gridTemplateRows: "repeat(5, auto)",
        borderRadius:'20px',
        padding:'2rem',
      },
      textInput:{
        border:'1px solid white',
      },
      textLabel:{
        color:'white !important',
        background:'#191d23',
      },
      textFieldOutline: {
        "& .Mui-focused.MuiInputLabel-animated": {
          color: theme.palette.primary.gradient1
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.text.secondary,
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.gradient1,
        }
      },
      btn:{
        width: "fit-content",
      },
      options: {
        display: 'grid',
        gridGap: 20,
        gridTemplateRows: "auto auto"
      },
      optionBlock:{
        background: theme.palette.primary.backgroundBlurColor,
        padding:'2rem',
        width:'100%',
        borderRadius:'20px',
      },
      optionTitle:{
        color:theme.palette.text.primary
      },
      optionInfo:{
        color:theme.palette.text.secondary,
        marginBottom: theme.spacing(2)
      }
    };
  }
  