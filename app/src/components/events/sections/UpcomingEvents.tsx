import { Grid, Typography } from "@mui/material";
import EventsCard from "~/components/EventCard";
import { EVENTS } from "~/lib/constants";
import { UpcomingEventsWrapper } from "../styles";

const UpcomingEvents = () => {
  return (
    <UpcomingEventsWrapper>
      <Typography variant="h4" className={'subtitle'}>
        Upcoming Events
      </Typography>
      <Grid
        container
        spacing={5}
        style={{marginBottom:'1rem'}}
      >
        {
          EVENTS.upcoming.map((event, i)=>{
            return(
              <Grid item xs={12} sm={6} md={4} key={i}>
                <EventsCard
                  {...event}
                />
              </Grid>
            )
          })
        }
      </Grid>

    </UpcomingEventsWrapper>
  )
}

export default UpcomingEvents;