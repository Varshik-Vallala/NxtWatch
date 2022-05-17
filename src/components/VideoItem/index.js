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
    <ListItem>
      <ThumbnailImage src={thumbnailUrl} alt={id} />
      <ThumbnailDetailsContainer>
        <ThumbnailImage
          channelImage
          src={updatedChannelDetails.profileImageUrl}
          alt={updatedChannelDetails.name}
        />
        <VideoDetails>
          <Title>{title}</Title>
          <ChannelName>{updatedChannelDetails.name}</ChannelName>
          <CountContainer>
            <Count>{`${viewCount} views`}</Count>
            <Count dot>{publishedAt}</Count>
          </CountContainer>
        </VideoDetails>
      </ThumbnailDetailsContainer>
    </ListItem>
  )
}

export default VideoItem
