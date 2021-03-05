// 用戶 sessionStorage 的 key 
const Login_User = "Login_User" 

/**
 * 驗證登入資料
 * @param {Object} user 
 * @return {Boolean} 登入狀態：true / false
 */

export function AuthLogin() {
  // sessionStorage
  let loginUserStr = sessionStorage.getItem(Login_User);
  if (loginUserStr) {
    return true;
  }
  return false;
}

/**
 * 保存用戶登入資料
 * @param {Object} user 
 * @return undefined
 */
export function SaveLoginUserInfo(user){
  
 sessionStorage.setItem(Login_User,JSON.stringify(user))
}