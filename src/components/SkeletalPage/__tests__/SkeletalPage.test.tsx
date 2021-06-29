import { render } from '@testing-library/react';
import { SkeletalPage } from '../';

describe('SkeletalPage', () => {
    test('Displays correctly', () => {
        const { container } = render(
            <SkeletalPage />
        );

        expect(container).toMatchSnapshot();
    });
});
