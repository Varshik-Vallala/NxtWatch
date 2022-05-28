import styled from 'styled-components'

export const PageHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 60px;
  background-color: ${props => (props.darkTheme ? '#231f20' : '#ebebeb')};
`

export const PageIcon = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#d7dfe9')};
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

export const Heading = styled.h2`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f1f1f1' : null)};
`

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : ' #f1f1f1;')};
  min-height: 90vh;
`

export const NoSavedVideos = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : null)};
`

export const EmptyImageView = styled.img`
  height: 300px;
`
export const NoVideosName = styled.h2`
  margin: 10px 0;
  color: ${props => (props.darkTheme ? '#f1f1f1' : null)};
`

export const NoVideosParagraph = styled.p`
  margin: 5px 0;
  color: ${props => (props.darkTheme ? '#f1f1f1' : null)};
`

export const SavedVideosListContainer = styled.ul`
  list-style-type: none;
  padding: 5px 60px;
`

export const SavedVideo = styled.li`
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
  //   align-items: center;
`

export const SavedVideoThumbNail = styled.img`
  height: 200px;
  width: 350px;
  margin-right: 20px;
`
export const SavedVideoHeading = styled.h3`
  margin-top: 0;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#000')};
`
export const SavedVideoChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#d7dfe9' : '#383838')};
`
