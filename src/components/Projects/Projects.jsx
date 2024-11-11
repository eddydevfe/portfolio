  import './Projects.scss'
  import { IconBrandGithub, IconServer, IconAppWindow } from '@tabler/icons-react'
  import projectData from './projects-data'
  import ProjectImage from '../ProjectImage/ProjectImage'

  const Projects = () => {
    return (
      <section id='projects'>
        <div className='container'>
          <h4>PROJECTS</h4>
          {projectData.map(
            ({ id, image, title, description, code, backend, frontend }) => (
              <div key={id} className='project'>
                <ProjectImage src={image} alt={title} />
                <div className='project-details'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className='project-icons'>
                    {code && (
                      <a
                        aria-label='github'
                        rel='noreferrer'
                        target='_blank'
                        href={code}
                      >
                        <IconBrandGithub width={40} height={40} />
                      </a>
                    )}
                    {backend && (
                      <a
                        aria-label='backend'
                        rel='noreferrer'
                        target='_blank'
                        href={backend}
                      >
                        <IconServer width={40} height={40} />
                      </a>
                    )}
                    {frontend && (
                      <a
                        aria-label='frontend'
                        rel='noreferrer'
                        target='_blank'
                        href={frontend}
                      >
                        <IconAppWindow width={40} height={40} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
          <span>More projects coming soon...</span>
        </div>
      </section>
    )
  }

  export default Projects
