import { ThemeContext } from '../Contexts/ThemeContext'
import { useContext } from 'react'

function Header( {children} ) {

  const { theme } = useContext(ThemeContext)

  return (
    <>
    <header className={theme? 'light' : 'dark'}>
      { children }
    </header>
    </>
  )
}

export default Header