import React from 'react'
import { observe } from 'mobx-react'
import { useStore } from '../stores'

const Component = observe(() => {
  const { AuthStore } = useStore()
  return (
    <>
      <h1>Login: {AuthStore.values.username}</h1>
    </>
  )
})

export default Component
