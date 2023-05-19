import { Grid, Typography } from "@mui/material";
import React from "react";
import { PARTNERS } from "~/lib/constants";
import { PartnersSectionsWrapper } from "../styles";
import Image from "next/image";

interface IPartnerProps {
  logo: string;
  name: string;
  id: string;
}

const Partner: React.FC<IPartnerProps> = (props) => {
  return (
    <>
      <Image className={"image"} src={props.logo} alt="Partner" />
    </>
  );
};

const PartnersSection = () => {
  return (
    <PartnersSectionsWrapper>
      <Typography variant="h2" gutterBottom className={"subtitle"}>
        Our Partners
      </Typography>
      <Grid
        container
        spacing={2}
        className={"partners"}
        justifyContent="center"
      >
        {PARTNERS.map((partner) => (
          <Grid
            item
            className={"imageWrapper"}
            lg={3}
            md={3}
            sm={4}
            xs={5}
            key={partner.id}
          >
            <Partner {...partner} />
          </Grid>
        ))}
      </Grid>
    </PartnersSectionsWrapper>
  );
};

export default PartnersSection;
