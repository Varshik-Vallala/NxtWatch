import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/nxtWatchContext'

import Header from '../Header'

import Routes from '../Routes'

import VideoItem from '../VideoItem'

import './index.css'

import {
  SearchButton,
  MoviesUnOrderedList,
  HomePageVideosContainer,
  SearchBox,
} from './styledComponents'

class Home extends Component {
  state = {
    showPremiumPopUp: true,
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickCrossButton = () => {
    this.setState({showPremiumPopUp: false})
  }

  getHomeVideos = async () => {
    const accessToken = Cookies.get('nxtWatch_token')

    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const updatedVideosList = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      channel: eachVideo.channel,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    }))

    this.setState({videosList: updatedVideosList})

    console.log(data)
  }

  renderVideosList = () => {
    const {videosList} = this.state

    return (
      <MoviesUnOrderedList>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </MoviesUnOrderedList>
    )
  }

  render() {
    const {showPremiumPopUp, videosList} = this.state

    console.log(videosList)

    return (
      <>
        <Header />
        <div className="home-container">
          <Routes />
          <div className="home-page">
            {showPremiumPopUp ? (
              <div className="premium-plan-container">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="light-logo-home"
                    className="nxtwatch-logo"
                  />
                  {/* the above image tag was used form header component  */}
                  <p>Buy Nxt Watch Premium plans prepaid plans with UPI</p>
                  <button className="get-now-button" type="button">
                    GET IT NOW
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="cross-button"
                    onClick={this.onClickCrossButton}
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
                      />
                      <SearchButton type="button">
                        <AiOutlineSearch className="search-icon" />
                      </SearchButton>
                    </div>
                    {this.renderVideosList()}
                  </HomePageVideosContainer>
                )
              }}
            </NxtWatchContext.Consumer>
          </div>
        </div>
      </>
    )
  }
}

export default Home
