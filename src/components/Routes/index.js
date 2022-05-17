import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/nxtWatchContext'

import './index.css'

// const routes = [
//   {
//     id: 'HOME',
//     displayText: 'Home',
//   },
//   {
//     id: 'TRENDING',
//     displayText: 'Trending',
//   },
//   {
//     id: 'GAMING',
//     displayText: 'Gaming',
//   },
//   {
//     id: 'SAVEDVIDEOS',
//     displayText: 'SavedVideos',
//   },
// ]

const Routes = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <div
          className={darkTheme ? 'side-navbar dark-side-navbar' : 'side-navbar'}
        >
          <ul className="routes-list">
            <li className="link-item">
              <div className="link">
                <AiFillHome className="link-icon" />
                <p className="link-name">Home</p>
              </div>
            </li>
            <li className="link-item">
              <div className="link">
                <AiFillFire className="link-icon" />
                <p className="link-name">Trending</p>
              </div>
            </li>
            <li className="link-item">
              <div className="link">
                <SiYoutubegaming className="link-icon" />
                <p className="link-name">Gaming</p>
              </div>
            </li>
            <li className="link-item">
              <div className="link">
                <BiListPlus className="link-icon" />
                <p className="link-name">Saved videos</p>
              </div>
            </li>
          </ul>
          <div className="side-bar-footer">
            <h4>CONTACT US</h4>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="social-media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="social-media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linkedIn logo"
                className="social-media-logo"
              />
            </div>
            <p>Enjoy! Now to see your channels nd recommendations!</p>
          </div>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default Routes
