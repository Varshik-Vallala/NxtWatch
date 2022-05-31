import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'

import './index.css'

import {withRouter, Link} from 'react-router-dom'

import NxtWatchContext from '../../context/nxtWatchContext'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {onChangeDarkTheme, darkTheme} = value

      const onClickDarkTheme = () => {
        onChangeDarkTheme()
      }

      const {history} = props

      const onClickLogout = () => {
        Cookies.remove('nxtWatch_token')
        history.replace('/login')
      }

      return (
        <nav className={darkTheme ? 'navbar dark' : 'navbar'}>
          <div>
            <Link to="/">
              <img
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
                className="nxtwatch-logo"
              />
            </Link>
          </div>
          <div className="navbar-options-container">
            <button className="theme-button" data-testid="theme" type="button">
              <img
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                }
                alt="dark-logo"
                className="dark-light-theme"
                onClick={onClickDarkTheme}
              />
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
              className="profile-image"
            />
            <Popup
              modal
              trigger={
                <button
                  type="button"
                  className={
                    darkTheme ? 'logout-button light' : 'logout-button'
                  }
                >
                  Logout
                </button>
              }
            >
              {close => (
                <div className={darkTheme ? 'dark-popup' : ''}>
                  <div>
                    <p className={darkTheme ? 'white' : null}>
                      Are you sure, you want to logout?
                    </p>
                  </div>
                  <div className="buttons-container">
                    <button
                      type="button"
                      className={darkTheme ? 'white-button' : 'cancel-button'}
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      className="confirm-button"
                      onClick={onClickLogout}
                      type="button"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </nav>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
