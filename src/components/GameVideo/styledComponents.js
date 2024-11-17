import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const GameVideoContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin: 10px;
`

export const Image = styled.img`
  width: 180px;
  height: 300px;
  border-radius: 8px;
`

export const Paragraph = styled.p`
  color: ${props => props.textColor};
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
`

export const Paragraph2 = styled.p`
  color: ${props => props.textColor};
  font-size: 12px;
  font-family: Roboto;
  font-weight: normal;
`
