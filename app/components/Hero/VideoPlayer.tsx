'use client'
import './styles/9852d7ed31ea3fd9.css'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'
import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  poster: string
  className?: string
}

export default function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.play().catch(err => {
      console.log('Autoplay failed:', err)
      setIsPlaying(false)
    })

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

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
    <div className="hero-component_mediaWrapper__h9ZA6">
      <div data-testid="media-block" className="hero-component_mediablock__YaLTj">
        <div className="media-action-block_mediaContainer__clkPV">
          <div className="hero-component_mediaWrapperInner__c8dub">
            <div className="video-player_videoPlayerContainer__gSoaQ video-player_aspectRatio-16-9__7a3dk">
              <video
                ref={videoRef}
                className={`video-player_videoPlayer__1BpuJ video-player_aspectRatio-16-9__7a3dk ${className}`}
                playsInline
                poster={poster}
                autoPlay
                loop
                muted
                controlsList="nodownload noremoteplayback novolume"
                disablePictureInPicture
                preload="auto"
                src={src}
              />
              
              <div className="video-player_videoOverlay__y_2O1 video-player_playPauseOnlyButtonContainer__KK4Np">
                <button 
                  className="video-player_playPauseContainer__MdE4p" 
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  onClick={togglePlayPause}
                >
                  <span className="video-player_playPauseButton__dH55c video-player_bottomRight__9IDnw hero-component_mediaWrapperInnerPlayButton__FfccN">
                    {isPlaying ? (
                      <svg viewBox="1 0 16 16" xmlns="http://www.w3.org/2000/svg" className="video-player_pauseIcon__oWN98" focusable="false" role="img" aria-hidden="true">
                        <path d="M5.8 4v8h2V4zm4 0v8h2V4z" fill="currentColor"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="video-player_playIcon__abc123" focusable="false" role="img" aria-hidden="true">
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
  )
}