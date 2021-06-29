import { render } from '@testing-library/react';
import { PageFooter } from '../';

describe('PageFooter', () => {
    test('Displays correctly', () => {
        const { container } = render(
            <PageFooter />
        );

        expect(container).toMatchSnapshot();
    });
});
