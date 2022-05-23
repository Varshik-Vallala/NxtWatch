import styled from 'styled-components'

export const LinkName = styled.p`
  color: ${props => (props.darkTheme ? '#cccccc' : null)};
  font-weight: ${props => (props.active ? '700' : null)};
`

export const LinkItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  color: ${props => (props.darkTheme ? '#cccccc' : null)};
`

export const LinkItem = styled.li`
  background-color: ${props => (props.active ? '#909090' : null)};
`

// (props.active ? '#d7dfe9' : null)

// '#909090'
export const Icon = styled.p`
  padding: 0;
  margin: 0;
  color: ${props => (props.active ? 'red' : null)};
`
