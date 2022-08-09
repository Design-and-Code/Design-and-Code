import { Grid, Typography } from "@mui/material"
import Links from "../Links";
import { HeroSectionWrapper } from "../styles"

const HeroSection = () => {
  return (
    <>
      <HeroSectionWrapper>
        <div className={'heroSectionContent'}>
          <Typography variant="h2" gutterBottom className={'title'}>
            Our Team
          </Typography>
          <Typography variant="h6" gutterBottom className={'description'}>
            Meet the spirited team that work behind the scenes to establish
            this platform.
          </Typography>
          <div>
            <div className={'infoHolder'}>
              <div className={'imageWrapper'}>
                <img
                  className={'image'}
                  src="static/team/Devraj Chatribin.jpeg"
                  alt="Member"
                />
              </div>
              <div className={'infoBox'}>
                <Typography variant="h5" className={'title__color'}>
                  Devraj Chatribin
                </Typography>
                <Typography variant="h6" className={'role'}>
                  FOUNDER & DESIGN LEAD
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={'description__color'}
                >
                  Web Developer | UI/UX Designer
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={'foundDesc description__color'}
                >
                  I take immense pleasure to welcome you to Design and Code. We
                  offer an inclusive and holistic approach to learning
                  technology and related fields. Over the time, I have seen the
                  team grow through the various experiences of learning and
                  networking provided here. We hope to expand this community so
                  that we can impact as many people as possible in the coming
                  future.
                </Typography>
                <div>
                  <Links
                    linkedIn={"https://www.linkedin.com/in/devraj-chatribin/"}
                    instagram={"https://www.instagram.com/designfordev/"}
                    twitter={"https://twitter.com/devrajchatribin"}
                    github={"https://github.com/DevrajDC"}
                    website={"https://devrajchatribin.co/"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroSectionWrapper>

    </>
  )
}

export default HeroSection;