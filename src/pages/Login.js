import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/login.scss";

class Login2 extends Component {
  changeCode(e) {
    e.target.src = "/api/code/?id=" + Date.now();
  }
  render() {
    return (
      <div className="login-wrap">
        <nav className="login-nav">
          <Link className="logo" to="/">
            <img src="/images/logo.svg" alt="..." />
          </Link>
        </nav>
        <div className="login-bg">
          <div className="login-box">
            <div className="input-group">
              <i class="fas fa-user"></i>
              <input type="text" id="" placeholder="請輸入電話號碼" />
            </div>
            <div className="input-group">
              <i class="fas fa-lock"></i>
              <input type="password" id="" placeholder="請輸入密碼" />
            </div>
            <div className="code-group input-group">
              <input
                type="text"
                id=""
                className="code"
                placeholder="請輸入驗證碼"
              />
              <div className="code-img">
                <img
                  onClick={(e) => {
                    this.changeCode(e);
                  }}
                  src="/api/code"
                  alt="..."
                />
              </div>
            </div>
            <div className="login-btn-group">
              <button className="login-btn">登入</button>
              <a href="/" className="link-btn">
                忘記密碼?
              </a>
            </div>
            <hr />
            <div className="login-reg">
              <span>新朋友？</span>
              <a href="/">註冊</a>
            </div>
          </div>
        </div>
        <div className="login-ft">&copy;版權所有 SKIGO.com 2016-2022</div>
      </div>
    );
  }
}

export default Login2;
