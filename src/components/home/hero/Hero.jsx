import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <>
   <section className='hero' >
    <div className="container">
        <div className="row">
            <Title subtitle='WELCOME TO VALMIKI ASHRAM' title='Best Online Education'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus voluptatem quo, cum laboriosam aspernatur laudantium rerum facere cumque ab atque vitae fugit repellat at porro dolore adipisci vero nisi!</p>
        <div className="button">
            <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
        </div>
        </div>
    </div>
   </section>
   <div className="margin"></div>
    </>
  )
}

export default Hero
