import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFileDownload } from 'react-icons/fa'

const STYLES = 'w-6 h-6 m-4 hover:-translate-y-1 transition-transform'
export default function Footer () {
  return (
    <>
      <footer className="flex justify-center w-full">
        <ul className='flex flex-row'>
          <li>
            <Link href="https://github.com/franco4457" target='_blank'>
            <BsGithub className={STYLES}/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/francoegi/" target='_blank'>
            <BsLinkedin className={STYLES}/>
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/file/d/1QoYyvWCWoMx4p_8O_pc5JAVkPLL0EWj5/view?usp=sharing" target='_blank'>
            <FaFileDownload className={STYLES}/>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}
