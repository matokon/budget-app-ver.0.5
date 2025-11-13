import React from 'react'
import { deleteDataAction } from '../actions/deleteBudget';

const BudgetCard = ({ budgets = [] }) => {
      // if (!budget || !budget.items) return null; not working

  const handleDelete = async (budgetId) => {
    if (!confirm("Na pewno chcesz usunąć ten budżet?")) return ; 
    deleteDataAction(budgetId);}

  return (
    <>
      <div className='budget-wrapper'>
      <h2 className='h3'>Istniejące Budżety</h2>
      {budgets.map(b => (
        <div key={b.id} className= 'budget-card'>
          <div className='budget-header'>
          <h5 className='h6'>{b.name}</h5>
          <h5 className='h6'>Budżet:  {b.amount}zł</h5>
          <button type='button'
           className='btn btn--warning'
            onClick={() => handleDelete(b.id)}>
          <span>Usuń budżet</span>
          </button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default BudgetCard;