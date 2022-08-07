import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ContainedButton } from "../Button";
import { ReadyToStartWrapper } from "./styles";

const ReadyToStart = () => {
  return (
    <ReadyToStartWrapper>
      <Grid container className={'journeyTextSection'}>
        <div data-aos="fade-up">
          <Typography variant="h3" gutterBottom className={'subtitle'}>
            Ready to start your journey?
          </Typography>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <Typography
            variant="subtitle1"
            gutterBottom
            className={'secondaryDesc textCenter'}
          >
            Come connect, collaborate and accelerate your growth with folks from
            around the world!
          </Typography>
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <ContainedButton
            size="large"
            href="https://discord.gg/gM3bG4rAU5"
          >
            JOIN DISCORD
          </ContainedButton>
        </div>
      </Grid>
      <Grid container className={'journeyImageSection'}>
        <Grid container className={'imgContainer'}>
          <div className={'imgCenter'}>
            <Image
              alt=" "
              src="/static/team/Devraj Chatribin.jpeg"
              className={'imgSmall'}
            />
          </div>
          <div className={'imgLeft'}>
            <Image
              alt=" "
              src="/static/team/Shriram Parab.jpeg"
              className={'imgMedium middleImage'}
            />
          </div>
          <div className={'imgRight'}>
            <Image
              alt=" "
              src="/static/team/Nandani Paliwal.jpg"
              className={'imgBig'}
            />
          </div>
        </Grid>
        <Grid container className={'imgContainer'}>
          <div className={'imgCenter'}>
            <Image
              alt=" "
              src="/static/team/Falguni Sarkar.jpeg"
              className={'imgBig'}
            />
          </div>
          <div className={'imgRight'}>
            <Image
              alt=" "
              src="/static/team/Macy So.JPG"
              className={'imgSmall middleImage'}
            />
          </div>
          <div className={'imgLeft'}>
            <Image
              alt=" "
              src="/static/team/pratham krishna.jpg"
              className={'imgMedium'}
            />
          </div>
        </Grid>
      </Grid>
    </ReadyToStartWrapper>
  )
}

export default ReadyToStart;