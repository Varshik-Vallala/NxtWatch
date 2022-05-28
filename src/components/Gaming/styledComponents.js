import styled from 'styled-components'

export const GamingVideosListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 60px;
`

export const GameVideo = styled.div`
  //   width: 400px;
`

export const GamingViewCount = styled.p`
  font-size: 13px;
  margin-top: -15px;
  margin-right: 25px;
  list-style-type: ${props => (props.dot ? 'disc' : null)};
  color: ${props => (props.darkTheme ? ' #909090' : '#231f20')};
`

export const GamingThumbNailImage = styled.img`
  height: 250px;
  //   margin-right: 20px;
`
