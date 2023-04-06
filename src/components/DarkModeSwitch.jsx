import { useTheme } from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function DarkModeSwitch () {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div className="flex gap-2 align-middle justify-end">
      {currentTheme === 'dark'
        ? <BsFillSunFill
          className="m-2 h-6 w-6 cursor-pointer hover:text-stone-500 transition duration-300"
          onClick={() => setTheme('light')}
        />
        : <BsFillMoonFill
          className="m-2 h-6 w-6 cursor-pointer hover:text-stone-500 transition duration-300"
          onClick={() => setTheme('dark')}
        />
      }
    </div>
  )
}
