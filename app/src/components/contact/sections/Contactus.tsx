import { Typography } from "@mui/material"

const ContactUs = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom className={'title'}>
        Contact Us
      </Typography>
      <Typography variant="h6" gutterBottom className={'description'}>
        If you have any questions, we would love to hear from you. Feel free
        to write us at{" "}
        <a
          href="mailto:designandcode.community@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={'link'}
        >
          designandcode.community@gmail.com
        </a>{" "}
        and we'll get back to you
      </Typography>
    </>
  )
}

export default ContactUs;