import { Grid, Typography } from "@mui/material"
import PastEventCard from "~/components/EventCard/PastEventCard"
import { EVENTS } from "~/lib/constants"
import { PastEventsWrapper } from "../styles"

const PastEvents = () => {
  return (
    <PastEventsWrapper>
      <Typography variant="h4" className={'subtitle'}>
        Past Events
      </Typography>
      <Grid
        container
        spacing={3}
        className={'pastEventBox'}
      >  
        {
          EVENTS.past.map((event, i)=>{
            return(

            <Grid item xs={12} sm={6} md={4} key={i}>
              <PastEventCard 
                {...event}
              />
            </Grid>
            )
          })
        }
      </Grid>


    </PastEventsWrapper>
  )
}

export default PastEvents;