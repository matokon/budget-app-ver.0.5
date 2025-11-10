import React from 'react'
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom';
import { AddBudgetForm } from '../components/AddBudgetForm';
import BudgetCard from '../components/BudgetCard';

export function dashboardLoader(){
    const userName = fetchData("userName");
    const budget = fetchData("budget") || [];
    return { userName, budget }
}

const Dashboard = () => {
    const { userName, budget } = useLoaderData()
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
              <BudgetCard budgets={budget} />
            </div>
          </div>
        </div>
      </div>
      ) : 'Zaloguj się'}
    </>
  )
}

export default Dashboard