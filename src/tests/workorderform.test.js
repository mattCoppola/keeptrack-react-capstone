import React from 'react';
import { shallow } from 'enzyme';

import { WorkorderForm } from '../components/workorderform';
    const workorder =[
      {
        username: 'name',
        caseNumber: 'SO89999',
        customerName: 'name',
        serialNumber: 'SN999999',
        partReplaced: 'mainboard',
        notes: 'notes here',
        dateCreated: Date.now()
      }
    ];

    const parts = [
      {
        _id: 123456,
        partNumber: 'mainboard'
      }
    ];

    const dispatch = jest.fn();

    const props = {
      workorder,
      parts,
      dispatch
    }

describe('<WorkorderForm />', () => {
    it('Renders without crashing', () => {
        shallow(<WorkorderForm {...props} />);
    });
});
