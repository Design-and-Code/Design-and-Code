import type { NextPage } from 'next';
import Head from 'next/head';
import ReadyToStart from '~/components/common/ReadyToStart';
import HeroSection from '~/components/team/sections/Hero';
import TeamSection from '~/components/team/sections/Team';
import WebsiteTeam from '~/components/team/sections/WebsiteTeam';

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Team | Design and Code</title>
      </Head>
      <HeroSection/>
      <TeamSection/>
      <WebsiteTeam/>
      <ReadyToStart/>
    </div>
  );
};

export default Page;
