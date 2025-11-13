import { redirect } from "react-router-dom";
import { saveBudget } from "./helpers"
import { toast } from "react-toastify";

export async function budgetAction({ request }) {
  const formData = await request.formData();

  const name = String(formData.get("newBudget") || "").trim();
  const amountStr = String(formData.get("newBudgetAmount") || "").replace(",", ".");
  const amount = Number.parseFloat(amountStr);

  if (!Number.isFinite(amount) || amount <= 0) {
    toast.error("Kwota musi być dodatnią liczbą");
    return null;
  }

  const budget = {
    id: crypto.randomUUID(),
    name,
    amount,
    createdAt: Date.now(),
  };

  saveBudget(budget);
  toast.success("Budżet utworzony!");

  return redirect("/");
}
