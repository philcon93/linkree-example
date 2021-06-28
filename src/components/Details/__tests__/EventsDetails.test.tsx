import { render } from '@testing-library/react';
import { EventsDetails } from '../';
import { eventsLinkData } from '../../../store/data';

describe('EventsDetails', () => {
    test('Displays correct amount of ListItems', () => {
        const { queryAllByTestId } = render(
            <EventsDetails events={eventsLinkData.eventsDetails}/>
        );

        expect(queryAllByTestId('ListItem').length).toBe(4);
    });

    test('Displays correct amount of ListItems', () => {
        const { getByText } = render(
            <EventsDetails events={[eventsLinkData.eventsDetails[1]]}/>
        );

        expect(getByText('02/04/2019')).toBeInTheDocument();
        expect(getByText('Venue Name, Canberra')).toBeInTheDocument();
        expect(getByText('Sold out')).toBeInTheDocument();
    });
});
