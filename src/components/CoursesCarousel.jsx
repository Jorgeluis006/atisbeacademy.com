import React, { useState } from 'react'

export default function CoursesCarousel({ courses }) {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + courses.length) % courses.length)
  const next = () => setIndex((i) => (i + 1) % courses.length)

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={prev} aria-label="Anterior">‹</button>
      <div className="carousel-track">
        {courses.map((c, i) => (
          <div key={c.title} className={`card ${i === index ? 'active' : ''}`} aria-hidden={i !== index}>
            <img src={c.img} alt={c.title} />
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
      <button className="carousel-btn" onClick={next} aria-label="Siguiente">›</button>
    </div>
  )
}
