import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderSection from '~/components/events/sections/Header';
import UpcomingEvents from '~/components/events/sections/UpcomingEvents';

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Events | Design and Code</title>
      </Head>
      <HeaderSection/>
      <UpcomingEvents/>
    </div>
  );
};

export default Page;
