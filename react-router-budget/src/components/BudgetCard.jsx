import React from 'react'

const BudgetCard = ({ budgets = [] }) => {
      // if (!budget || !budget.items) return null; not working

  return (
    <>
      <div className='budget-wrapper'>
      <h2 className='h3'>Istniejące Budżety</h2>
      {budgets.map(b => (
        <div key={b.id} className= 'budget-card'>
          <div className='budget-header'>
          <h5 className='h6'>{b.name}</h5>
          <h5 className='h6'>Budżet:  {b.amount}zł</h5>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default BudgetCard;