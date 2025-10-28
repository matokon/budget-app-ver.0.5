import { redirect } from "react-router-dom";
import { deleteData } from "../helpers";

export async function logoutAction() {
    // TODO usuwanie usera
    deleteData({key: "userName"});
    return redirect("/logout")
}