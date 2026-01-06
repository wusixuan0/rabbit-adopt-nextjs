'use client'
import { useCarousel } from 'nuka-carousel'
import { useEffect } from 'react'
import VideoPlayer from './VideoPlayer'

interface VideoCarouselContentProps {
  videos: Array<{
    src: string
    poster: string
    className?: string
  }>
}

export default function VideoCarouselContent({ videos }: VideoCarouselContentProps) {
  const { currentPage } = useCarousel()

  // 可选：打印看看 currentPage 变化
  useEffect(() => {
    console.log('Current page:', currentPage)
  }, [currentPage])

  return (
    <>
      {videos.map((video, index) => (
        <VideoPlayer
          key={index}
          src={video.src}
          poster={video.poster}
          className={video.className}
          isActive={index === currentPage}
        />
      ))}
    </>
  )
}