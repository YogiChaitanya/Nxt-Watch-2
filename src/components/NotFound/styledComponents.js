import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background-color: ${props => props.isDark};
`

export const Image = styled.img`
  width: 40%;
  margin: 10px;
`

export const Heading = styled.h1`
  color: ${props => props.isDark};
  font-size: 50px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`

export const Paragraph = styled.p`
  color: ${props => props.isDark};
  font-size: 20px;
  font-weight: normal;
  font-family: 'Roboto';
  text-align: center;
`
