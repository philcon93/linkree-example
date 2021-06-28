import { fireEvent, render } from '@testing-library/react';
import { ListItem } from '../';

describe('ListItem', () => {
    test('Required props work correctly', () => {
        const mockOnClick = jest.fn();

        const { container, getByText, getByTestId } = render(
            <ListItem title={'title text'} onClick={mockOnClick}/>
        );

        expect(container).toMatchSnapshot();
        expect(getByText('title text')).toBeInTheDocument();

        fireEvent.click(getByTestId('ListItem'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
