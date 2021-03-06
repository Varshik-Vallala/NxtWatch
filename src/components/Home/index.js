import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/nxtWatchContext'

// import Header from '../Header'

// import Routes from '../Routes'

import VideoItem from '../VideoItem'

import './index.css'

import {
  SearchButton,
  MoviesUnOrderedList,
  HomePageVideosContainer,
  SearchBox,
  LoaderContainer,
  NoVideosImage,
  EmptyListText,
  EmptyListHeading,
  RetryButton,
} from './styledComponents'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showPremiumPopUp: true,
    videosList: [],
    searchInput: '',
    apiStatus: initialApiStatus.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickCrossButton = () => {
    this.setState({showPremiumPopUp: false})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  onClickEnter = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: initialApiStatus.inProgress})

    const {searchInput} = this.state

    const accessToken = Cookies.get('nxtWatch_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        channel: eachVideo.channel,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        videosList: updatedVideosList,
        apiStatus: initialApiStatus.success,
      })
    } else {
      this.setState({apiStatus: initialApiStatus.failure})
    }

    // console.log(data)
  }

  renderVideosList = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderEmptyListView()
    }

    return (
      <MoviesUnOrderedList>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </MoviesUnOrderedList>
    )
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoadingView = darkTheme => (
    <LoaderContainer darkTheme={darkTheme} data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderEmptyListView = () => (
    <LoaderContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt=" no videos"
      />
      <EmptyListHeading>No Search results found</EmptyListHeading>
      <EmptyListText>
        Try different key words or remove search filter
      </EmptyListText>
      <RetryButton type="button">Retry</RetryButton>
    </LoaderContainer>
  )

  renderFailureView = darkTheme => (
    <LoaderContainer darkTheme={darkTheme}>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <EmptyListHeading darkTheme={darkTheme}>
        Oops! Something Went Wrong
      </EmptyListHeading>
      <EmptyListText darkTheme={darkTheme}>
        We are having some trouble to complete your request.
      </EmptyListText>
      <EmptyListText>Please try again.</EmptyListText>
      <RetryButton onClick={this.onClickRetry} type="button">
        Retry
      </RetryButton>
    </LoaderContainer>
  )

  renderApiStatusView = darkTheme => {
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
    const {showPremiumPopUp, searchInput} = this.state

    // console.log(searchInput)

    // console.log(videosList)

    const token = Cookies.get('nxtWatch_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        {/* <Header />
        <div className="home-container">
          <Routes />
          <div className="home-page"> */}
        {showPremiumPopUp ? (
          <div className="premium-plan-container" data-testid="banner">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
                className="nxtwatch-logo"
              />
              {/* the above image tag was used form header component  */}
              <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
              <button className="get-now-button" type="button">
                GET IT NOW
              </button>
            </div>
            <div>
              <button
                type="button"
                className="cross-button"
                onClick={this.onClickCrossButton}
                data-testid="close"
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
        ) : null}
        <NxtWatchContext.Consumer>
          {value => {
            const {darkTheme} = value

            return (
              <HomePageVideosContainer darkTheme={darkTheme}>
                <div className="search-container">
                  <SearchBox
                    type="search"
                    placeholder="Search"
                    darkTheme={darkTheme}
                    onChange={this.onChangeSearch}
                    onKeyDown={this.onClickEnter}
                    value={searchInput}
                  />
                  <SearchButton
                    type="button"
                    darkTheme={darkTheme}
                    onClick={this.onClickSearch}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch className="search-icon" />
                  </SearchButton>
                </div>
                {this.renderApiStatusView(darkTheme)}
              </HomePageVideosContainer>
            )
          }}
        </NxtWatchContext.Consumer>
        {/* </div>
        </div> */}
      </>
    )
  }
}

export default Home
