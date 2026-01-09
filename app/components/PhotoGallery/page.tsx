'use client'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import styles from './styles.module.css';
import imagesData from '@/data/images.json'

interface ImageData {
  url: string
  width: number
  height: number
}

interface Images {
  images: ImageData[]
}

export default function PhotoGallery({ images = imagesData }: Images) {
  const visibleCount = 6
  const remainingCount = images.length - visibleCount

  const dataSource = images.map((image, index) => ({
    sourceId: index,
    original: image.url,
    thumbnail: image.url,
    width: image.width,
    height: image.height,
  }));

  return (
    <Gallery dataSource={dataSource}>
      <div className={styles.galleryGrid}>
        {images.slice(0, visibleCount).map((image, index) => {
          const isLast = index === visibleCount - 1

          return (
            <div key={index} className={styles.itemContainer}>

              <Item
                sourceId={index}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <div ref={ref} onClick={open}
                  style={{ position: 'relative', cursor: 'pointer' }}
                  >
                    {isLast && remainingCount > 0 && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          color: '#fff',
                          fontSize: '2em',
                          fontWeight: 'bold',
                        }}
                      >
                        + {remainingCount}
                      </div>
                    )}
                    <img src={image.url}
                    />
                  </div>
                )}
              </Item>

            </div>
          )
        })}
      </div>
    </Gallery>
  )
}
