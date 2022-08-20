import { Grid, styled } from "@mui/material";

export const ContactSectionWrapper = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  marginBottom: 120,
  '.link':{
  ...theme.palette.text.gradient,
  textDecoration:'underline'
  },
  '.description': {
    margin: "auto",
    display: "block",
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "40pc"
  },
  '.title': {
    display: "block",
    width: "100%",
    textAlign: "center",
    fontWeight:'600',  
    ...theme.palette.text.gradient
  },



}))

export const ContactGridWrapper = styled(Grid)(({ theme }) => ({
  maxHeight: 1060,
  display: "grid",
  gridGap: 20,
  gridTemplateColumns: "1fr 1fr",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: { 
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "unset",
  },
}))

export const ContactFormWrapper = styled('form')(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.backgroundBlurColor,
  display: 'grid',
  gridTemplateRows: "repeat(5, auto)",
  borderRadius:'20px',
  gap: '1rem',
  padding:'2rem',
  '.textFieldOutline': {
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
  '.btn':{
    width: "fit-content",
  },


}))
export const OptionsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridGap: 20,
  gridTemplateRows: "auto auto",
  '.optionBlock':{
    background: theme.palette.primary.backgroundBlurColor,
    padding:'2rem',
    width:'100%',
    borderRadius:'20px',
  },
  '.optionTitle':{
    color:theme.palette.text.primary
  },
  '.optionInfo':{
    color:theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  }

}))