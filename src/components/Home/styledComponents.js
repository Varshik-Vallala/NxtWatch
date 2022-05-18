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
  background-color: #f4f4f4;
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
