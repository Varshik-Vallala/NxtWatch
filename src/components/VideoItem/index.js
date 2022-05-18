import {Link} from 'react-router-dom'

import {
  ListItem,
  ThumbnailImage,
  ThumbnailDetailsContainer,
  Title,
  VideoDetails,
  ChannelName,
  CountContainer,
  Count,
} from './styledComponents'

import NxtWatchContext from '../../context/nxtWatchContext'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const updatedChannelDetails = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <ListItem>
            <Link className="route-link" to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt={id} />
              <ThumbnailDetailsContainer>
                <ThumbnailImage
                  channelImage
                  src={updatedChannelDetails.profileImageUrl}
                  alt={updatedChannelDetails.name}
                />
                <VideoDetails>
                  <Title darkTheme={darkTheme}>{title}</Title>
                  <ChannelName darkTheme={darkTheme}>
                    {updatedChannelDetails.name}
                  </ChannelName>
                  <CountContainer>
                    <Count darkTheme={darkTheme}>{`${viewCount} views`}</Count>
                    <Count dot darkTheme={darkTheme}>
                      {publishedAt}
                    </Count>
                  </CountContainer>
                </VideoDetails>
              </ThumbnailDetailsContainer>
            </Link>
          </ListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
