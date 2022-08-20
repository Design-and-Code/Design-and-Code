import { useEffect, useState } from 'react';
import { Grid, Tooltip, Typography } from '@mui/material';
import { WebsiteTeamWrapper } from '../styles';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

interface IContributors {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const fetcher = async (): Promise<IContributors[]> => {
  const res = await fetch(
    'https://api.github.com/repos/design-and-code/design-and-code/contributors'
  );

  if (res.ok) {
    return res.json();
  }

  return [];
};

const WebsiteTeam = () => {
  const { data: contributors = [] } = useSWR('contributors', fetcher);

  return (
    <WebsiteTeamWrapper container gap={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h3" className="subtitle">
          Website Team
        </Typography>
      </Grid>
      {contributors &&
        contributors.map((i) => (
          <Grid item className={'contributor'} key={i.id}>
            <Link href={i.html_url} target="_blank" rel="noreferrer">
              <Tooltip arrow title={i.login} placement="top">
                <Image
                  width={250}
                  height={250}
                  src={i.avatar_url}
                  alt=" "
                  className="contributorImage"
                />
              </Tooltip>
            </Link>
          </Grid>
        ))}
    </WebsiteTeamWrapper>
  );
};

export default WebsiteTeam;
