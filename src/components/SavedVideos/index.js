import {Component} from 'react'

import {Link} from 'react-router-dom'

import {BiListCheck} from 'react-icons/bi'

import NxtWatchContext from '../../context/nxtWatchContext'

import {
  PageHeading,
  PageIcon,
  Heading,
  SavedVideosContainer,
  NoSavedVideos,
  EmptyImageView,
  NoVideosName,
  NoVideosParagraph,
  SavedVideosListContainer,
  SavedVideo,
  SavedVideoThumbNail,
  SavedVideoHeading,
  SavedVideoChannelName,
} from './styledComponents'

import {CountContainer, Count} from '../VideoItem/styledComponents'

import Header from '../Header'

import Routes from '../Routes'

import './index.css'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedVideosList} = value

          return (
            <>
              <Header />
              <div className="home-container">
                <Routes />
                <div className="home-page">
                  <div>
                    <SavedVideosContainer>
                      {savedVideosList.length > 0 ? (
                        <>
                          <PageHeading>
                            <PageIcon>
                              <BiListCheck className="page-icon" />
                            </PageIcon>
                            <Heading>Saved Videos</Heading>
                          </PageHeading>
                          <SavedVideosListContainer>
                            {savedVideosList.map(eachVideo => (
                              <Link
                                key={eachVideo.id}
                                className="link"
                                to={`/videos/${eachVideo.id}`}
                              >
                                <SavedVideo>
                                  <SavedVideoThumbNail
                                    src={eachVideo.thumbnailUrl}
                                  />
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
                      ) : (
                        <NoSavedVideos>
                          <EmptyImageView
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                            alt="no saved videos"
                          />
                          <NoVideosName>No saved videos found</NoVideosName>
                          <NoVideosParagraph>
                            You can save your videos while watching them
                          </NoVideosParagraph>
                        </NoSavedVideos>
                      )}
                    </SavedVideosContainer>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
