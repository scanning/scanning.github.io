import React from "react"

import scanning from "../images/scanning.png"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div><br /></div>
      <div className="display-3"><img alt="scanning" src={scanning} width="50%" /></div>
      <div><br /></div>
      <div className="display-3" style={{ color: "#91C7B1" }}>
        <span style = {{color : "#F1F7ED"}}>Hello, I'm </span>
        Simon.
      </div>
      <div className="h3 text-muted code mt-4 mb-3">
        "Software Engineer by day, football tragic by night."
      </div>
      <div><br /></div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://linkedin.com/in/scanning">
          <Linkedin />
        </a>
        <a className="mr-5 icon" href="https://twitter.com/scanning">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/scanning">
          <Github />
        </a>
      </div>
    </div>
  )
}
