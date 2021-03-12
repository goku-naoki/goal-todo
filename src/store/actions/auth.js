import * as actions from "./actions";
import { auth, db } from "../../firebase";

export const authStart = () => {
  return {
    type: actions.AUTH_START,
  };
};

export const authSuccess = (email, uid) => {
  return {
    type: actions.AUTH_SUCCESS,
    email: email,
    uid: uid,
  };
};

export const authInit = (email, password, isSignup) => {
  return async (dispatch) => {
    dispatch(authStart());

    if (isSignup) {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          let ref = db.ref("/users/");
          ref.push({
            email: res.user.email,
            uid: res.user.uid,
          });
          return res;
        })
        .then((res) => {
          dispatch(authSuccess(res.user.email, res.user.uid));
        });
    } else {
      await auth.signInWithEmailAndPassword(email, password).then((res) => {
        dispatch(authSuccess(res.user.email, res.user.uid));
      });
    }
  };
};
