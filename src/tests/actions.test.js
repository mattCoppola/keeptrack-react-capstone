// import {ADD_LIST, addList, ADD_CARD, addCard} from './index';
//
// describe('addList', () => {
//     it('Should return the action', () => {
//         const title = 'List title';
//         const action = addList(title);
//         expect(action.type).toEqual(ADD_LIST);
//         expect(action.title).toEqual(title);
//     });
// });
//
// describe('addCard', () => {
//     it('Should return the action', () => {
//         const text = 'Card text';
//         const listIndex = 10;
//         const action = addCard(text, listIndex);
//         expect(action.type).toEqual(ADD_CARD);
//         expect(action.text).toEqual(text);
//         expect(action.listIndex).toEqual(listIndex);
//     });
// });

import { SIGNUP_USER, loggedIn, LOGIN_USER, loginUser } from '../actions/index';

describe ('signupUser', () => {
  it('Should return the action', () => {
    const action = loggedIn();
    expect(action.type).toEqual(SIGNUP_USER);
  });
});

describe ('loginUser', () => {
  it('Should return the action', () => {
    const user = 'user';
    const action = loginUser(user);
    expect(action.type).toEqual(LOGIN_USER);
    expect(action.user).toEqual(user);
  });
});
