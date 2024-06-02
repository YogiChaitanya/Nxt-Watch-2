import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`

export const FailedImage = styled.img`
  width: 40%;
  margin: 30px;
`

export const Heading = styled.h1`
  color: ${props => props.textColor};
  font-family: Roboto;
  font-size: 60px;
  font-weight: normal;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
`

export const Button = styled.button`
  color: ${props => props.textColor};
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  background-size: #4f46e5;
  cursor: pointer;
  border: 1px solid #181818;
  outline: none;
`
