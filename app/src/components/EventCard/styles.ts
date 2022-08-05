import { Box, styled } from "@mui/material";

export const EventsCardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.background2,
  borderRadius: 10,
  marginBottom: "1rem",
  overflow:'hidden',
  '.bannerOuter':{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height:'fit-content',
    overflow:'hidden'
  },
  '.banner': {
    width:'100%',
    objectFit:'contain',
    transition:'0.5s',
  },
  '.eventContent': {
    padding: "1rem",
    display:'flex',
    flexDirection:'column'
  },
  '.eventName': {
    color: theme.palette.text.primary,
  },
  '.eventBox': {
    marginBottom:'1rem',
    display:'flex',
    flexWrap:'wrap'
  },
  '.rvspButton': {
    flex:1,
    fontSize:'1rem',
    width:'100%'
  },
}))

export const EventsCapsuleWrapper = styled(Box)(({ theme }) => ({
  background: "#2C2F33",
  color:"white",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  width:"fit-content",
  borderRadius:'50px',
  padding:'0.5rem 1rem',
  fontWeight:'400',
  marginRight:'1rem',
  marginTop:'1rem',
  fontSize:'0.8rem',
  '.svg': {
  marginRight:'0.8rem',
  display:"flex",
  alignItems:"center",
  }

}))

export const PastEventCardWrapper = styled('div')(({ theme }) => ({
  '.events-card': {
    borderRadius: '10px',
  },
  '.bannerOuter':{
    width:'100%',
    borderRadius: '10px',
  },
  '.banner': {
      width:'100%',
      borderRadius: '10px',
      objectFit:'contain',
      transition:'0.5s',
      overflow:'hidden'
  },
  '.eventName':{
    color:"white"
  },

'.bannerOuterPast': {
  transition: '0.5s',
  position: 'relative',
},
'.bannerOuterPast:hover > .bannerPastImage': {
  filter: 'brightness(50%)',
},
'.bannerOuterPast > .play': {
  visibility: 'hidden',
  position: 'absolute',
  left: '25%',
  top: '32%',
  zIndex: 10,
},
'.bannerOuterPast:hover > .play': {
  visibility: 'visible',
}
}))