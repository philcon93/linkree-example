import { render } from '@testing-library/react';
import { MusicDetails } from '../';
import { musicLinkData } from '../../../store/data';

describe('MusicDetails', () => {
    test('Displays correct amount of ListItems', () => {
        const { getByTestId, queryAllByTestId } = render(
            <MusicDetails musicDetails={musicLinkData.musicDetails}/>
        );

        expect(getByTestId('MusicPlayer')).toBeInTheDocument();
        expect(queryAllByTestId('ListItem').length).toBe(4);
    });
});
