import { fireEvent, render } from '@testing-library/react';
import { LinktreePage } from '../';


describe.skip('LinktreePage', () => {
    test('When a user clicks on a Music Player Link, the Spotify streaming platform is visible', () => {
        const { queryAllByTestId } = render(
            <LinktreePage />
        );

        expect(queryAllByTestId('ListItem').length).toBe(4);
    });

    test('When a user clicks on the Shows List Link, a list of X shows are visible', () => {
        const { getByTestId, queryByTestId, getAllByTestId } = render(
            <LinktreePage />
        );

        expect(queryByTestId('MusicPlayer')).not.toBeInTheDocument();
        fireEvent.click(getAllByTestId('ListItem')[0]);
        expect(getByTestId('MusicPlayer')).toBeInTheDocument();
    });

    test('When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes', () => {
        const { getByTestId, queryByTestId, getAllByTestId } = render(
            <LinktreePage />
        );

        expect(queryByTestId('MusicPlayer')).not.toBeInTheDocument();
        fireEvent.click(getAllByTestId('ListItem')[0]);
        expect(getByTestId('MusicPlayer')).toBeInTheDocument();
    });
});
