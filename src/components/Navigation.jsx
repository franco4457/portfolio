import Link from 'next/link'
import { useRouter } from 'next/router'
import { Pages } from '@/utils/data'

export default function Navigation () {
  const { pathname } = useRouter()
  const styles = 'font-bold items-center hover:text-stone-500 transition duration-300'
  return (
    <>
    <div className='flex flex-col md:flex-row gap-4 mr-2 text-base items-end mt-2 md:mt-0'>
        {Pages.map(({ label, page }, i) => (
            <Link className={pathname === `/${page}` ? styles : 'items-center hover:text-stone-500 transition duration-300'} key={i} href={page}> {label}</Link>
        ))}
    </div>
    </>
  )
}
