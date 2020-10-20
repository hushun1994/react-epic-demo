import React from 'react'
import logo from '../logo.svg'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'
import { useStores } from '../stores/index'
import { observer } from 'mobx-react'

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

const Component = observer(() => {
  const { UserStore, AuthStore } = useStores()

  const history = useHistory()

  const handleLogout = () => {
    AuthStore.logout()
  }

  const handleLogin = () => {
    history.push('/login')
  }

  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <Header>
      <NavLink to="/" activeClassName="active">
        <Logo src={logo} alt="logo" />
      </NavLink>
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
        {UserStore.currentUser ? (
          <>
            {UserStore.currentUser.attributes.username}
            <StyledButton type="primary" onClick={handleLogout}>
              注销
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton type="primary" onClick={handleLogin}>
              登陆
            </StyledButton>
            <StyledButton type="primary" onClick={handleRegister}>
              注册
            </StyledButton>
          </>
        )}
      </Login>
    </Header>
  )
})

export default Component
