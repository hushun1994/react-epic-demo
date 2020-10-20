import React from 'react'
import { useStores } from '../stores'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Tips = styled.div`
  padding: 10px;
  margin: 30px 0;
  color: #fff;
  background: orange;
  border-radius: 4px;
`

const Component = observer(({ children }) => {
  const { UserStore } = useStores()
  return <Tips>{UserStore.currentUser ? null : <div>{children}</div>}</Tips>
})

export default Component
