'use client'

import './styles/9852d7ed31ea3fd9.css'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'

import { Carousel } from 'nuka-carousel';
import VideoPlayer from './VideoPlayer'
import CustomArrows from './CustomArrows'

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div>
        <div>
          <div>
            <div className="hero-component_productGallery__L4hQh" style={{ '--headerHeightHero': '149px' } as React.CSSProperties}>
              
              <Carousel 
                showArrows arrows={<CustomArrows />}
                // wrapMode="wrap"
              >
                <VideoPlayer
                  src="https://res.cloudinary.com/dcq4tnjgj/video/upload/IMG_6923_how5ta.mp4"
                  poster="todo.jpg"
                />
                <VideoPlayer
                  src="https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767565733/IMG_6940_bp1zku.mp4"
                  poster="todo.jpg"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Text Overlay */}
      <div className="hero-component_overlay__koYq_ hero-component_overlayCenter__FEAsD">
        <div>
          <h2 className="hero-component_heading__1i1O4">
            <span className="hero-component_title-word-container__VCFyw">
              {['A', 'd', 'o', 'p', 't'].map((char, i) => (
                <span 
                  key={`adopt-${i}`}
                  className="hero-component_title-char__UAF2P"
                  style={{ animationDelay: `${110 + i * 10}ms` }}
                >
                  {char}
                </span>
              ))}
              <span className="title-char" style={{ animationDelay: '150ms' }}>&nbsp;</span>
            </span>
            <span className="hero-component_title-word-container__VCFyw">
              {['L', 'o', 'k', 'i'].map((char, i) => (
                <span 
                  key={`loki-${i}`}
                  className="hero-component_title-char__UAF2P"
                  style={{ animationDelay: `${160 + i * 10}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>
          <p className="hero-component_subheading__zYqxz hero-component_title-char__UAF2P hide-on-mobile">
            Available for adoption at Toronto Humane Society.
          </p>
        </div>
        
        <div className="hero-component_buttonGroup__h2XxF hide-on-mobile">
          <div className="hero-component_actionButtons__R4u_X">
            <a 
              className="button_button__ppN__ hero-component_buttonaction__BrcDS button_buttonOutline__S2z23"
              href="#about-loki"
            >
              About Loki
            </a>
            <a 
              className="button_button__ppN__ hero-component_buttonaction__BrcDS button_buttonOutline__S2z23"
              href="#whyimadethis"
            >
              How To Copy This Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}