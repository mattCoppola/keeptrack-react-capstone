import {
  REQUEST,
  request,
  SIGNUP_USER,
  loggedIn,
  LOGIN_USER,
  loginUser,
  LOGOUT_USER,
  logOutUser,
  RETRIEVE_WORKORDERS,
  displayWorkOrders,
  RETRIEVE_INVENTORY,
  displayInventory,
  AUTH_REQUEST,
  authRequest,
  SET_AUTH_TOKEN,
  setAuthToken,
  AUTH_SUCCESS,
  authSuccess,
  ERROR,
  fetchErr
} from '../actions/index';

describe ('request', () => {
  it('Should return the action', () => {
    const action = request();
    expect(action.type).toEqual(REQUEST);
  });
});

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

describe ('logOutUser', () => {
  it('Should return the action', () => {
    const action = logOutUser();
    expect(action.type).toEqual(LOGOUT_USER);
  });
});

describe ('displayWorkOrders', () => {
  it('Should return the action', () => {
    const results = {name: 'name', caseNumber: '12345'};
    const action = displayWorkOrders(results);
    expect(action.type).toEqual(RETRIEVE_WORKORDERS);
    expect(action.results).toEqual(results);
  });
});

describe ('displayInventory', () => {
  it('Should return the action', () => {
    const results = 'Inventory Item';
    const action = displayInventory(results);
    expect(action.type).toEqual(RETRIEVE_INVENTORY);
    expect(action.results).toEqual(results);
  });
});

describe ('authRequest', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe ('setAuthToken', () => {
  it('Should return the action', () => {
    const authToken = 'token';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe ('authSuccess', () => {
  it('Should return the action', () => {
    const currentUser = 'user';
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe ('fetchErr', () => {
  it('Should return the action', () => {
    const err = 'err';
    const action = fetchErr(err);
    expect(action.type).toEqual(ERROR);
    expect(action.err).toEqual(err);
  });
});
