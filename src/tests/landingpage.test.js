import React from 'react';
import { shallow } from 'enzyme';

import Landing from '../components/landingpage';

describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
    });
});
