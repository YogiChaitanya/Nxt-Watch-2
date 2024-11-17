import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  width: 20%;
  background-color: ${props => props.bgColor};
`

export const TabItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  margin-left: 5px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const TabItem = styled.button`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${props => props.isActive};
  border: none;
  border-radius: 4px;
`

export const TabName = styled.p`
  color: ${props => props.textColor};
  margin-left: 20px;
`

export const ContactUsContainer = styled.div`
  color: ${props => props.textColor};
  padding: 10px;
`

export const Heading = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto;
`

export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  padding: 0px;
  margin: 0px;
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-weight: normal;
  font-family: Roboto;
`
