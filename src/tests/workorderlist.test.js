import React from 'react';
import { shallow } from 'enzyme';

import { WorkorderList } from '../components/workorderlist';

describe('<WorkorderList />', () => {
    const results = [
      {
        _id: 123456,
        username: 'name',
        customerName: 'customer',
        created: 'May',
        caseNumber: 'CS99999',
        qty: 100
      }
    ];

    const retrieveWorkOrders = jest.fn();

    const props = {
      results,
      retrieveWorkOrders
    }

    it('Renders without crashing', () => {
        shallow(<WorkorderList {...props} />);
    });
});
