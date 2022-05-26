import {Component} from 'react'

import {AiFillFire} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

import Routes from '../Routes'

import {
  PageHeading,
  PageIcon,
  Heading,
  SavedVideosContainer,
  SavedVideosListContainer,
  SavedVideo,
  SavedVideoThumbNail,
  SavedVideoHeading,
  SavedVideoChannelName,
} from '../SavedVideos/styledComponents'

import {CountContainer, Count} from '../VideoItem/styledComponents'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: initialApiStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatus.inProgress})

    const token = Cookies.get('nxtWatch_token')

    const url = 'https://apis.ccbp.in/videos/trending'

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
        publishedAt: eachVideo.published_at,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        trendingVideos: updatedVideosList,
        apiStatus: apiStatus.success,
      })
    }
  }

  render() {
    const {trendingVideos} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <Routes />
          <div className="home-page">
            <div>
              <SavedVideosContainer>
                <>
                  <PageHeading>
                    <PageIcon>
                      <AiFillFire className="page-icon" />
                    </PageIcon>
                    <Heading>Trending</Heading>
                  </PageHeading>
                  <SavedVideosListContainer>
                    {trendingVideos.map(eachVideo => (
                      <Link
                        key={eachVideo.id}
                        className="link"
                        to={`/videos/${eachVideo.id}`}
                      >
                        <SavedVideo>
                          <SavedVideoThumbNail src={eachVideo.thumbnailUrl} />
                          <div>
                            <SavedVideoHeading>
                              {eachVideo.title}
                            </SavedVideoHeading>
                            <SavedVideoChannelName>
                              {eachVideo.channelName}
                            </SavedVideoChannelName>
                            <CountContainer>
                              <Count>{`${eachVideo.viewCount} views`}</Count>
                              <Count dot>{eachVideo.publishedAt}</Count>
                            </CountContainer>
                          </div>
                        </SavedVideo>
                      </Link>
                    ))}
                  </SavedVideosListContainer>
                </>
              </SavedVideosContainer>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Trending
