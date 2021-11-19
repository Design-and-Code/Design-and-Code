export default function styles(theme) {
  return {
    eventsCard: {
      
      backgroundColor: theme.palette.primary.background2,
      borderRadius: 10,
      marginBottom: "4rem",
      overflow:'hidden'
    },
    eventName: {
      color: theme.palette.text.primary,
    },
    eventContent: {
      padding: "1rem",
      display:'flex',
      flexDirection:'column'
    },
    rvspButton: {
      flex:1,
      fontSize:'1rem',
      width:'100%'
    },
    bannerOuter:{
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height:'fit-content',
      width:'fit-content',
      overflow:'hidden'
    },
    banner: {
        width:'100%',
        objectFit:'contain',
        transition:'0.5s',
        
    },
    time: {
        fontSize: "0.8rem"
    },
    eventBox: {
      marginBottom:'1rem',
      display:'flex',
      flexWrap:'wrap'
    }
  };
}
