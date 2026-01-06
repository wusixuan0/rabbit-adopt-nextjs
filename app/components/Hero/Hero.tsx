'use client'

import './styles/9852d7ed31ea3fd9.css'
import './styles/85513d82727bb32e.css'
import './styles/hero.css'

import { Carousel } from 'nuka-carousel'
import CustomArrows from './CustomArrows'
import VideoCarouselContent from './VideoCarouselContent'
import OverlayContent from './OverlayContent'

export default function Hero() {
  const videos = [
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/IMG_6923_how5ta.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767565733/IMG_6940_bp1zku.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6761_hup6qv.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
      className: "customPosition"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6798_youifd.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
      className: "customPosition"
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6587_eyks7g.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767667326/IMG_6908_iaixju.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcq4tnjgj/video/upload/v1767584670/IMG_6693_vmg0po.mp4",
      poster: "https://res.cloudinary.com/dcq4tnjgj/image/upload/v1767666246/loki-1_gwfqzq.jpg",
    }
  ]

  const overlayTexts = [
    {
      title: "Adopt Loki",
      subtitle: "Available for adoption at Toronto Humane Society."
    },
    {
      title: "Affectionate",
      subtitle: "Watch him melts into a puddle when you gentle head pets him."
    },
    {
      title: "Confident",
      subtitle: "Loki has opinions and will express them. If you move his stuff, he'll let you know."
    },
    {
      title: "Food driven",
      subtitle: "This video is how he looks at you when you eat a banana."
    },
    {
      title: "Curious",
      subtitle: "This video took place at his second day arriving at fosters."
    },
    {
      title: "Loving",
      subtitle: "He'll be your fluffy shadow at a distance. A perfect parallel play buddy."
    },
    {
      title: "Good with other pets",
      subtitle: "But must require very gentle and slow introduction."
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
                // wrapMode="wrap"
              >
                {/* 用新的 wrapper component */}
                <VideoCarouselContent videos={videos} />
                <OverlayContent texts={overlayTexts} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}