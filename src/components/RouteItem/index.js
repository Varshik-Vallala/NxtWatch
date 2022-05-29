import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/nxtWatchContext'

import {LinkName, LinkItemContainer, LinkItem} from './styledComponents'

const RouteItem = props => {
  const {routeDetails, active, darkTheme} = props

  const {link, icon, id, displayText, activeIcon, darkThemeIcon} = routeDetails

  //   const showIcon = active ? {activeIcon} : {icon}

  //   const showIcon = () => {
  //     if (active) {
  //       return activeIcon
  //     }
  //     return icon
  //   }

  //   console.log(showIcon)

  //   console.log(icon)
  //   console.log(activeIcon)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {onChangeActiveRoute} = value

        const changeActiveRoute = () => {
          onChangeActiveRoute(id)
        }

        const renderDarkIcons = () => {
          if (active) {
            return activeIcon
          }
          return darkThemeIcon
        }

        const renderIcons = () => {
          if (active) {
            return activeIcon
          }
          return icon
        }

        return (
          <Link to={`${link}`} className="route-link">
            <LinkItem
              onClick={changeActiveRoute}
              active={active}
              darkTheme={darkTheme}
            >
              <LinkItemContainer>
                {/* {showIcon()} we should not use {icon} <- like this use like this -> icon for */}
                {/* {darkTheme && active ? activeIcon : darkThemeIcon}
                {active ? activeIcon : icon} */}
                {darkTheme ? renderDarkIcons() : renderIcons()}

                {/* {darkTheme
                  ? active
                    ? activeIcon
                    : darkThemeIcon
                  : active
                  ? activeIcon
                  : icon} */}

                <LinkName
                  active={active}
                  darkTheme={darkTheme}
                  className="link-name"
                >
                  {displayText}
                </LinkName>
              </LinkItemContainer>
            </LinkItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default RouteItem
