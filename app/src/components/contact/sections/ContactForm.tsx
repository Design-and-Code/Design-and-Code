import { Card, Grid, Link, TextField, Typography } from "@mui/material"
import { ContainedButton, OutlinedButton } from "~/components/common/Button"
import { ContactFormWrapper } from "../styles"

const ContactForm = () => {
    return (
        <ContactFormWrapper>
            <Grid container className='section heroSection '>
                <div className='heroSectionContent'>

                    <Grid container className='contactGrid'>
                        <form
                            className='contactForm'
                            noValidate
                            autoComplete="off"
                            action="https://formsubmit.co/designandcode.community@gmail.com"
                            method="Post"
                        >
                            <TextField
                                className='textFieldOutline'
                                id="outlined-basic"
                                variant="outlined"
                                label="Name"
                                name="name"
                                required
                            />
                            <TextField
                                className='textFieldOutline'
                                id="outlined-basic"
                                variant="outlined"
                                label="Email"
                                name="email"
                                required
                            />
                            <TextField
                                className='textFieldOutline'
                                id="outlined-basic"
                                variant="outlined"
                                label="Subject"
                                name="subject"
                                required
                            />
                            <TextField
                                className='textFieldOutline'
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
                                href="https://discord.gg/gM3bG4rAU5"
                                LinkComponent={Link}
                                size="large"
                                style={{
                                    width: '230px'
                                }}
                            >
                                <Typography variant='subtitle2'>
                                    SUBMIT
                                </Typography>
                            </ContainedButton>
                        </form>

                        <div className='options'>
                            <Card className='optionBlock'>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className='optionTitle'
                                >
                                    Become our Community Partner
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    className='optionInfo'
                                >
                                    If you have any suggestions or ideas that can help us to
                                    improve how Design and Code functions or operate, also if you
                                    can conduct design sessions, workshops, or meetups. Do write
                                    them to us.
                                </Typography>
                                <OutlinedButton
                                    size="large"
                                    style={{
                                        width: '230px'
                                    }}
                                >
                                    <Typography variant="h6">Partner with us</Typography>
                                </OutlinedButton>
                            </Card>
                            <Card className='optionBlock'>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className='optionTitle'
                                >
                                    Be our Sponsor
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    className='optionInfo'
                                >
                                    If you have any suggestions or ideas that can help us to
                                    improve how Design and Code functions or operate, also if you
                                    can conduct design sessions, workshops, or meetups. Do write
                                    them to us.
                                </Typography>
                                <OutlinedButton
                                    size="large"
                                    style={{
                                        width: '230px'
                                    }}
                                >
                                    <Typography  variant="h6">Sponsor Us</Typography>
                                </OutlinedButton>
                            </Card>
                        </div>
                    </Grid>

                </div>
            </Grid>
        </ContactFormWrapper>
    )
}

export default ContactForm