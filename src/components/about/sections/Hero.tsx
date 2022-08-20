import { Typography } from '@mui/material';
import { HeroSectionWrapper } from '../styles';

const HeroSection = () => {
  return (
    <HeroSectionWrapper container>
      <div className={'heroSectionContent'}>
        <Typography variant="h2" gutterBottom className={'title'}>
          Our Mission
        </Typography>
        <Typography variant="h6" gutterBottom className={'description'}>
          Design & Code is a global community on a mission to connect designers
          and developers to create a happy community eager to learn, innovate
          and grow together.
        </Typography>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
