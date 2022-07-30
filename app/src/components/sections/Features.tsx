import { Grid, Typography } from '@mui/material';
import React from 'react';
import { SectionWrapper } from './styles';

interface FeaturesSectionProps {}

const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  return (
    <SectionWrapper container>
      <Grid container>
        <Typography
          variant="h3"
          gutterBottom
          className={'subtitle'}
          data-aos="fade-up"
        >
          What&apos;s Inside Design And Code?
        </Typography>
        {/* <Grid container xs={12} sm={6}>
          <Feature
            image={mentoring}
            title={'Mentoring Students'}
            description={
              'Get connected with a mentor that will help you pave your career path'
            }
          />
          <Feature
            image={freeResources}
            title={'Free Resources'}
            description={
              'Get Free resources related to Designing and Development from the community.'
            }
          />
        </Grid>
        <Grid container xs={12} sm={6}>
          <Feature
            image={opportunities}
            title={'Opportunities'}
            description={
              'Get Internships and Job opportunities and gain experience while you learn.'
            }
          />
          <Feature
            image={portfolioAndReviews}
            title={'Portfolio & Reviews'}
            description={
              'Get your portfolio and projects reviewed by Industry experts and mentors.'
            }
          />
        </Grid> */}
      </Grid>
    </SectionWrapper>
  );
};

export default FeaturesSection;
