import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser'
import { useRef } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_ej7p78r','template_u77wpkl', refForm.current, 'gqBKL5Bc-RtR_ZtdT')
    .then(
      () => {
       alert('Mesage successfully sent!')
       window.location.reload(false) 
      },
      () => {
        alert('Failed to send the message, please try again')
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {setLetterClass("text-animate-hover")}, 4000);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} 
            strArray={["C","o","n","t","a","c","t"," ","m","e"]}
            idx={15}/>
          </h1>
          <p>
            blablablablablabl
          </p>
          <p>
            blablablablablabl
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required/>
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required/>
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Novik Matvey,
          <br />
          Russia,
          <br />
          blablablablablabl
          <br />
          blablablablablabl
          <br />
          <span>matvej.novik@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>MattNovik live's here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Contact