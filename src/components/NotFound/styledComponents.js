import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  min-height: 90vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 80%;
`
export const Image = styled.img`
  width: 40%;
  margin: 10px;
`

export const Heading = styled.h1`
  color: ${props => props.textColor};
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 18px;
  font-weight: normal;
  font-family: 'Roboto';
  text-align: center;
`
