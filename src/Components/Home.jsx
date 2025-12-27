import React, { useContext } from 'react'
import { FlorivaContext } from './Context'

const Home = () => {
  const {MyName} = useContext(FlorivaContext)
  console.log(MyName);
  return (
    <div>
      <h1>MAHBURUR</h1>
    </div>
  )
}

export default Home
