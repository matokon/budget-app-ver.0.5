import React from 'react'
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom';
import { AddBudgetForm } from '../components/AddBudgetForm';

export function dashboardLoader(){
    const userName = fetchData("userName");
    const budget = fetchData("budget");
    return { userName, budget }
}

const Dashboard = () => {
    const { userName } = useLoaderData()
  return (
    <>
      {userName ? (
      <div className="dashboard">
        <h1>Witaj spowrotem, <span className='accent'>{userName}</span></h1>
        <div className="grid-sm">
          {/* {budget ? () : ()} */}
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm/>
            </div>
          </div>
        </div>
      </div>
      ) : 'Zaloguj się'}
    </>
  )
}

export default Dashboard