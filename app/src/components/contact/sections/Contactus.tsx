import { Grid, Typography } from '@mui/material';
import { ContactusWrapper } from '../styles';

const Contactus = () => {
  return (
    <ContactusWrapper>
      <Grid container className="section heroSection ">
        <div className="heroSectionContent">
          <Typography variant="h2" gutterBottom className="title">
            Contact Us
          </Typography>
          <Typography variant="h6" gutterBottom className="description">
            If you have any questions, we would love to hear from you. Feel free
            to write us at{' '}
            <a
              href="mailto:designandcode.community@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              designandcode.community@gmail.com
            </a>{' '}
            and we{"'"}ll get back to you
          </Typography>
        </div>
      </Grid>
    </ContactusWrapper>
  );
};

export default Contactus;
