import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar'
import ImageHome from '../components/ImageHome'
import TextInfo from '../components/TextInfo'
import { Container, Button } from 'react-bootstrap';



export default function LandingPage() {

  const [width, setWidth] = useState(false);

  const getWidth = () => {
    if (window.innerWidth <= 1200) {
      setWidth(true)
    } else {
      setWidth(false)
    }

  }

  useEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, [])


  return (
    <Container>
      <NavigationBar />
      {width ?
        <div className="flex-container mt-5">
          <ImageHome />
          <TextInfo />
        </div>
        :
        <div className="flex-container mt-5">
          <TextInfo />
          <ImageHome />
        </div>}
    </Container >
  )
}
