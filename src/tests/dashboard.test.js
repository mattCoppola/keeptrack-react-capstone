import React from 'react';
import { shallow, mount } from 'enzyme';
import { logOutUser } from '../actions';

import { Dashboard } from '../components/dashboard';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    });
});
