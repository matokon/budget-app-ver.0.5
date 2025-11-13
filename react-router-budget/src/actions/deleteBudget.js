import { toast } from "react-toastify";

export async function deleteDataAction(budgetId) {
    toast.success("Usunąłeś budżet.")
    deleteBudgetById(budgetId);
}