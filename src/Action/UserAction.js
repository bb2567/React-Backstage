import ActionTypes from "./ActionTypes";
import service from "../commons/Service";

export function LoadUserAction(payload) {
  return {
    type: ActionTypes.LOAD_USER_LIST,
    payload,
  };
}
// redux-thunk
export function LoadUserAsync(params) {
  return (dispatch) => {
    return service.loadUserList(params).then((res) => {
      let total = parseInt(res.headers['x-total-count']); 
      dispatch(LoadUserAction({list:res.data, total:total}));
    });
  };
};