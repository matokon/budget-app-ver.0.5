import React from 'react'
import { Form, Link, NavLink } from 'react-router-dom'
import { TrashIcon, BanknotesIcon } from '@heroicons/react/24/solid'
import { logoutAction } from '../actions/logout'

export const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink to="/">
          <BanknotesIcon width={30}/>
          <span>Budget-app</span>
        </NavLink>
        {
          userName && (
            <Form 
            method='post' 
            action='/logout' 
            onSubmit={(event)=>{
              if(!confirm("Usuń użytkownika i wszystkie jego dane?"))
              {
                event.preventDefault()
              }}}>
              <button type='submit' className='btn btn--warning'>
                <span>Usuń użytkownika</span>
                <TrashIcon width={20}/>
              </button>
            </Form>
          )
        }
    </nav>
  )
}
