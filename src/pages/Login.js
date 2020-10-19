import React, { useRef } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores/index'

const Component = observer(() => {
  const { AuthStore } = useStores()
  const inputRef = useRef()

  const bindChange = (e) => {
    AuthStore.setUsername(inputRef.current.value)
    AuthStore.setName(inputRef.current.value)
  }

  return (
    <>
      <h1>
        Login: {AuthStore.values.username} {AuthStore.name}
      </h1>
      <input onChange={bindChange} ref={inputRef} />
    </>
  )
})

export default Component
