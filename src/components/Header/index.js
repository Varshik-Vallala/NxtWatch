import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

import {withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/nxtWatchContext'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {onChangeDarkTheme, darkTheme} = value

      const onClickDarkTheme = () => {
        onChangeDarkTheme()
      }

      const popUpContainer = () => (
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Trigger
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <p>React is a popular and widely used programming language</p>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      )

      return (
        <nav className={darkTheme ? 'navbar dark' : 'navbar'}>
          <div>
            <img
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="light-logo"
              className="nxtwatch-logo"
            />
          </div>
          <div className="navbar-options-container">
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
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
              className="profile-image"
            />
            <button
              type="button"
              className={darkTheme ? 'logout-button light' : 'logout-button'}
              onClick={popUpContainer}
            >
              Logout
            </button>
          </div>
        </nav>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
