import { redirect } from "react-router-dom";

export async function createUserAction({ request }) {
  const formData = await request.formData();
  const userName = String(formData.get("userName") ?? "").trim();

  if (!userName) return null;

  localStorage.setItem("userName", JSON.stringify(userName));

  return redirect("/");
}
