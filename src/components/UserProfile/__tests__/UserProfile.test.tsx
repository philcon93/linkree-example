import { render } from '@testing-library/react';
import { UserProfile } from '../';
import { user01 } from '../../../store/data'

describe('UserProfile', () => {
    test('Displays correctly', () => {
        const { container, getByText } = render(
            <UserProfile profileImage={user01.profileImage} name={user01.name} username={user01.username}/>
        );

        expect(container).toMatchSnapshot();
        expect(getByText(`@${user01.username}`)).toBeInTheDocument();
        // doesn't like the alt attribute being on a span, so can't use getByAltText()
        expect(container.querySelector(`[alt="${user01.name}"]`)).toBeInTheDocument();
    });
});
