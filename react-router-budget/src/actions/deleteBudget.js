import { toast } from "react-toastify";
import { deleteBudgetById } from "./helpers";
import { redirect } from "react-router-dom";

export async function deleteDataAction(budgetId) {
    deleteBudgetById(budgetId);
    toast.success("Usunąłeś budżet.");
    return redirect("/");
}