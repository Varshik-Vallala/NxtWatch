import styled from 'styled-components'

export const LinkName = styled.p`
  color: ${props => (props.darkTheme ? '#f4f4f4' : null)};
  font-weight: ${props => (props.active ? '700' : null)};
`

export const LinkItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  min-width: 200px;
  //   width: 50px;
  transition: 0.5s;

  :hover {
    background-color: red;
    // width: 300px;
    // color: black;
    // .nav-icons {
    //   color: white;
    // }
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
