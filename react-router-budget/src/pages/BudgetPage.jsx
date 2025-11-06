import { useEffect, useState } from "react";
import { getBudgets } from "../helpers";

export default function BudgetsPage() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const data = getBudgets();  // <- dane z localStorage
    setBudgets(data);           // <- zapisujesz do state
  }, []);

  return (
    <div>
      <h1>Twoje budżety</h1>

      {budgets.length === 0 ? (
        <p>Brak zapisanych budżetów.</p>
      ) : (
        <ul>
          {budgets.map((b) => (
            <li key={b.id}>
              <strong>{b.name}</strong> – {b.amount} zł
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
