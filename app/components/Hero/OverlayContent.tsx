'use client'
import { useCarousel } from 'nuka-carousel'

interface OverlayContentProps {
  texts: Array<{
    title: string
    subtitle: string
  }>
}

export default function OverlayContent({ texts }: OverlayContentProps) {
  const { currentPage } = useCarousel()
  
  const currentText = texts[currentPage]
  
  const titleWords = currentText.title.split(' ')
  
  return (
    <div className="hero-component_overlay__koYq_ hero-component_overlayCenter__FEAsD">
      <div>
        <h2 className="hero-component_heading__1i1O4">
          {titleWords.map((word, wordIndex) => (
            <span key={wordIndex} className="hero-component_title-word-container__VCFyw">
              {word.split('').map((char, charIndex) => (
                <span 
                  key={`${wordIndex}-${charIndex}`}
                  className="hero-component_title-char__UAF2P"
                  style={{ 
                    animationDelay: `${110 + charIndex * 10}ms` 
                  }}
                >
                  {char}
                </span>
              ))}
              {/* 如果不是最后一个词，添加空格 */}
              {wordIndex < titleWords.length - 1 && (
                <span 
                  className="hero-component_title-char__UAF2P" 
                  style={{ 
                    animationDelay: `${110 + word.length * 10}ms` 
                  }}
                >
                  &nbsp;
                </span>
              )}
            </span>
          ))}
        </h2>
        <p className="hero-component_subheading__zYqxz hero-component_title-char__UAF2P">
          {currentText.subtitle}
        </p>
      </div>
      
        <div className={`hero-component_buttonGroup__h2XxF ${currentPage === 0 ? '' : 'hidden'}`}>
          <div className="hero-component_actionButtons__R4u_X">
            <a
              className="button_button__ppN__ hero-component_buttonaction__BrcDS button_buttonOutline__S2z23"
              href="#about-loki"
            >
              About Loki
            </a>
            <a 
              className="button_button__ppN__ hero-component_buttonaction__BrcDS button_buttonOutline__S2z23"
              href="https://carbonated-waxflower-92e.notion.site/2dc472a486ad809aa8c5e16b19716dbb"
            >
              How To Copy This Website
            </a>
          </div>
        </div>
      </div>

  )
}