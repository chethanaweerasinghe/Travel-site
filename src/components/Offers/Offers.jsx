import React, {useEffect} from 'react'
import './offer.css'

import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'

import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Offer = [
  {
    id:1,
    imgSrc: img2,
    destTitle: 'Machu Pichchu',
    location: '450 Vine #310, Colombo',
    price: '$1000',
},

{
  id:2,
  imgSrc: img3,
  destTitle: 'Machu Pichchu',
  location: '40 Vine #30, Negombo',
  price: '$1200',
},

{
  id:3,
  imgSrc: img4,
  destTitle: 'Machu Pichchu',
  location: '4th street, Nugegoda',
  price: '$900',
},

{
  id:3,
  imgSrc: img5,
  destTitle: 'Machu Pichchu',
  location: 'No.14, flower Road, Gampaha',
  price: '$1500',
},
]

const Offers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div data-aos="fade-up" data-aos-duration="2000" className='secIntro'>
          <h2 className='secTitle'>
            Special Offers
          </h2>
          <p>From historical cities to natural specteculars, come see the best of the world</p>
        </div>
        <div className='mainContent grid'>
          {
            Offer.map(({id, imgSrc, destTitle, location, price})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt="Image name" />
              <span className="discount">
                30% off
              </span>
            </div>
            <div className="offerBody">
              <div className="price flex">
                <h4>
                  {price}
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className='icon'/>
                  <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                  <MdBathtub className='icon'/>
                  <small>1 bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className='icon'/>
                  <small>Wifi</small>
                </div>

                <div className="singleAmenity flex">
                  <MdAirportShuttle className='icon'/>
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className='icon'/>
                <small>{location}</small>
              </div>
              <button className='btn flex'>View Details
              <BsArrowRightShort className='icon'/>
              </button>
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

export default Offers