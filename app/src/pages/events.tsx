import type { NextPage } from 'next';
import Head from 'next/head';
import ReadyToStart from '~/components/common/ReadyToStart';
import HeaderSection from '~/components/events/sections/Header';
import PastEvents from '~/components/events/sections/PastEvents';
import UpcomingEvents from '~/components/events/sections/UpcomingEvents';

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Events | Design and Code</title>
      </Head>
      <HeaderSection/>
      <UpcomingEvents/>
      <PastEvents/>
      <ReadyToStart/>
    </div>
  );
};

export default Page;
