
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const deleteData = () => {
  clearAllStorage();
  return redirect("/logout");
}