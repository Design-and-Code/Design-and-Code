import { Grid, Typography } from '@mui/material';
import React from 'react';
import { FeatureWrapper, SectionWrapper } from './styles';
import { FEATURES } from '../../../lib/constants';

interface FeaturesSectionProps {}

interface FeatureProps {
  title: string,
  image: string,
  description: string,
}

const Feature: React.FC<FeatureProps> = (props) => {
  return (
    <FeatureWrapper data-aos="fade-up" data-aos-delay="200">
      <div className={'imageHolder'}  data-aos="fade-up" data-aos-delay="400">
        <img className={'image'} src={props.image} alt="feature" />
      </div>
      <div className={'infoHolder'}>
        <div data-aos="fade-up" data-aos-delay="300"> 
          <Typography variant="h5" className={'title'}>
            {props.title}
          </Typography> 
        </div>
        <div data-aos="fade-up" data-aos-delay="400"> 
          <Typography variant="subtitle1" className={'description'}>
            {props.description}
          </Typography> 
        </div>
      </div>
    </FeatureWrapper>
  )
}

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

        <Grid container>
          {FEATURES.map((feat, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Feature
                {...feat}
              />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </SectionWrapper>
  );
};

export default FeaturesSection;
