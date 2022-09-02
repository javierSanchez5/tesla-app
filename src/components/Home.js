import styled from 'styled-components'
import React from 'react'
import Cars from './Cars'

const Models = styled.div`
  height: 100vh; 
`

function Home() {
  return (
    <Models>
      <Cars/>
      <Cars/>
      <Cars/>
    </Models>
  )
}

export default Home