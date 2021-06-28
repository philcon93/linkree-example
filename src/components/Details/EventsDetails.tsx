import { ListItem, LinkFooter } from '../index';
import { EventLink } from '../../store/interfaces'

type Props = {
    events: EventLink[]
}

export const EventsDetails: React.FC<Props> = ({ events } : Props) => {

  return (
    <>
    {events.map((event, index) => (
        <ListItem
            key={index}
            title={event.date}
            subtitle={event.location}
            onClick={() => window.open(event.url)}
            rightAlignText={event.remainingTickets > 0 ? '' : 'Sold out'} />
        ))}
        <LinkFooter />
    </>
  );
};
