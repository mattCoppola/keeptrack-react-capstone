import  {
  SIGNUP_USER,
  loggedIn,
  LOGIN_USER,
  loginUser,
  LOGOUT_USER,
  logOutUser,
  SET_AUTH_TOKEN,
  setAuthToken,
  RETRIEVE_WORKORDERS,
  displayWorkOrders,
  RETRIEVE_INVENTORY,
  displayInventory,
  AUTH_SUCCESS,
  authSuccess
} from "../actions";
import reducer from "../reducers";

describe('SIGNUP_USER', () => {
  it('Should signup user', () => {
    let state ={
      signedUp: false
    };
    state = reducer(state, loggedIn());
    expect(state).toEqual({
      signedUp: true
    });
  });
});

describe('LOGIN_USER', () => {
  it('Should login user', () => {
    const user = 'User Info';

    let state ={
      user: null
    };
    state = reducer(state, loginUser(user));
    expect(state).toEqual({
      user: user
    });
  });
});

describe('SET_AUTH_TOKEN', () => {
  it('Should set authToken', () => {
    const authToken = 'Some Authtoken'

    let state ={
      authToken: '',
      loading: true
    };
    state = reducer(state, setAuthToken(authToken));
    expect(state).toEqual({
      authToken: 'Some Authtoken',
      loading: false
    });
  });
});

describe('AUTH_SUCCESS', () => {
  it('Should set Auth Success', () => {
    const currentUser = {
      user: {username: 'UserName', _id: 'SomeID'}
    }

    let state ={
      loading: true,
      user: '',
      userID: '',
      loggedIn: false
    };
    state = reducer(state, authSuccess(currentUser));
    expect(state).toEqual({
      loading: false,
      user: currentUser.user.username,
      userID: currentUser.user._id,
      loggedIn: true
    });
  });
});

describe('LOGOUT_USER', () => {
  it('Should logout user', () => {
    let state ={
      authToken: 'someToken',
      user: 'User Info',
      userID: 'UserID Info',
      loggedIn: true,
      signedUp: true
    };
    state = reducer(state, logOutUser());
    expect(state).toEqual({
      authToken: '',
      user: null,
      userID: '',
      loggedIn: false,
      signedUp: false
    });
  });
});

describe('RETRIEVE_WORKORDERS', () => {
  it('Should retrieve workorders', () => {
    const results = {
      resultsOutput: [
        {name: 'name', number: 'number'},
        {name: 'name1', number: 'number2'}
      ]};

    let state ={
      workorders: []
    };
    state = reducer(state, displayWorkOrders(results));
    expect(state).toEqual({
      workorders: results.resultsOutput
    });
  });
});

describe('RETRIEVE_INVENTORY', () => {
  it('Should retrieve inventory', () => {
    const results = {
      inventoryItems: [
        {name: 'name', number: 'number'},
        {name: 'name1', number: 'number2'}
      ]};

    let state ={
      inventory: []
    };
    state = reducer(state, displayInventory(results));
    expect(state).toEqual({
      inventory: results.inventoryItems
    });
  });
});
