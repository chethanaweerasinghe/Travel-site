import React, {useEffect} from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img from '../../assets/12.jpg'
import img2 from '../../assets/13.jpg'
import img3 from '../../assets/14.jpg'
import img4 from '../../assets/10.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Dalada Maligawa',
    location: 'Sri Lanka',
    grade: 'CULTURAL RELAX'
},
{
  id:2,
  imgSrc: img2,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX'
},

{
  id:3,
  imgSrc: img3,
  destTitle: 'Bib Ben',
  location: 'London',
  grade: 'CULTURAL RELAX'
},

{
  id:4,
  imgSrc: img4,
  destTitle: 'Ravana Waterfall',
  location: 'Sri Lanka',
  grade: 'CULTURAL RELAX'
},

]

const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='popular section container'>
      <div className='secContainer'>
      <div className='secHeader flex'>
        <div data-aos="fade-right" data-aos-duration="2500" className='textDiv'>
          <h2 className='secTitle'>
            Popular Destination
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the worls!
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="2500" className='iconsDiv flex'>
          <BsArrowLeftShort className='icon leftIcon'/>
          <BsArrowRightShort className='icon rightIcon'/>
        </div>
      </div>

    <div className='mainContent grid'>
      {
        Data.map(({id, imgSrc, destTitle, location, grade})=>{
          return(
            <div data-aos="fade-up" className='singleDestination'>
        <div className='destImage'>
          <img src={imgSrc} alt="Image title" />
          <div className='overlayInfo'>
            <h3>{destTitle}</h3>
            <p>{location}</p>

            <BsArrowRightShort className='icon'/>
          </div>
        </div>

      <div className='destFooter'>
        <div className='number'>
          0{id}
        </div>
        <div className="destiText flex">
          <h6>{location}</h6>
          <span className='flex'>
            <span className='dot'>
              <BsDot className='icon'/>
            </span>
            Dot
          </span>
        </div>
      </div>

      </div>
          )
        })
      }
    </div>

      </div>
    </section>
  )
}

export default Popular