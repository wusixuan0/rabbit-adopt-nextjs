'use client'

import './styles/9852d7ed31ea3fd9.css'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 初始化：静音并播放
    video.muted = true
    video.play().catch(err => {
      console.log('Autoplay failed:', err)
      setIsPlaying(false)  // 如果 autoplay 失败，更新状态
    })

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    // Cleanup: 移除事件监听
    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  // Toggle play/pause
  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

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
                        
                        {/* Play/Pause Overlay Button */}
                        <div className="video-player_videoOverlay__y_2O1 video-player_playPauseOnlyButtonContainer__KK4Np">
                          <button 
                            className="video-player_playPauseContainer__MdE4p" 
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                            onClick={togglePlayPause}
                          >
                            <span className="video-player_playPauseButton__dH55c video-player_bottomRight__9IDnw hero-component_mediaWrapperInnerPlayButton__FfccN">
                              {isPlaying ? (
                                <svg 
                                  viewBox="1 0 16 16" 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className="video-player_pauseIcon__oWN98" 
                                  focusable="false" 
                                  role="img" 
                                  aria-hidden="true"
                                >
                                  <path d="M5.8 4v8h2V4zm4 0v8h2V4z" fill="currentColor"></path>
                                </svg>
                              ) : (
                                <svg 
                                  viewBox="0 0 16 16" 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className="video-player_playIcon__abc123" 
                                  focusable="false" 
                                  role="img" 
                                  aria-hidden="true"
                                >
                                  <path d="m12.82 8-7-4v8z" fill="currentColor"></path>
                                </svg>
                              )}
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