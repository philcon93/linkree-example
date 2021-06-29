import { render } from '@testing-library/react';
import { ClassicLink } from '../';

describe('ClassicLink', () => {
    test('Displays correctly', () => {
        const { container, getByText } = render(
            <ClassicLink title={'title text'} />
        );

        expect(container).toMatchSnapshot();
        expect(getByText('title text')).toBeInTheDocument();
    });
});
