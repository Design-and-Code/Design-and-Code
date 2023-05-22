import { Typography } from "@mui/material"
import { ContainedButton } from "~/components/common/Button"
import { HeaderSectionWrapper } from "../styles"
import Image from "next/image"

const HeaderSection = () => {
  return (
    <HeaderSectionWrapper>
      <Image src='/static/Group 181.png' alt="Logo" className={'image'} />
      <div className="event-header">
        <Typography variant="h2" gutterBottom className={'title'}>
          Our Events
        </Typography>
        <Typography variant="h6" gutterBottom className={'description'}>
          We host workshops, work/study sessions, community hangouts and more!
        </Typography>
        <ContainedButton
          className={'button'}
          href=""
          // target="_blank"
          size="large"
        >
          <Typography variant='subtitle2'>
            Host With Us
          </Typography>
        </ContainedButton>
      </div>

    </HeaderSectionWrapper>
  )
}

export default HeaderSection;