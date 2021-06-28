import { render } from '@testing-library/react';
import { MusicDetails } from '../';
import { musicLinkData } from '../../../store/data';

describe('MusicDetails', () => {
    test('Displays correct amount of ListItems', () => {
        const { queryAllByTestId } = render(
            <MusicDetails musicDetails={musicLinkData.musicDetails}/>
        );

        expect(queryAllByTestId('ListItem').length).toBe(4);
    });

    // test.skip('Displays correct amount of ListItems', () => {
    //     const { getByText } = render(
    //         <EventsDetails musicDetails={musicLinkData}/>
    //     );

    //     expect(getByText('02/04/2019')).toBeInTheDocument();
    //     expect(getByText('Venue Name, Canberra')).toBeInTheDocument();
    //     expect(getByText('Sold out')).toBeInTheDocument();
    // });
});
