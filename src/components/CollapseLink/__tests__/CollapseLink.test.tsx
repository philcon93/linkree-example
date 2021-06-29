import { fireEvent, render, waitFor } from '@testing-library/react';
import { CollapseLink } from '../';
import { eventsLinkData, musicLinkData } from '../../../store/data';

describe('CollapseLink', () => {
    test('Show eventsDetails', async () => {
        const { getByTestId, queryByTestId, queryAllByTestId } = render(
            <CollapseLink id={eventsLinkData.id} title={eventsLinkData.title} eventsDetails={eventsLinkData.eventsDetails}/>
        );


        expect(queryByTestId('EventsDetails')).not.toBeInTheDocument();

        fireEvent.click(getByTestId('CollapseLink'));
        await waitFor (() => expect(queryByTestId('EventsDetails')).toBeInTheDocument());
        expect(queryAllByTestId('ListItem').length).toBe(4);
    });

    test('Shows musicDetails', async () => {
        const { getByTestId, queryByTestId, queryAllByTestId } = render(
            <CollapseLink id={musicLinkData.id} title={musicLinkData.title} musicDetails={musicLinkData.musicDetails} />
        );

        expect(queryByTestId('MusicDetails')).not.toBeInTheDocument();

        fireEvent.click(getByTestId('CollapseLink'));
        await waitFor (() => expect(queryByTestId('MusicDetails')).toBeInTheDocument());
        expect(queryAllByTestId('ListItem').length).toBe(4);
    });
});
