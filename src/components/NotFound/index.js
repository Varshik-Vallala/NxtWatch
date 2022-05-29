import NxtWatchContext from '../../context/nxtWatchContext'

import {
  NotFoundContainer,
  Heading,
  NotFoundImage,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const bgColor = darkTheme ? '#0f0f0f' : '#f4f4f4'

      return (
        <NotFoundContainer bgColor={bgColor}>
          {darkTheme ? (
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
              alt="not-found-dark"
            />
          ) : (
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not-found-light"
            />
          )}
          <Heading darkTheme={darkTheme}>Page Not Found</Heading>
          <Paragraph darkTheme={darkTheme}>
            We are sorry, the page you requested cold not be found.
          </Paragraph>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
