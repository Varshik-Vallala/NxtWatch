import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
`

export const NotFoundImage = styled.img`
  height: 300px;
`

export const Paragraph = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#000')};
`
