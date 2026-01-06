'use client'

import './styles/9852d7ed31ea3fd9.css'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'

import { Carousel } from 'nuka-carousel'
import CustomArrows from './CustomArrows'
import VideoCarouselContent from './VideoCarouselContent'

export default function Hero() {
  // 把视频数据提取出来
  const videos = [
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/IMG_6923_how5ta.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767565733/IMG_6940_bp1zku.mp4",
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6761_hup6qv.mp4",
      className: "customPosition"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6798_youifd.mp4",
      className: "customPosition"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6587_eyks7g.mp4",
    },
    { src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767667326/IMG_6908_iaixju.mp4" },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6693_vmg0po.mp4",
    }
  ]

  return (
    <div className="hero-wrapper">
      <div>
        <div>
          <div>
            <div className="hero-component_productGallery__L4hQh" style={{ '--headerHeightHero': '149px' } as React.CSSProperties}>
              
              <Carousel 
                initialPage={0}
                showArrows 
                arrows={<CustomArrows />}
                // wrapMode="wrap"
              >
                {/* 用新的 wrapper component */}
                <VideoCarouselContent videos={videos} />
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
          <p className="hero-component_subheading__zYqxz hero-component_title-char__UAF2P">
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