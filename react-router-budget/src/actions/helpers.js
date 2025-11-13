
export const fetchData = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const deleteData = ({key}) => {
  return localStorage.removeItem(key);
}

export const getBudgets = () =>
  JSON.parse(localStorage.getItem("budgets") || "[]");

export const saveBudget = (budget) => {
  const budgets = getBudgets();
  const next = [...budgets, budget];
  localStorage.setItem("budgets", JSON.stringify(next));
  return budget;
};

export function setData(key, value){
  localStorage.setItem(key, stringify(value));
}

export function deleteBudgetById(id) {
  const budgets = getBudgets("budgets");
  newBudgets = budgets.filter(budget !== budget.id !== id);
  setData("budgets", newBudgets);
};
