import './Hero.scss'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandDiscord,
} from '@tabler/icons-react'
import profile from '../../assets/images/profile.jpeg'

const Hero = () => {
  return (
    <>
      <section id='home' className='hero'>
        <div className='container'>
          <div className='content'>
            <div className='hero-main'>
              <div className='hero-text'>
                <h1>
                  Front-End React Developer <span>👨🏻‍💻</span>
                </h1>
                <p>
                  Hello, I&apos;m Eduardo, a Brazilian front-end developer with a
                  strong focus on React and modern web design.
                </p>
                <span>
                  <a
                    aria-label='linkedin'
                    rel='noreferrer'
                    target='_blank'
                    href='https://linkedin.com/in/eddydevfe'
                  >
                    <IconBrandLinkedin width={40} height={40} />
                  </a>
                  <a
                    aria-label='github'
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/eddydevfe'
                  >
                    <IconBrandGithub width={40} height={40} />
                  </a>
                  <a
                    aria-label='discord'
                    rel='noreferrer'
                    target='_blank'
                    href='https://discord.gg/ZdzAVEGBkH'
                  >
                    <IconBrandDiscord width={40} height={40} />
                  </a>
                </span>
              </div>

              <div className='hero-img-container'>
                <div className='hero-img'>
                  <img src={profile} alt="Profile photo of Eddy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
