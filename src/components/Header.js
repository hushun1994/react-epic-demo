import React from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  background: #02101f;
  display: flex;
  align-items: center;
  padding: 10px 100px;
  color: #fff;
`
const Logo = styled.img`
  height: 30px;
`
const StyledLink = styled(NavLink)`
  color: #ccc;
  margin-left: 30px;
  &.active {
    border-bottom: 1px solid #fff;
  }
`

function Component() {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <nav>
        <StyledLink to="/" activeClassName="active" exact>
          首页
        </StyledLink>
        <StyledLink to="/history" activeClassName="active">
          历史
        </StyledLink>
        <StyledLink to="/about" activeClassName="active">
          关于
        </StyledLink>
      </nav>
    </Header>
  )
}

export default Component
