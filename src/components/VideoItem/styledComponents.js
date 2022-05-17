import styled from 'styled-components'

export const ListItem = styled.li`
  width: 280px;
  margin: 5px 25px 25px 0;
`
export const ThumbnailDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ThumbnailImage = styled.img`
  width: ${props => (props.channelImage ? '40px' : '280px')};
  align-self: ${props => (props.channelImage ? 'flex-start' : null)};
  margin-top: ${props => (props.channelImage ? '10px' : null)};

  //   height: 250px;
`

export const VideoDetails = styled.div`
  margin: 6px;
`

export const Title = styled.p`
  margin: 5px 0px;
  color: #231f20;
  font-size: 16px;
`

export const ChannelName = styled.p`
  margin: 5px 0;
  font-size: 13px;
  font-weight: 500;
`

export const CountContainer = styled.div`
  //   padding: 0;
  display: flex;
  align-items: center;
  margin: 0;
  //   list-style-type: disc;
`

export const Count = styled.p`
  font-size: 13px;
  margin: 5px 6px 5px 0;
  list-style-type: disc;
`
