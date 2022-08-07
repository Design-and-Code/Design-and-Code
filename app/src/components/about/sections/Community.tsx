import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { CommunitySectionWrapper } from '../styles'

const CommunitySection = () => {
  return (
    <CommunitySectionWrapper container>
      <Grid container>
        <Typography variant="h2" gutterBottom className={'title'}>
          Our Community
        </Typography>
        <Grid container item xs={12} sm={6} className={'communityGrid'}>
          <div className={'communityGrid1'}>
            <Typography variant="h6" gutterBottom className='secondaryDesc'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Typography variant="h6" gutterBottom className={'secondaryDesc'}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </div>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <div className={'communityGrid2'}>
            <Image
              src={'/static/illustrations/aboutIllustration.svg'}
              className={'cgimage'}
              alt="Hero"
            />
          </div>
        </Grid>
      </Grid>
    </CommunitySectionWrapper>
  )
}

export default CommunitySection;