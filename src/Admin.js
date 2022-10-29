import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      Выбросись в окно, но прежде отдай телефон человеку справа
      <Link to="/">Home</Link>
    </div>
  )
}
