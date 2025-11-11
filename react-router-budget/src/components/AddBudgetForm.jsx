import React from 'react'
import {Form} from "react-router-dom"
import {PlusCircleIcon} from '@heroicons/react/24/solid'

export const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
        <h2 className='h3'>
            Stwórz nowy budżet
        </h2>
        <Form
        method='post'
        className='grid-sm'>
        <div className='grid-xs'>
            <label htmlFor='newBudget'>Nazwa Nowego Budżetu</label>
            <input type='text'
             name='newBudget'
              id='newBudget'
              placeholder='np. Kosmetyki'
              required
              >
              </input>
        </div>
        <div className="grid-xs">
            <label htmlFor='newBudgetAmount'>
                Kwota
            </label>
            <input
            type='number'
            step='0.01'
            name='newBudgetAmount'
            id='newBudgetAmount'
            placeholder='np. 350zł'
            required
            inputMode='decimal'
            >
            </input>
        </div>
        <button type='submit' className='btn btn--dark'>
            <span>Dodaj</span>
            <PlusCircleIcon width={20}/>
        </button>
        </Form>
    </div>
  )
}
