import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFileDownload } from 'react-icons/fa'

export default function Home () {
  return (
    <>
      <div className="text-center py-64 px-6 md:py-52 md:px-0 md:text-left">
        <h1 className="text-4xl font-bold pb-4 md:text-6xl">
          Franco Gutierrez
        </h1>
        <p className="text-xl font-semibold md:text-3xl pb-1">
          Full Stack Developer
        </p>
        <p className="text-lg  dark:text-stone-400 text-zinc-800  md:text-xl">
          Apasionado por el desarrollo de software y a aprender constantemente
        </p>
        <ul className="flex flex-row">
          <li>
            <Link href="https://github.com/franco4457">
              <BsGithub className='w-6 h-6 m-4 hover:-translate-y-1 transition-transform' target='_blank'/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/francoegi/" target='_blank'>
              <BsLinkedin className='w-6 h-6 m-4 hover:-translate-y-1 transition-transform' />
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/file/d/1Rz2vRn6FaNXnVIX6NmRETfaLOaBScAxz/view?usp=share_link" target='_blank'>
              <button className="p-2 m-2 rounded-md ring-2 dark:ring-white ring-black border-2 border-current hover:-translate-y-1 transition-transform flex flex-row justify-center items-center bg-stone-900 dark:bg-zinc-100 dark:text-stone-900 text-zinc-100 ">
                Decargar CV
                <FaFileDownload className='w-6 h-6 ml-2'/>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
