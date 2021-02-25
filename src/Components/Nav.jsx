import { Link } from 'react-router-dom'
import {ThemeContext} from '../Contexts/ThemeContext'
import {LangContext} from '../Contexts/LangContext'
import { useContext } from 'react'
import Data from '../Data/Data'

function Nav() {

  const {theme, setTheme} = useContext(ThemeContext)
  const {lang, setLang} = useContext(LangContext)
  const TEXT = Data[lang]

  return (
    <>
      <nav className='nav'>
        <div className="container nav-inner">
          <div className="logo-inner">
            <p className='logo'>{TEXT.logo}</p>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className='nav-link' to='/'>{TEXT.navHome}</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/about'>{TEXT.navAbout}</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/contacts'>{TEXT.navContacts}</Link>
            </li>
            <li className='nav-item'>
            <select
             defaultValue='en' 
             onChange={(e)=> {
               setLang(e.target.value)
              }}
             >
              <option value="en">English</option>
              <option value="uz">O'zbekcha</option>
              <option value="ru">Русский</option>
            </select>
            </li>
            <li className='nav-item'>
              <button className='mode-toggler' 
                 onClick={()=> setTheme(!theme)}
                 
              >{theme ? TEXT.nightBtn : TEXT.dayBtn}</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav