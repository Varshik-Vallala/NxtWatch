import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #000; */
  height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => (props.darkTheme ? '#181818' : '')};
`

export const LoginForm = styled.form`
  box-shadow: ${props =>
    props.darkTheme ? ' ' : '5px 10px 8px 10px #5f5e5e30'};
  padding: 40px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkTheme ? '#000' : '')};
`
export const NxtWatchLogo = styled.img`
  height: 40px;
  align-self: center;
  margin: 10px 0;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 11px 0;
`

export const InputField = styled.input`
  padding: 8px;
  outline: none;
  width: 270px;
  border: 1px solid #616e7c;
  border-radius: 3px;
`

export const LabelText = styled.label`
  font-weight: 600;
  color: #64748b;
  font-size: 12px;
  margin: 4px 0;
`
