'use client'
import DarkModeSwitch from './DarkModeSwitch'
import Navigation from './Navigation'
import Logo from './Logo'
import Menu from './Menu'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

export default function NavBar () {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className=" absolute w-full md:w">
        <div className="flex justify-between items-center mx-auto max-w-3xl">
          {menu && <Menu setMenu={setMenu} />}
            <div className="flex self-start p-5">
              <Logo />
            </div>

            <div className="flex flex-col m-l-2 h-ful text-lg md:hidden  justify-end p-5">
              {/* <div className="flex justify-end p-5"> */}
              <FiMenu
                onClick={() => setMenu(true)}
                className="md:hidden h-6 w-6 m-2 mt-3 mb-2 cursor-pointer light:text-black"
              />
              {/* </div> */}
            </div>
            <div className=" m-l-2 h-full hidden md:flex text-lg items-center ">
              <Navigation />
              <DarkModeSwitch />
            </div>
        </div>
      </div>
    </>
  )
}
