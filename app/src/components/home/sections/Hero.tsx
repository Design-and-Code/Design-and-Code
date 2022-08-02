import { Box, Typography } from '@mui/material';
import Image from 'next/future/image';
import React from 'react';
import heroBackground from '~/assets/hero-section.svg';
import { ContainedButton, OutlinedButton } from '../../common/Button';
import Link from '../../common/Link';
import { HeroSectionWrapper } from './styles';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <HeroSectionWrapper container>
      <Image
        priority
        className="background-icons"
        alt="Icon background"
        src={heroBackground}
      />
      <Box width="100%">
        <Typography variant="h1" className={'title'}>
          Design And Code
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={'description'}>
          A place for Designers and Developers to Learn & Grow together.
        </Typography>
        <Box className={'heroBtns'}>
          <ContainedButton
            href="https://discord.gg/gM3bG4rAU5"
            LinkComponent={Link}
            size="large"
            style={{
              width: '200px'
            }}
          >
            <Typography variant='subtitle2'>
              JOIN DISCORD
            </Typography>
          </ContainedButton>
          <OutlinedButton 
            href="/about" 
            size="large"
            style={{
              width: '200px'
            }}
          >
            <Typography variant='subtitle2'>
              PARTNERSHIP
            </Typography>
          </OutlinedButton>
        </Box>
      </Box>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
