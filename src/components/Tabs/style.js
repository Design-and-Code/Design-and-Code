export default function style(theme) {
    return {
        root: {
            flexGrow: 1,
            backgroundColor: '#23272a',
            display: "flex",
            width:'85vw',
            color:'white',
            textAlign:'start',
            height:'90vh',
            overflowY:'auto',
            borderRadius:'0px 0px 10px 10px'
          },
          tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            
          },
          tab:{
              padding:'2rem 1rem 1rem 1rem',
              marginLeft:'2rem',
              fontSize:'1.5rem',
              fontWeight:'600',
              textAlign:'left',
              width:'60rem',
             
          },
          divider:{
            width:'80vw'
          },
          main:{
            textAlign:'start',
            width:'85vw',
            color:'white',
            display:'flex',
            background:'#23272a',
            padding:'2vw',
            borderRadius:'10px 10px 0px 0px',
            marginBottom:'-0.5%'
          },
          subject:{
            width:'16rem',
            fontSize:'2rem',
            paddingLeft:'1rem'
          }

    };
  }
  