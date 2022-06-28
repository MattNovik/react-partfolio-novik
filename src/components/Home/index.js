import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import "./index.scss"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "./Logo"
import Loader from "react-loaders"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["a", "t", "t", " ", "N", "o", "v", "i", "k"]
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>H</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _15`}>l</span>
            <span className={`${letterClass} _16`}>o,</span>
            <br />
            <span className={`${letterClass} _17`}>I</span>
            <span className={`${letterClass} _18`}>'</span>
            <span className={`${letterClass} _19`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Frontend Developer / Funny man / Twitter</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
