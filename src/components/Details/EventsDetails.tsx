import { Box } from '@chakra-ui/react';
import { ListItem, LinkFooter } from '../index';
import { EventLink } from '../../store/interfaces'

type Props = {
    events: EventLink[]
}

// @todo: format the title/event.date to be the following; 'Month Date Year', e.g 'Apr 01 2019'
export const EventsDetails: React.FC<Props> = ({ events } : Props) => {

  return (
    <Box data-testid={'EventsDetails'}>
      {events.map((event, index) => (
        <ListItem
            key={index}
            title={event.date}
            subtitle={event.location}
            onClick={() => window.open(event.url)}
            rightAlignText={event.remainingTickets > 0 ? '' : 'Sold out'} />
      ))}
      <LinkFooter />
    </Box>
  );
};
