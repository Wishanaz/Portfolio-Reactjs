import React, {useEffect, useState} from 'react'
import Markdown from "react-markdown";
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula  } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import './note.scss'


const Note = () => {
    const [markdown, setMarkdown] = useState(null)

    useEffect(()=>{
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

  return (
    <MacWindow>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language='typescript' style={dracula } >{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  ) 
}

export default Note