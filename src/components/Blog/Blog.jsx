import React, {useEffect} from 'react'
import './blog.css'

import {BsArrowRightShort} from 'react-icons/bs'

import img from '../../assets/9.jpg'
import img2 from '../../assets/10.jpg'
import img3 from '../../assets/11.jpg'
import img4 from '../../assets/12.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Post = [
  {
    id: 1,
    postImage: img4,
    title: 'Dalada Maligawa Sri Lanka',
    desc: 'The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa, is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha',
  },

  {
    id: 2,
    postImage: img,
    title: 'Badulla Train Tour',
    desc: 'The train ride from Colombo to Badulla will awaken all your senses. Take in Sri Lanka’s breathtaking natural sights as you traverse terraced tea plantations, lush forests and misty mountains',
  },

  {
    id: 3,
    postImage: img2,
    title: 'Ravana Waterfall, let us travel!',
    desc: 'Ravana Falls is a popular sightseeing attraction in Sri Lanka. It currently ranks as one of the widest falls in the country',
  },

  {
    id: 4,
    postImage: img3,
    title: 'Paradeniya Botnical Garden',
    desc: 'Royal Botanic Gardens, Peradeniya are about 5.5 km to the west of the city of Kandy in the Central Province of Sri Lanka. In 2016, the garden was visited by 1.2 million locals and 400,000 foreign visitors',
  },
]



const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <div className='secIntor'>
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
            Our Best Blog
          </h2>
          
        </div>
        <div className='mainContainer grid'>
            {
              Post.map(({postImage, title, desc})=>{
                return(
                  <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
              <div className="imgDiv">
                <img src={postImage} alt="Image Name" />
              </div>

              <div className="postDetails">
                <h3 data-aos="fade-up" data-aos-duration="3000">
                  {title}
                </h3>
                <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
              </div>
              <a href="" className='flex' data-aos="fade-up" data-aos-duration="4000">
                Read More
                <BsArrowRightShort className='icon'/>
              </a>
            </div>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Blog