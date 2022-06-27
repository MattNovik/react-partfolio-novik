import "./index.scss"
import LogoS from "../../../assets/images/logo-s.png"
import { useEffect, useRef } from "react"
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin"
import { gsap } from "gsap-trial"

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 4,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      <svg
        width="629pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 629 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="matrix(1 0 0 1 300.19 385.87) scale(1.8, 1.8)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M -157.39679 191.80046 L -63.360090000000014 -191.80046 L 3.153669999999991 -16.91513999999998 L 101.77752 -191.80046 L 157.39679 187.7867 L 88.58945000000001 160.26376 L 82.28211000000002 -58.19954000000001 L 3.1536700000000195 42.71788999999998 L -63.360089999999985 -90.88303000000002 L -77.69494999999999 160.26376 L -155.10321 191.80046"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
