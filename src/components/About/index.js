import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"
import "./index.scss"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalculator,
  faBicycle,
  faBeer,
  faLaptop,
  faChair,
  faCat,
  faMap,
} from "@fortawesome/free-solid-svg-icons"
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Beginner web developer who is learning how to create effective and
            beautiful websites and web applications.
          </p>
          <p>
            I develop on HTML, JS(React + have exp. with VUE), CSS(SASS, Less/
            can use BEM),
          </p>
          <p>Node.js, PHP, Gulp, simple CSS + SVG animation.</p>
          <p>
            Have experience of working in a development team for six months.
          </p>
          <p>
            At the moment I am in search of new and interesting projects for
            myself.
          </p>
          <div className="project-links">
            <h2>Here you can check my own projects:</h2>
            <ul className="project-links__list">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mortgage-calculator-kappa.vercel.app/"
                >
                  <FontAwesomeIcon icon={faCalculator} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mattnovik.github.io/Beer-helper/dist/"
                >
                  <FontAwesomeIcon icon={faBeer} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mattnovik.github.io/Bicycle-shop/build/"
                >
                  <FontAwesomeIcon icon={faBicycle} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mattnovik.github.io/SmartDevice/build/"
                >
                  <FontAwesomeIcon icon={faLaptop} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mattnovik.github.io/Small-Tripadvisor/source/"
                >
                  <FontAwesomeIcon icon={faChair} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mattnovik.github.io/Cats-food-shop/build/"
                >
                  <FontAwesomeIcon icon={faCat} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mattnovik.github.io/669139-keksobooking-23/"
                >
                  <FontAwesomeIcon icon={faMap} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
