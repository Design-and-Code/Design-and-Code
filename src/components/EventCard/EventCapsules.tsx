import { EventsCapsuleWrapper } from "./styles"

interface IEventCapsulesProps {
  svg: JSX.Element,
  text: string,
}

const EventCapsules: React.FC<IEventCapsulesProps> = (props) => {
  return (
    <EventsCapsuleWrapper>
      <div className={'svg'}>
        {props.svg}
      </div>
      {props.text}
    </EventsCapsuleWrapper>
  )
}

export default EventCapsules