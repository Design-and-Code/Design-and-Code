import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '~/components/contact/sections/ContactForm';
import ContactUs from '~/components/contact/sections/Contact';
import Options from '~/components/contact/sections/Options';
import { ContactGridWrapper, ContactSectionWrapper } from '~/components/contact/styles';

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact | Design and Code</title>
      </Head>
      <ContactSectionWrapper>
        <ContactUs/>
        <ContactGridWrapper container>
          <ContactForm/>
          <Options/>
        </ContactGridWrapper>
      </ContactSectionWrapper>
    </div>
  );
};

export default Page;
