import jwtDecode from "jwt-decode";
import { API_ORIGIN } from "../config";

// DELETE LEARN_MORE & BACK_TO_TOP - THESE ARE TESTS...
export const LEARN_MORE = 'LEARN_MORE';
export const learnMore = () => ({
    type: LEARN_MORE
});

export const BACK_TO_TOP = 'BACK_TO_TOP';
export const backToTop = () => ({
   type: BACK_TO_TOP
});

export const REQUEST = 'REQUEST';
export const request = () => ({
    type: REQUEST
});

///////////////////////
// SIGNUP A NEW USER //
///////////////////////
//
export const SIGNUP_USER = 'SIGNUP_USER';
export const loggedIn = () => ({
   type: SIGNUP_USER,
});

//////////////////
// LOGIN A USER //
//////////////////

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = user => ({
    type: LOGIN_USER,
    user
});

////////////////////////////////
// LOGOUT USER FROM DASHBOARD //
////////////////////////////////

export const LOGOUT_USER = 'LOGOUT_USER';
export const logOutUser = () => ({
    type: LOGOUT_USER,
})

////////////////////////
// SUBMIT A WORKORDER //
////////////////////////

export const SUBMIT_WORKORDER = 'SUBMIT_WORKORDER';
//export const submitWorkOrder = workorder => ({
//    type: SUBMIT_WORKORDER,
//    workorder
//});

export const RETRIEVE_WORKORDERS = 'RETRIEVE_WORKORDERS';
export const displayWorkOrders = results => ({
    type: RETRIEVE_WORKORDERS,
    results
});

export const RETRIEVE_INVENTORY = 'RETRIEVE_INVENTORY';
export const displayInventory = results => ({
    type: RETRIEVE_INVENTORY,
    results
});

////////////////////////
// SUBTRACT INVENTORY //
////////////////////////

// export const SUBTRACT_INVENTORY = 'SUBTRACT_INVENTORY';
// export const subtractInventory = partKey => ({
//     type: SUBTRACT_INVENTORY,
//     partKey
// });

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const ERROR = 'ERROR';
export const fetchErr = err => ({
  type: ERROR,
  err
});


const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken));
};


export const login = user => dispatch => {
  dispatch(request());
  fetch(`${API_ORIGIN}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
//    mode: 'no-cors',
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
//    .then(authToken => console.log(authToken.authToken))
    .then(authToken => storeAuthInfo(authToken.authToken, dispatch))
    .catch(err => {
      dispatch(fetchErr(err));
    });
};

export const signupUser = user => dispatch => {
    dispatch(request());
    // let newUser = user;
    // let loginuser = {
    //   username: user.username,
    //   password: user.password
    // }
    // console.log(loginuser);
    fetch(`${API_ORIGIN}/api/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
        if (!res.ok) {
            alert("Username already taken. Please choose another.")
            return Promise.reject(res.statusText);
        } else {
          alert("Signup Success!  You can Login Now")
          dispatch(loggedIn())
        }
        return res.json();
    })
        .catch(err => {
        dispatch(fetchErr(err));
    });
};

export const submitWorkOrder = (workorder, token) => dispatch => {
    dispatch(request());
    // console.log(workorder);
    let authToken = ("bearer " + token)
    fetch(`${API_ORIGIN}/api/auth/dashboard`, {
        method: "POST",
        headers: {
            'Authorization': authToken,
            "content-type": "application/json"
        },
        body: JSON.stringify(workorder)
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(dispatch(retrieveWorkOrders(token)))
        .catch(err => {
        dispatch(fetchErr(err));
    });
};

export const retrieveWorkOrders = (token) => dispatch => {
    let authToken = ("bearer " + token)
    fetch(`${API_ORIGIN}/api/auth/dashboard`, {
        mode: "cors",
        headers: {
            'Authorization': authToken,
            "content-type": "application/json"
        }
    })
        .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
        .then(res => dispatch(displayWorkOrders(res)))
};

export const deleteWorkOrder = (id, token) => dispatch =>  {
    dispatch(request)
    // console.log('Deleting ', id)
    let authToken = ("bearer " + token)
    fetch(`${API_ORIGIN}/api/auth/workorder/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        'Authorization': authToken,
        "content-type": "application/json"
      },
      body: JSON.stringify({id: id})
    })
      .then(dispatch(retrieveWorkOrders(token)))
      .catch(err => {
        console.log(err);
      });
};

export const retrieveInventory = (inventory, token) => dispatch => {
    let authToken = ("bearer " + token);
    fetch(`${API_ORIGIN}/api/auth/inventory`, {
        mode: "cors",
        headers: {
            'Authorization': authToken,
            "content-type": "application/json"
        }
    })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(res => dispatch(displayInventory(res)))
};

export const subtractInventory = (id, token) => dispatch => {
let authToken = ("bearer " + token);
  fetch(`${API_ORIGIN}/api/auth/inventory/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      'Authorization': authToken,
      "content-type": "application/json"
    },
    body: JSON.stringify({id: id})
  })
    .then(res => dispatch(retrieveInventory(res, token)))
    .catch(err => {
      console.log(err);
    });
}
