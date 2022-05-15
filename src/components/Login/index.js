import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {username, password, showPassword} = this.state
    // console.log(showPassword)

    return (
      <div className="login-form-container">
        <form className="login-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="light-logo"
            className="nxtwatch-logo"
          />
          <div>
            <label htmlFor="username">USERNAME</label>
            <input
              value={username}
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              value={password}
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>
          <div>
            <input
              onClick={this.onCheckShowPassword}
              type="checkbox"
              id="showPassword"
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
