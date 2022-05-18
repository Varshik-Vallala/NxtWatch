import {Link} from 'react-router-dom'

import {LinkName, LinkItemContainer, LinkItem} from './styledComponents'

const RouteItem = props => {
  const {routeDetails, active, changeRoute, darkTheme} = props

  const {link, icon, id, displayText} = routeDetails

  console.log(link)

  const changeActiveRoute = () => {
    changeRoute(id)
    console.log(id)
  }

  return (
    <Link to={`${link}`} className="route-link">
      <LinkItem
        onClick={changeActiveRoute}
        active={active}
        className="link-item"
      >
        <LinkItemContainer darkTheme={darkTheme}>
          {icon}
          <LinkName darkTheme={darkTheme} className="link-name">
            {displayText}
          </LinkName>
        </LinkItemContainer>
      </LinkItem>
    </Link>
  )
}

export default RouteItem
