'use client'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'

import { Carousel } from 'nuka-carousel'
import CustomArrows from './CustomArrows'
import VideoCarouselContent from './VideoCarouselContent'
import OverlayContent from './OverlayContent'

export default function Hero() {
  const slides = [
    {
      title: "Adopt Loki",
      subtitle: "Available for adoption at Toronto Humane Society.",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/IMG_6923_how5ta.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767722233/IMG_6743_jtojwt.mp4",
      title: "Affectionate",
      subtitle: "Watch him melts into a puddle when you gentle head pets him.",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      title: "Confident",
      subtitle: "Loki has opinions and will express them. If you move his stuff, he'll let you know.",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6761_hup6qv.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
      className: "customPosition"
    },
    {
      title: "Food driven",
      subtitle: "This video is how he looks at you when you eat a banana.",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6798_youifd.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
      className: "customPosition",
    },
    {
      title: "Good habits",
      subtitle: "Perfect litter skills. Doesn't chew household items. This video took place at his second day arriving at foster home.",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6587_eyks7g.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      title: "Loving",
      subtitle: "He'll be your fluffy shadow at a distance. A perfect parallel play buddy.",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767667326/IMG_6908_iaixju.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      title: "Good with other pets",
      subtitle: "But must require very gentle and slow introduction.",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6693_vmg0po.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      title: "Ready for Loki?",
      subtitle: "Visit Toronto Humane Society (located at 11 River Street) to fill out an adoption application",
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767565733/IMG_6940_bp1zku.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg"
    },
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
              >
                <VideoCarouselContent 
                  videos={slides.map(s => ({ src: s.src, poster: s.poster }))} 
                />
                <OverlayContent
                  texts={slides.map(s => ({ title: s.title, subtitle: s.subtitle }))} 
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}