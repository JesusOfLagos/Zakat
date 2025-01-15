import React from 'react'

interface BlankCanvasProps {
  width?: string
  height?: string
  backgroundColor?: string
  className?: string
}

export default function BlankCanvas({
  width = '100%',
  height = '100vh',
  backgroundColor = 'white',
  className = ''
}: BlankCanvasProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
      }}
      className={`flex items-center justify-center ${className}`}
    >
    </div>
  )
}