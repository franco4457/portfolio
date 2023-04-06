import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const STYLES = 'w-6 h-6 m-4 hover:-translate-y-1 transition-transform'
export default function Footer () {
  return (
    <>
      <footer className="flex justify-center w-full">
        <ul className='flex flex-row'>
          <li>
            <Link href="https://github.com/franco4457">
            <BsGithub className={STYLES}/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/francoegi/">
            <BsLinkedin className={STYLES}/>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}
