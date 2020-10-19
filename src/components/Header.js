import React, { useState } from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'

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
const Login = styled.div`
  margin-left: auto;
`

const StyledButton = styled(Button)`
  margin-left: 10px;
`

function Component() {
  const [isLogin, setIsLogin] = useState(false)

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

      <Login>
        {isLogin ? (
          <>
            <StyledButton type="primary" onClick={() => setIsLogin(false)}>
              注销
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton type="primary" onClick={() => setIsLogin(true)}>
              登陆
            </StyledButton>
            <StyledButton type="primary">注册</StyledButton>
          </>
        )}
      </Login>
    </Header>
  )
}

export default Component
