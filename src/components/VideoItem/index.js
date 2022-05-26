import {formatDistanceToNow} from 'date-fns'

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

        const modifyDate = () => {
          const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ]

          const [month, year] = publishedAt.split(',')
          const m = month.slice(0, 3)
          const date = month.slice(-2)

          const monthNumber = months.indexOf(m)

          /* console.log(monthNumber, year, date) */

          const word = formatDistanceToNow(
            new Date(parseInt(year), parseInt(monthNumber), parseInt(date)),
          )

          return word.slice(-7).concat(' ago')
        }

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
                      {modifyDate()}
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
