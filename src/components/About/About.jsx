import React, {useEffect} from 'react'
import './about.css'

import img1 from '../../assets/6.jpg'
import img2 from '../../assets/7.png'
import img3 from '../../assets/8.png'
import video from '../../assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
  <section className='about section'>
    <div className="secContainer">
      <h2 className="title">
        Why Hikkings?
      </h2>
      <div className='mainContent container grid'>
        <div data-aos="fade-up" data-aos-duration="2000" className="singheItem">
          <img src={img2} alt="Image Name" />
          <h3>100+ Mountains</h3>

          <p>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less.
            </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="singheItem">
          <img src={img1} alt="Image Name" />
          <h3>100+ Hikings</h3>
          
          <p>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less.
            </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="singheItem">
          <img src={img3} alt="Image Name" />
          <h3>2000+ cyclings</h3>
          
          <p>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less.
            </p>
        </div>
      </div>

      <div className="vidioCard continer">
        <div className="cardContent grid">
          <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
            <h2>
              Wonderful House Experience in there!
            </h2>
            <p>
              The Adventure subranking is based on an 
              equally weighted average of scores from five country
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
            <video src={video} autoPlay loop muted type="video/mp4"></video>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
