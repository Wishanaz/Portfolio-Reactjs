import React from 'react'
import "./resume.scss"
import MacWindow from './MacWindow'

const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
            <embed src="/Resume.pdf" frameBorder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume