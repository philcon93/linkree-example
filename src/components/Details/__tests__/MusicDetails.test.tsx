import { fireEvent, render } from '@testing-library/react';
import { MusicDetails } from '../';
import { musicLinkData } from '../../../store/data';

describe('MusicDetails', () => {
    test('Displays correct amount of ListItems', () => {
        const { queryAllByTestId } = render(
            <MusicDetails musicDetails={musicLinkData.musicDetails}/>
        );

        expect(queryAllByTestId('ListItem').length).toBe(4);
    });

    test('Shows music player on click', () => {
        const { getByTestId, queryByTestId, getAllByTestId } = render(
            <MusicDetails musicDetails={musicLinkData.musicDetails}/>
        );

        expect(queryByTestId('MusicPlayer')).not.toBeInTheDocument();
        fireEvent.click(getAllByTestId('ListItem')[0]);
        expect(getByTestId('MusicPlayer')).toBeInTheDocument();
    });
});
