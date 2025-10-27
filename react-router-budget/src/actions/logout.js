import { redirect } from "react-router-dom";

export async function logoutAction() {
    // TODO usuwanie usera
    console.log("[logoutAction] fired");
    return redirect("/")
}