import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMessage: '',
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

  submitForm = async event => {
    const {history} = this.props

    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      Cookies.set('nxtWatch_token', data.jwt_token, {expires: 30})
      //   console.log(data)
      history.replace('/')
    } else {
      this.setState({showErrorMessage: true, errorMessage: data.error_msg})
      //   console.log(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMessage,
      errorMessage,
    } = this.state
    // console.log(showPassword)

    const token = Cookies.get('nxtWatch_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="light-logo"
            className="nxtwatch-logo"
          />
          <div className="input-container">
            <label className="label-text" htmlFor="username">
              USERNAME
            </label>
            <input
              value={username}
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUserName}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="password">
              PASSWORD
            </label>
            <input
              value={password}
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={this.onChangePassword}
              className="input-field"
            />
          </div>
          <div>
            <input
              onClick={this.onCheckShowPassword}
              type="checkbox"
              id="showPassword"
            />
            <label className="label-text" htmlFor="showPassword">
              Show Password
            </label>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          {showErrorMessage ? (
            <p className="error-message">{errorMessage}</p>
          ) : null}
        </form>
      </div>
    )
  }
}

export default Login
