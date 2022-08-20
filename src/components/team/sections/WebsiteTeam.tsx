import { useEffect, useState } from "react";
import axios from 'axios';
import { Grid, Tooltip, Typography } from "@mui/material";
import { WebsiteTeamWrapper } from "../styles";


interface IContributors {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    contributions: number, 
}

const WebsiteTeam = () => {

  const [contributors, setContributors] = useState<IContributors[]>([])

  useEffect(() => {
    axios.get('https://api.github.com/repos/design-and-code/design-and-code/contributors')
      .then((res: { data: IContributors[] }) => setContributors(() => res.data))
  }, [])

  return (
    <WebsiteTeamWrapper container gap={2} justifyContent='center'>
      <Grid item xs={12}>
        <Typography variant='h3' className="subtitle">
          Website Team
        </Typography>
      </Grid>
      {contributors && contributors.map(i => (
        <Grid item className={'contributor'} key={i.id}>
          <a href={i.html_url} target='_blank'>
            <Tooltip arrow title={i.login} placement='top'>
              <img src={i.avatar_url} alt=" " className="contributorImage"/>
            </Tooltip>
          </a>
        </Grid>
      ))}
    </WebsiteTeamWrapper>
  )
}

export default WebsiteTeam;