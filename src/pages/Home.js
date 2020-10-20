import React from 'react'
// import styled from 'styled-components'
import { observer } from 'mobx-react'
import { useStores } from '../stores'

const Home = observer(() => {
  const { UserStore } = useStores()
  return (
    <>
      <h1>
        {UserStore.currentUser ? (
          <>Hello {UserStore.currentUser.attributes.username}</>
        ) : (
          '用户没有登陆'
        )}
      </h1>
    </>
  )
})

export default Home
