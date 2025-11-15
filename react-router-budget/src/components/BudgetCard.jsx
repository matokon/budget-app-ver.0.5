import React, { useState, useEffect } from 'react';
import { deleteDataAction } from '../actions/deleteBudget';

const BudgetCard = ({ budgets = [] }) => {
  // lokalny state, który będzie trzymał to, co wyświetlamy
  const [items, setItems] = useState(budgets);

  // jeśli props `budgets` się zmieni (np. po reloadzie), zsynchronizuj state
  useEffect(() => {
    setItems(budgets);
  }, [budgets]);

  const handleDelete = async (budgetId) => {
    if (!window.confirm("Na pewno chcesz usunąć ten budżet?")) return;

    // 1. usuń z localStorage
    await deleteDataAction(budgetId);

    // 2. usuń z lokalnego state -> React zrobi rerender
    setItems((prev) =>
      prev.filter((b) => String(b.id) !== String(budgetId))
    );
  };

  return (
    <>
      <div className='budget-wrapper'>
        <h2 className='h3'>Istniejące Budżety</h2>
        {items.map((b) => (
          <div key={b.id} className='budget-card'>
            <div className='budget-header'>
              <h5 className='h6'>{b.name}</h5>
              <h5 className='h6'>Budżet: {b.amount}zł</h5>
              <button
                type='button'
                className='btn btn--warning'
                onClick={() => handleDelete(b.id)}
              >
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
