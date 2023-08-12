import React from 'react'
import { GoGitPullRequest } from 'react-icons/go'
import { SlSocialLinkedin } from 'react-icons/sl'

const Projects = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'Center',
          alignItems: 'Center',
          height: '100vh',
          color: 'white'
        }}
      >
        <GitHub/>
        <LinkedIn/>
      </div>
    );
  };

  const GitHub = () => {
    return(
      <div>
        <h1>GitHub</h1>
        <a href="https://github.com/jesse-drotar">
            <GoGitPullRequest size={100} color="white"/>
        </a>
      </div>
    );
  }

  const LinkedIn = () => {
    return(
      <div 
        style = {{
          padding: 10
        }}
      >
        <h1>LinkedIn</h1>
        <a href="https://www.linkedin.com/in/jesse-drotar-b9b5899a/">
            <SlSocialLinkedin size = {100} color="blue"/>
        </a>
      </div>
    );
  }

  export default Projects