import styled from 'styled-components'

export const HomePageVideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f4f4f4')};
  padding: 22px;
`

export const SearchBox = styled.input`
  padding: 6px;
  width: 30%;
  outline: none;
  border: 1px solid #7e858e;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : null)};
  color: ${props => (props.darkTheme ? '#f4f4f4' : null)};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.darkTheme ? '#313131' : '#f4f4f4')};

  text-align: center;
  width: 60px;
  outline: none;
  border: 1px solid #7e858e;
  padding: 3px;
`

export const MoviesUnOrderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoVideosImage = styled.img`
  height: 350px;
`
export const EmptyListText = styled.p`
  font-size: ${props => (props.heading ? '22px' : '16px')};
  font-weight: ${props => (props.heading ? 'bold' : 'null')};
  color: ${props => (props.heading ? '#1e293b' : '#475569')};
  font-family: 'Roboto';
  margin: 8px 0 0 0;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #f8fafc;
  //   font-family: 'Roboto';
  outline: none;
  border: none;
  border-radius: 4px;
  height: 35px;
  width: 80px;
  font-weight: 600;
  cursor: pointer;
  margin: 8px 0 0 0;
`
