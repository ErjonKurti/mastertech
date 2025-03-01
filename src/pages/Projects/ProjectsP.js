import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import './ProjectsP.css'
import ProjectHeader from '../../components/ProjectsHeader/ProjectsHeader'

const ProjectsP = () => {
  return (
    <>
      <ProjectHeader />
      <Navbar />
      <Projects />
      <Footer />
    </>
  )
}

export default ProjectsP