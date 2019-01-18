import React from 'react';
import { shallow, mount } from 'enzyme';

import { WorkorderForm } from '../components/workorderform';
import { submitWorkOrder} from '../actions';
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

    it('Dispatches submitWorkOrder from WorkorderForm', () => {
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

      const dispatch = jest.fn;
      const authToken = 'someToken';
      const wrapper = mount(
        <WorkorderForm
          loggedIn={'something'}
          parts={parts}
          workorders={workorder}
          authToken={authToken}
          dispatch={dispatch}
        />
      );
      const activeInstance = wrapper.instance();
      activeInstance.submitWorkOrder(workorder, authToken);
      expect(dispatch).toHaveBeenCalledWith(submitWorkOrder(workorder, authToken));
    });
});
