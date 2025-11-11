import React from 'react'

const BudgetCard = ({ budgets = [] }) => {
      // if (!budget || !budget.items) return null; not working

  return (
    <div className='budget-wrapper'>
      <h2 className='h3'>Istniejące Budżety</h2>
      <div className='budget-wrapper'>
      {budgets.map(b => (
        <div key={b.id}>{b.name}</div>
      ))}
      </div>
    </div>
  );
};

export default BudgetCard;