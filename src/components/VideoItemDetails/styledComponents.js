import styled from 'styled-components'

export const VideoContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : null)};
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RowFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px 0px 8px;
  cursor: pointer;

  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  color: ${props => (props.active ? '#4f46e5' : null)};
  //   color: ${props => (props.checkVideo ? '#4f46e5' : null)};
`
export const Title = styled.h4`
  margin: 15px 0 8px 0;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  //   cursor: pointer;
`

export const ViewCount = styled.p`
  //   margin: 10px;
  font-size: 12px;
  margin: 10px 18px 10px 0;
  color: ${props => (props.darkTheme ? '#909090' : '#1e293b')};
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  //   align-items: center;
  //   margin-top: 0px;
`

export const ChannelImage = styled.img`
  height: 40px;
  margin-top: 12px;
  margin-right: 18px;
`
export const ChannelName = styled.p`
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
`

export const Description = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
`
