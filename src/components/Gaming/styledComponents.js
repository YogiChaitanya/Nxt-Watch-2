import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`

export const CardContainer = styled.div`
  padding: 30px;
  width: 80%;
  background-color: ${props => props.bgColor};
`

export const IconAndHeadingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-top: 50px;
  margin-bottom: 100px;
`

export const Heading = styled.h1`
  color: ${props => props.textColor};
  font-family: Roboto;
  font-size: 60px;
  font-weight: normal;
  margin-left: 50px;
`

export const UlElement = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
`
