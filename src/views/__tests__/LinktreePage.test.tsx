import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinktreePage } from '../';
import { fakeFetchData } from '../../store/utilities';
import { responseData } from '../../store/data';

jest.mock('../../store/utilities');

describe('LinktreePage', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let container: any = null;

    beforeEach(async () => {
        const mockFetchData = fakeFetchData as jest.Mock;

        mockFetchData.mockResolvedValue(responseData);

        act(() => {
            container = render(<Router><LinktreePage /></Router>);
        });

        await waitFor(() => expect(container.queryByText('@goat')).toBeInTheDocument());
    });

    test('When a user clicks on the Shows List Link, a list of X shows are visible', async () => {
        expect(container.queryByTestId('EventsDetails')).not.toBeInTheDocument();

        fireEvent.click(container.getByText('Shows'));
        await waitFor (() => expect(container.getByTestId('EventsDetails')).toBeInTheDocument());
        expect(container.queryAllByTestId('ListItem').length).toBe(4);
    });

    test('When a user clicks on a Music Player Link, the Spotify streaming platform is visible', async () => {
        expect(container.queryByTestId('MusicDetails')).not.toBeInTheDocument();

        fireEvent.click(container.getByText('Music'));
        await waitFor (() => expect(container.getByTestId('MusicDetails')).toBeInTheDocument());
        expect(container.getByText('Spotify')).toBeInTheDocument();
    });

    test('When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes', async () => {
        fireEvent.click(container.getByText('Music'));

        await waitFor (() => expect(container.getByTestId('MusicDetails')).toBeInTheDocument());
        await waitFor (() => expect(container.queryByTestId('EventsDetails')).not.toBeInTheDocument());

        fireEvent.click(container.getByText('Shows'));

        await waitFor (() => expect(container.getByTestId('EventsDetails')).toBeInTheDocument());
        await waitFor (() => expect(container.queryByTestId('MusicDetails')).not.toBeInTheDocument())
    });
});
