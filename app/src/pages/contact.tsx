import type { NextPage } from 'next';
import Head from 'next/head';
import ReadyToStart from '~/components/common/ReadyToStart';
import ContactForm from '~/components/contact/sections/ContactForm';
import Contactus from '~/components/contact/sections/Contactus';


const Page: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Contact | Design and Code</title>
            </Head>
            <Contactus />
            <ContactForm />
            <ReadyToStart />
        </div>
    );
};

export default Page;
