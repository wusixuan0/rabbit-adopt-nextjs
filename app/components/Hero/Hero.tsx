'use client'

import './styles/9852d7ed31ea3fd9.css'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(err => console.log('Autoplay failed:', err))
    }
  }, [])

  return (
    <div className="hero-wrapper">
      <div>
        <div>
          <div>
            <div className="hero-component_productGallery__L4hQh" style={{ '--headerHeightHero': '149px' } as React.CSSProperties}>
              <div className="hero-component_mediaWrapper__h9ZA6">
                <div data-testid="media-block" className="hero-component_mediablock__YaLTj">
                  <div className="media-action-block_mediaContainer__clkPV">
                    <div className="hero-component_mediaWrapperInner__c8dub">
                      <div className="video-player_videoPlayerContainer__gSoaQ video-player_aspectRatio-16-9__7a3dk">
                        <video
                          ref={videoRef}
                          className="video-player_videoPlayer__1BpuJ video-player_aspectRatio-16-9__7a3dk"
                          playsInline
                          poster="/images/loki/IMG_6800.jpg"
                          autoPlay
                          loop
                          muted
                          controlsList="nodownload noremoteplayback novolume"
                          disablePictureInPicture
                          preload="auto"
                          src="https://res.cloudinary.com/dcq4tnjgj/video/upload/IMG_6923_how5ta.mp4"
                        >
                        </video>
                        
                        <div className="video-player_videoOverlay__y_2O1 video-player_playPauseOnlyButtonContainer__KK4Np">
                          <button className="video-player_playPauseContainer__MdE4p" aria-label="Pause video">
                            <span className="video-player_playPauseButton__dH55c video-player_bottomRight__9IDnw hero-component_mediaWrapperInnerPlayButton__FfccN">
                              <svg viewBox="1 0 16 16" xmlns="http://www.w3.org/2000/svg" className="video-player_pauseIcon__oWN98" focusable="false" role="img" aria-hidden="true">
                                <path d="M5.8 4v8h2V4zm4 0v8h2V4z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        
        <div className="hero-component_buttonGroup__h2XxF">
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