import * as actions from "../actions/actions";

const initialState = {
  uid: null,
  email: null,
  isAuth: false,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.email,
        uid: action.uid,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default reducer;
