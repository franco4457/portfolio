import DarkModeSwitch from './DarkModeSwitch'
import Logo from './Logo'
import Navigation from './Navigation'
import { IoMdClose } from 'react-icons/io'

export default function Menu ({ setMenu }) {
  return (
    <div className="fixed z-10 top-0 origin-top-right transform transition duration-1000 md:hidden opacity-100 scale-100 ">
    {/* // <div className="absolute inset-x-0  top-0 origin-top-right transform p-2 transition md:hidden opacity-100 scale-100"> */}
      <div className="backdrop-blur-md h-screen w-screen">
        <div className="bg-stone-900 text-white dark:bg-zinc-100 dark:text-slate-700 flex m-1 flex-col rounded-lg">
          <div className='flex justify-between items-center p-5'>
            <Logo reversed={true} />
            <IoMdClose onClick={() => setMenu(false)} className="self-center w-6 h-6 m-2" />
          </div>
          <div className='p-5 pt-0'>
            <DarkModeSwitch />
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  )
}
