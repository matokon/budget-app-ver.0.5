import { redirect } from "react-router-dom";

export async function logoutAction() {
    // TODO usuwanie usera
    deleteData()
    return redirect("/logout")
}