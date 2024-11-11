import portfolio from '../../assets/images/portfolio-screenshot.png'
import libraryImage from '../../assets/images/library.png'
import archmove from '../../assets/images/archmove-screenshot.png'

const projectData = [
  {
    id: 1,
    image: portfolio,
    title: 'PORTFOLIO',
    description:
      "My very own personal portfolio in which you're in right now. \n \n It's built using React and Sass and it was pretty fun to work on so I'm including it here for now.",
    code: 'https://github.com',
    backend: '',
    frontend: '',
  },
  {
    id: 2,
    image: libraryImage,
    title: 'ALEXANDRIA',
    description:
      "This project is a simple yet effective app for logging your books. It allows you to keep track of your reading list, and fetches book covers from the Open Library API. \n \n I'm working on getting a demo deployed soon.",
    code: 'https://github.com/eddydevfe/library-frontend',
    backend: '',
    frontend: '',
  },
  {
    id: 3,
    image: archmove,
    title: "ARCHMOVE",
    description: "This is a simple project I put together to both practice some CSS and learn more about following a predefined design file. The original design was made by Morva Labs.",
    code: "https://github.com/eddydevfe/archmove",
    backend: '',
    frontend: 'https://archmove-tau.vercel.app/'
  }
]

export default projectData