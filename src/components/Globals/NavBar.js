import React, { Component } from "react"
import GatsbyImage from "gatsby-image"
import image from "../../images/logo.svg"
import { FACartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collaspe",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  }

  navbarhandler = () => {
    console.log("hello")
  }

  render() {
    return (
      <nav
        classname="navbar navbar-expand-sm 
      bg-light navbar-light"
      >
        hello jm{" "}
      </nav>
    )
  }
}
