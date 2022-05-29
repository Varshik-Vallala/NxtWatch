import styled from 'styled-components'

export const LinkName = styled.p`
  color: ${props => (props.darkTheme ? '#f4f4f4' : null)};
  font-weight: ${props => (props.active ? '700' : null)};
`

export const LinkItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
    transition: background-color 0.5s;
    transform-origin: center center;
    :hover {
      background-color: 'red'
      color: black;
      .nav-icons {
        color: red;
      }
    }
  //   color: ${props => (props.darkTheme ? '#f4f4f4' : null)};
`

export const LinkItem = styled.li`
  background-color: ${props => (props.active ? '#d7dfe9' : null)};
  background-color: ${props =>
    props.darkTheme && props.active ? '#909090' : null};
`

// (props.active ? '#d7dfe9' : null)

// '#909090'
// export const Icon = styled.p`
//   padding: 0;
//   margin: 0;
//   color: ${props => (props.active ? 'yellow' : null)};
// `
