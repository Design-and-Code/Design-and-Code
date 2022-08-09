import type { NextPage } from 'next';
import Head from 'next/head';
import HeroSection from '~/components/team/sections/Hero';
import TeamSection from '~/components/team/sections/Team';

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Team | Design and Code</title>
      </Head>
      <HeroSection/>
      <TeamSection/>
    </div>
  );
};

export default Page;
