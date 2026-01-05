'use client'
import { useCarousel } from 'nuka-carousel'

export default function CustomArrows() {
  const { currentPage, totalPages, wrapMode, goBack, goForward } = useCarousel()

  const allowWrap = wrapMode === 'wrap'
  const enablePrevNavButton = allowWrap || currentPage > 0
  const enableNextNavButton = allowWrap || currentPage < totalPages - 1

  return (
    <nav 
      className="hero-component_arrownavigation__2TwSg" 
      aria-label="Carousel navigation"
    >
      <button
        type="button"
        className={`hero-component_arrowButton__o0STZ hero-component_arrowLeft__4lAJk ${
          !enablePrevNavButton ? 'opacity-50 cursor-default' : ''
        }`}
        aria-label="Previous slide"
        onClick={goBack}
        disabled={!enablePrevNavButton}
      >
        <svg 
          viewBox="1 0 16 16" 
          xmlns="http://www.w3.org/2000/svg" 
          className="hero-component_icon__88vzt" 
          focusable="false" 
          role="img" 
          aria-hidden="true"
        >
          <path 
            d="M3.004 7.501H15.82v1H3.004l5.007 5.151-.717.697-6.171-6.348 6.171-6.349.717.697z" 
            fill="currentColor"
          />
        </svg>
      </button>
      
      <button
        type="button"
        className={`hero-component_arrowButton__o0STZ hero-component_arrowRight__jLH_K ${
          !enableNextNavButton ? 'opacity-50 cursor-default' : ''
        }`}
        aria-label="Next slide"
        onClick={goForward}
        disabled={!enableNextNavButton}
      >
        <svg 
          viewBox="1 0 16 16" 
          xmlns="http://www.w3.org/2000/svg" 
          className="hero-component_icon__88vzt" 
          focusable="false" 
          role="img" 
          aria-hidden="true"
        >
          <path 
            d="M14.637 7.501H1.82v1h12.817L9.63 13.652l.717.697 6.17-6.348-6.17-6.349-.717.697z" 
            fill="currentColor"
          />
        </svg>
      </button>
    </nav>
  )
}