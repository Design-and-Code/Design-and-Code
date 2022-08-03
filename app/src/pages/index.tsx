import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import FeaturesSection from '~/components/home/sections/Features';
import HeroSection from '~/components/home/sections/Hero';
import TextChannels from '~/components/home/sections/TextChannels';
import VoiceChannels from '~/components/home/sections/VoiceChannels';
// import { TextChannelsWrapper } from '~/components/home/styles';

const HomePage: NextPage = () => {
  return (
    <div style={{padding: '0 10px'}}>
      <Head>
        <title>Home | Design and Code</title>
      </Head>
      <HeroSection />
      <FeaturesSection />
      <TextChannels />
      <VoiceChannels />
    </div>
  );
};

// const HeroSection = () => {
//   return (
//     <Fragment>

//       {/* Categories Section */}
//       <Grid container className={classes.section}>
//         <Grid xs={12} sm={6} className={classes.categoriesSection}>
//           <div data-aos="fade-up">
//             <Typography
//               variant="h3"
//               className={`${classes.subtitle} ${classes.textAlignLeft}`}
//             >
//               Text Channels
//             </Typography>
//           </div>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <Typography
//               variant="subtitle1"
//               className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
//             >
//               We have two main Categories: Designing and Development. Make sure
//               you put a particular message in the respective Category (Read
//               respective channel description to know more). Such as all Design
//               oriented messages should be put under the appropriate channel in
//               the Designing Category. Similarly, for Development related
//               messages.
//             </Typography>
//           </div>
//         </Grid>
//         <Grid container xs={12} sm={6}>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <img
//               src={textChannelsIllustration}
//               className={classes.categoriesIllustration}
//               alt="Categories Illustration"
//             />
//           </div>
//         </Grid>
//       </Grid>
//       <Grid container className={classes.section}>
//         <Grid container xs={12} sm={6}>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <img
//               src={voiceChannelsIllustration}
//               className={classes.categoriesIllustration}
//               alt="Categories Illustration"
//             />
//           </div>
//         </Grid>
//         <Grid xs={12} sm={6} className={classes.categoriesSection}>
//           <div data-aos="fade-up">
//             <Typography
//               variant="h3"
//               className={`${classes.subtitle} ${classes.textAlignLeft}`}
//             >
//               Voice Channels
//             </Typography>
//           </div>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <Typography
//               variant="subtitle1"
//               className={`${classes.description} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
//             >
//               We have two main Categories: Designing and Development. Make sure
//               you put a particular message in the respective Category (Read
//               respective channel description to know more). Such as all Design
//               oriented messages should be put under the appropriate channel in
//               the Designing Category. Similarly, for Development related
//               messages.
//             </Typography>
//           </div>
//         </Grid>
//       </Grid>
//       {/* Videos Section */}
//       {/* <Grid container className={`${classes.section} ${classes.videoSection}`}>
//       <Grid container xs={12}>
//         {/* <iframe
//           width="560"
//           height="680"
//           className={classes.video}
//           src="https://www.youtube-nocookie.com/embed/Ky0xZH3W-n4?rel=0"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//         <iframe
//           className={`${classes.discord}`}
//           title="discord"
//           src="https://e.widgetbot.io/channels/813660012001624124/813663619195207721"
//           height="600"
//           width="100%"
//           frameborder="0"
//           border="0"
//           cellspacing="0"
//         ></iframe>
//         <Typography
//           variant="subtitle1"
//           className={`${classes.videoDesc} ${classes.secondaryDesc} ${classes.textAlignLeft}`}
//         >
//           Design and Code is a global community where anyone can learn and
//           network with fellow developers and designers! Our main motive is
//           learning and growing together. We share awesome resources, job
//           opportunities, referrals, events, freebies, and mentor students
//           everything for free!! 🔥 We are sure you'll have a great learning
//           experience along with us. Looking forward to see you there! 😀
//         </Typography>
//       </Grid>
//     </Grid> */}
//       <FaqSection />
//       <ReadyToStart />
//     </div>
//   );
// };

export default HomePage;
