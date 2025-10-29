import React from 'react'
import { Form } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/solid'

export const Log = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Zbuduj zdrowe nawyki <span className='accent'>finansowe</span>
        </h1>
        <p>
          Kontroluj koszty, żyj spokojniej. Zacznij już dziś.
        </p>
        <Form method='post'>
          <input 
          type='text' name='userName'
          required placeholder='Jak masz na imie?'
          autoComplete='given-name'/>
          <button type='submit' className='btn btn--dark'>
            <span>Utwórz konto </span>
            <UserIcon width={20}/>
          </button>
        </Form>
      </div>
    </div>
  )
}
