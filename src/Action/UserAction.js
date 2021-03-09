import ActionTypes from "./ActionTypes";
import service from "../commons/Service";

export function LoadUserAction(payload) {
  return {
    type: ActionTypes.LOAD_USER_LIST,
    payload,
  };
}
// redux-thunk
export function ActionTypesAsync(params) {
  return (dispatch) => {
    return service.loadUserList().then((res) => {
      dispatch(LoadUserAction(res.data));
    });
  };
};