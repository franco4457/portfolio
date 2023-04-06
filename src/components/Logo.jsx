'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo ({ reversed }) {
  const { theme } = useTheme()
  const hover = 'dark:hover:bg-stone-800 hover:bg-zinc-300 p-2 rounded-lg transition'
  const hoverReversed = 'hover:bg-stone-800 dark:hover:bg-zinc-300 p-2 rounded-lg transition'
  return (
    <Link href="/" className={reversed ? hoverReversed : hover}>
    {!reversed
      ? (theme === 'dark' || theme === undefined)
          ? <Image loading='lazy' priority={true} layout="responsive" src="/logo_fg2.png" width="50" height="50" alt="Logo-FG" className='h-12 w-12' />
          : <Image loading='lazy' priority={true} layout="responsive" src="/image.png" width="50" height="50" alt="Logo-FG" className='h-12 w-12' />
      : (theme !== 'dark')
          ? <Image loading='lazy' priority={true} layout="responsive" src="/logo_fg2.png" width="50" height="50" alt="Logo-FG" className='h-12 w-12' />
          : <Image loading='lazy' priority={true} layout="responsive" src="/image.png" width="50" height="50" alt="Logo-FG" className='h-12 w-12' />
    }
    </Link>
  )
}
