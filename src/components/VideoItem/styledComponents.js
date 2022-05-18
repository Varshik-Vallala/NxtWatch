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
  width: ${props => (props.channelImage ? '35px' : '280px')};
  align-self: ${props => (props.channelImage ? 'flex-start' : null)};
  margin-top: ${props => (props.channelImage ? '10px' : null)};

  //   height: 250px;
`

export const VideoDetails = styled.div`
  margin: 6px;
  text-decoration: none;
`

export const Title = styled.p`
  text-decoration: none;
  margin: 5px 0px;
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#fff' : '#231f20')};
  text-decoration: none;
`

export const ChannelName = styled.p`
  margin: 5px 0;
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#909090' : '#231f20')};
`

export const CountContainer = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const Count = styled.li`
  font-size: 13px;
  margin-right: 25px;
  list-style-type: ${props => (props.dot ? 'disc' : null)};
  color: ${props => (props.darkTheme ? ' #909090' : '#231f20')};
`
