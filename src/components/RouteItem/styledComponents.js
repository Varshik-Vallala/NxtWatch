import styled from 'styled-components'

export const LinkName = styled.p`
  color: ${props => (props.darkTheme ? '#cccccc' : null)};
`

export const LinkItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  color: ${props => (props.darkTheme ? '#cccccc' : null)};
`

export const LinkItem = styled.li`
  background-color: ${props => (props.active ? '#d7dfe9' : null)};
`
