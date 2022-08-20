import { TextField, Typography } from "@mui/material"
import { ContainedButton } from "~/components/common/Button"
import { ContactFormWrapper } from "../styles"

const ContactForm = () => {
  return (
    <ContactFormWrapper
      noValidate
      autoComplete="off"
      action="https://formsubmit.co/designandcode.community@gmail.com"
      method="Post"
    >
      <TextField
        classes={{ root: 'textFieldOutline' }}
        id="outlined-basic"
        variant="outlined"
        label="Name"
        name="name"
        required
      />
      <TextField
        classes={{ root: 'textFieldOutline' }}
        id="outlined-basic"
        variant="outlined"
        label="Email"
        name="email"
        required
      />
      <TextField
        classes={{ root: 'textFieldOutline' }}
        id="outlined-basic"
        variant="outlined"
        label="Subject"
        name="subject"
        required
      />
      <TextField
        classes={{ root: 'textFieldOutline' }}
        id="outlined-basic"
        variant="outlined"
        label="Message"
        multiline
        rows={4}
        name="message"
        required
      />
      <input
        type="hidden"
        name="_cc"
        value="devrajchatribin9978@gmail.com"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_subject"
        value="Contact Form | Design and Code"
      />
      <input
        type="hidden"
        name="_next"
        value="https://designandcode.netlify.app/contact"
      />
      <ContainedButton
        type="submit"
        size="large"
        className={'btn'}
      >
        <Typography variant="subtitle2">
          SUBMIT
        </Typography>
      </ContainedButton>
    </ContactFormWrapper>
  )
}

export default ContactForm;
