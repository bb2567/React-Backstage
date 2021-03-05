import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextValidator from "../components/TextValidator";
import { ValidatorForm } from "react-form-validator-core";
import service from "../commons/Service";
import {SaveLoginUserInfo} from '../commons/Auth'
import "../scss/login.scss";
import {message}from "antd";

class Login2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "18911112222",
      password: "aicoder.com",
      code: "12345",
    };
  }

  changeCode(e) {
    e.target.src = "/api/code/?id=" + Date.now();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    service.userLogin(this.state).then((res) => {
      // console.log(res.data);
      let{ history } = this.props
      if(res.data.code === 1){
        // 儲存登入資料到 sessionStorage
        SaveLoginUserInfo(res.data.user);
        // 跳轉頁面
        history.push('/home')
      }else{
        message.error('登入失敗,請輸入正確的帳號及密碼');
      }
    });
  };
  render() {
    return (
      <div className="login-wrap">
        <nav className="login-nav">
          <Link className="logo" to="/">
            <img src="/images/logo.svg" alt="..." />
          </Link>
        </nav>
        <div className="login-bg">
          <ValidatorForm
            className="login-box"
            ref="form"
            onSubmit={this.handleSubmit}
          >
            <div className="input-group">
              <i class="fas fa-user"></i>
              <TextValidator
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="請輸入電話號碼"
                validators={["required", "matchRegexp:^[0-9a-zA-Z]{6,12}$"]}
                errorMessages={[
                  "請輸入使用者名稱",
                  "請輸入6-12個字元英文字母或數字",
                ]}
              />
            </div>
            <div className="input-group">
              <i class="fas fa-lock"></i>
              <TextValidator
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="請輸入密碼"
                validators={["required", "matchRegexp:^[0-9a-zA-Z.]{6,12}$"]}
                errorMessages={["請輸入密碼", "請輸入6-8個字元英文字母或數字"]}
              />
            </div>
            <div className="code-group input-group">
              <TextValidator
                type="text"
                name="code"
                className="code"
                placeholder="請輸入驗證碼"
                value={this.state.code}
                onChange={this.handleChange}
                validators={["required", "matchRegexp:^[0-9a-zA-Z]{5}$"]}
                errorMessages={["請輸入驗證碼", "驗證碼錯誤"]}
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
          </ValidatorForm>
        </div>
        <div className="login-ft">&copy;版權所有 SKIGO.com 2016-2022</div>
      </div>
    );
  }
}

export default Login2;
