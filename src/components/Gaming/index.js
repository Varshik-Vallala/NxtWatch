import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../Header'

import Routes from '../Routes'

import {
  PageHeading,
  PageIcon,
  Heading,
  SavedVideosContainer,
  SavedVideosListContainer,
  SavedVideoThumbNail,
  SavedVideoHeading,
  //   SavedVideoChannelName,
} from '../SavedVideos/styledComponents'

import {
  LoaderContainer,
  NoVideosImage,
  EmptyListHeading,
  EmptyListText,
  RetryButton,
} from '../Home/styledComponents'

import {
  GamingViewCount,
  GameVideo,
  GamingThumbNailImage,
  GamingVideosListContainer,
} from './styledComponents'
import NxtWatchContext from '../../context/nxtWatchContext'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: initialApiStatus.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: initialApiStatus.inProgress})
    const token = Cookies.get('nxtWatch_token')

    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        // publishedAt: eachVideo.published_at,
        // channel: {
        //   name: eachVideo.channel.name,
        //   profileImageUrl: eachVideo.channel.profile_image_url,
        // },
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingVideos: updatedVideosList,
        apiStatus: initialApiStatus.success,
      })
    } else {
      this.setState({apiStatus: initialApiStatus.failure})
    }
  }

  renderLoadingView = darkTheme => (
    <LoaderContainer darkTheme={darkTheme}>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = darkTheme => (
    <LoaderContainer darkTheme={darkTheme}>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt=" failure-image"
      />
      <EmptyListHeading darkTheme={darkTheme}>
        Opps! Something Went Wrong
      </EmptyListHeading>
      <EmptyListText darkTheme={darkTheme}>
        We are having some trouble to complete your request.
      </EmptyListText>
      <EmptyListText>Please try again.</EmptyListText>
      <RetryButton type="button">Retry</RetryButton>
    </LoaderContainer>
  )

  renderVideosList = darkTheme => {
    const {gamingVideos} = this.state

    return (
      <GamingVideosListContainer darkTheme={darkTheme}>
        {gamingVideos.map(eachVideo => (
          <Link
            key={eachVideo.id}
            className="link"
            to={`/videos/${eachVideo.id}`}
          >
            <GameVideo>
              <GamingThumbNailImage src={eachVideo.thumbnailUrl} />
              <div>
                <SavedVideoHeading darkTheme={darkTheme}>
                  {eachVideo.title}
                </SavedVideoHeading>
                <GamingViewCount
                  darkTheme={darkTheme}
                >{`${eachVideo.viewCount} watching worldwide`}</GamingViewCount>
                {/* <SavedVideoChannelName darkTheme={darkTheme}>
                  {eachVideo.channelName}
                </SavedVideoChannelName> */}
                {/* <CountContainer darkTheme={darkTheme}>
                  
                  <Count darkTheme={darkTheme} dot>
                    {eachVideo.publishedAt}
                  </Count>
                </CountContainer> */}
              </div>
            </GameVideo>
          </Link>
        ))}
      </GamingVideosListContainer>
    )
  }

  renderApiStatus = darkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderVideosList(darkTheme)
      case 'INPROGRESS':
        return this.renderLoadingView(darkTheme)
      case 'FAILURE':
        return this.renderFailureView(darkTheme)

      default:
        return null
    }
  }

  render() {
    // const {gamingVideos} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <Routes />
          <div className="home-page">
            <NxtWatchContext.Consumer>
              {value => {
                const {darkTheme} = value

                return (
                  <div>
                    <SavedVideosContainer darkTheme={darkTheme}>
                      <>
                        <PageHeading darkTheme={darkTheme}>
                          <PageIcon darkTheme={darkTheme}>
                            <SiYoutubegaming className="page-icon" />
                          </PageIcon>
                          <Heading darkTheme={darkTheme}>Gaming</Heading>
                        </PageHeading>
                        {this.renderApiStatus(darkTheme)}
                      </>
                    </SavedVideosContainer>
                  </div>
                )
              }}
            </NxtWatchContext.Consumer>
          </div>
        </div>
      </>
    )
  }
}

export default Gaming
