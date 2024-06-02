import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`

export const CardContainer = styled.div`
  padding: 10px;
  width: 80%;
  background-color: ${props => props.bgColor};
`

export const IconAndHeadingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const Heading = styled.h1`
  color: ${props => props.textColor};
  font-size: 40px;
  font-weight: normal;
  font-family: Roboto;
  margin-left: 50px;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: normal;
  font-family: Roboto;
`

export const UlElement = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  color: #181818;
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  background-size: transparent;
  cursor: pointer;
  border: 1px solid #181818;
  outline: none;
`
