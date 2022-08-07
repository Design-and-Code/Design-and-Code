import { Grid, Typography } from "@mui/material";
import { ChannelsWrapper } from "../styles";

const VoiceChannels = () => {
  return (

    <ChannelsWrapper container>
      <Grid item xs={12} sm={6}>
        <div data-aos="fade-up" data-aos-delay="200">
          <img
            src="/static/illustrations/voiceChannelsIllustration.png"
            className={'channelIllustration'}
            alt="Categories Illustration"
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div data-aos="fade-up">
          <Typography
            variant="h3"
            className={'title'}
          >
            Voice Channels
          </Typography>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Typography
            variant="subtitle1"
            className={'description'}
          >
            We have two main Categories: Designing and Development. Make sure
            you put a particular message in the respective Category (Read
            respective channel description to know more). Such as all Design
            oriented messages should be put under the appropriate channel in the
            Designing Category. Similarly, for Development related messages.
          </Typography>
        </div>
      </Grid>

    </ChannelsWrapper>
  )
}

export default VoiceChannels;