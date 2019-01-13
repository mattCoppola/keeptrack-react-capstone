import React from 'react';
import { shallow } from 'enzyme';

import { InventoryList } from '../components/inventorylist';

describe('<InventoryList />', () => {
    const inventory = [
      {
      _id: '123456',
      partNumber: 'mainboard',
      cost: 100,
      price: 100,
      qty: 100
      }
    ];

    const dispatch = jest.fn();

    const props = {
      inventory,
      dispatch
    }

    it('Renders without crashing', () => {
        shallow(<InventoryList {...props} />);
    });
});
