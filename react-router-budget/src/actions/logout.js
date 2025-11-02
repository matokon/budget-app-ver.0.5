import { redirect } from "react-router-dom";
import { deleteData } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
    deleteData({key: "userName"});
    deleteData({key: "budgets"});
    toast.success("Usunąłeś użytkownika.")
    return redirect("/log")
}