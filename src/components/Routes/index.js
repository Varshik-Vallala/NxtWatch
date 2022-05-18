import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/nxtWatchContext'

import RouteItem from '../RouteItem'

import {RoutesList} from './styledComponents'

import './index.css'

const routes = [
  {
    id: 'HOME',
    displayText: 'Home',
    link: '/',
    icon: <AiFillHome className="link-icon" />,
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    link: '/trending',
    icon: <AiFillFire className="link-icon" />,
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    link: '/gaming',
    icon: <SiYoutubegaming className="link-icon" />,
  },
  {
    id: 'SAVEDVIDEOS',
    displayText: 'SavedVideos',
    link: '/saved-videos',
    icon: <BiListPlus className="link-icon" />,
  },
]

class Routes extends Component {
  state = {
    activeRoute: routes[0].id,
  }

  onChangeActiveRoute = id => {
    this.setState({activeRoute: id})
  }

  render() {
    const {activeRoute} = this.state

    // console.log(activeRoute)

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <div
              className={
                darkTheme ? 'side-navbar dark-side-navbar' : 'side-navbar'
              }
            >
              {/* {darkTheme ? 'side-navbar dark-side-navbar' : 'side-navbar'} */}
              <RoutesList>
                {routes.map(eachRoute => (
                  <RouteItem
                    darkTheme={darkTheme}
                    key={eachRoute.id}
                    routeDetails={eachRoute}
                    active={eachRoute.id === activeRoute}
                    changeRoute={this.onChangeActiveRoute}
                  />
                ))}

                {/* <Link className="route-link" to="/">
              <li className="link-item">
                <div className="link">
                  <AiFillHome className="link-icon" />
                  <LinkName darkTheme={darkTheme} className="link-name">
                    Home
                  </LinkName>
                </div>
              </li>
            </Link>
            <Link className="route-link" to="/trending">
              <li className="link-item">
                <div className="link">
                  <AiFillFire className="link-icon" />
                  <p className="link-name">Trending</p>
                </div>
              </li>
            </Link>
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
            </li> */}
              </RoutesList>
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
  }
}
export default Routes
