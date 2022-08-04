import type { NextPage } from 'next';
import Head from 'next/head';
import CommunitySection from '~/components/about/sections/Community';
import HeroSection from '~/components/about/sections/Hero';
import PartnersSection from '~/components/about/sections/Partners';
import SponsorsSection from '~/components/about/sections/Sponsors';

const Page: NextPage = () => {
  return (
    <div style={{padding: '0 10px'}}>
      <Head>
        <title>About | Design and Code</title>
      </Head>
      <HeroSection/>
      <CommunitySection/>
      <PartnersSection/>
      <SponsorsSection/>
    </div>
  );
};

export default Page;
