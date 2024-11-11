import './Navbar.scss'
import { useRef, useEffect } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'

const Navbar = () => {
  const navRef = useRef()

  const hamburgerMenu = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth > 900 &&
        navRef.current.classList.contains('responsive-nav')
      ) {
        navRef.current.classList.remove('responsive-nav')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' })
  }

  return (
    <header className='header'>
      <p onClick={pageUp}>eddydevfe</p>

      <nav ref={navRef}>

        <ul onClick={hamburgerMenu}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1aFCnLFX2BP0AkxIt-76u087jaN3rDyZ-/view?usp=sharing'>Download CV</a>
          </li>
        </ul>

        <button className='menu-btn menu-close-btn' onClick={hamburgerMenu}>
          <IconX width={30} height={30} />
        </button>

      </nav>

      <button className='menu-btn' onClick={hamburgerMenu}>
        <IconMenu2 width={30} height={30} />
      </button>

    </header>
  )
}

export default Navbar
