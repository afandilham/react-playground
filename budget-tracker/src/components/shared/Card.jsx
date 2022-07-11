import React from 'react'

export default function Card({ children }) {
  return (
    <div className="container mx-auto max-w-4xl stats bg-base-300 shadow-xl mb-6">
      {children}
    </div>
  )
}
