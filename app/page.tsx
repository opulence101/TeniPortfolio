import React from 'react'
import Navbar from './NavbarOne'
import NavbarThree from './NavbarThree'
import NavbarTwo from './NavbarTwo'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <NavbarTwo/>
      <NavbarThree/>
    </div>
  )
}

export default page