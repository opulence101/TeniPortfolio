import React from 'react'
import Hero from './Home/Hero'
import Two from './Home/Two'
import Three from './Home/Three'
import Six from './Home/Six'
import Four from './Home/Four'
import Five from './Home/Five'
import One from './Home/One'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
    </div>
  )
}

export default Home
