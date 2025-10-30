import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <h1>Ups! Coś poszło nie tak.</h1>
      <p>Wystąpił nieoczekiwany błąd. Spróbuj ponownie albo wróć na stronę główną.</p>
      <Link to="/" className="btn btn--dark">
        Strona główna
        <HomeIcon width={25} />
      </Link>
    </div>
  )
}

export default Error